const VERTEX_SHADER = `#version 300 es
in vec3 aPosition;
in vec3 aNormal;

uniform mat4 uModelView; //world
uniform mat4 uProjection;

out vec3 vPosition;
out vec3 vNormal;
vec3 lightDirection = vec3(1.0, 1.0, -0.5);
vec3 normal = vec3(0.0, 0.0, 1.0);

void main() {
  vec4 p = uModelView * vec4(aPosition, 1.0);
  vPosition = p.xyz;
  vNormal = mat3(uModelView) * aNormal;
  gl_Position = uProjection * p;
}
`;

const FRAGMENT_SHADER = `#version 300 es
precision mediump float;

in vec3 vPosition;
in vec3 vNormal;
in vec3 vSurfaceToLight;

uniform vec3 uLightPos;
uniform vec3 uColor;

// 0 = diffuse only, 1 = specular only
uniform int uLightMode;
// 0 = flat
uniform int uShadingMode;

out vec4 fragColor;

void main() {
  vec3 Ka = 0.2 * uColor;
  vec3 Kd = 0.8 * uColor;
  vec3 Ks = vec3(1.0);
  float shininess = 32.0;

  vec3 N = (uShadingMode == 1) 
    ? normalize(cross(vPosition - vPosition), (vPosition - vPosition));
    : normalize(vNormal);

  vec3 L = normalize(uLightPos - vPosition);
  vec3 V = normalize(-vPosition);
  vec3 R = reflect(-L, N);

  float diff = max(dot(N, L), 0.0);
  float spec = pow(max(dot(V, R), 0.0), shininess);

  //fragColor = vec4(Ka + Kd * diff + Ks * spec, 1.0);

  // DIFFUSE vs SPECULAR:
  if (uLightMode == 0) {
    fragColor = vec4(Ka + Kd * diff, 1.0);
  } else {
    fragColor = vec4(Ka + Ks * spec, 1.0);
  }
}
`;

// WebGL setup
const canvas = document.getElementById("glcanvas");
const gl = canvas.getContext("webgl2");

function compile(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
  return shader;
}

// Fixed attribute slots, so the meshes stay valid when the shaders are recompiled
const ATTRIBUTES = { aPosition: 0, aNormal: 1 };

function createProgram(vsSource, fsSource) {
  const prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, vsSource));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fsSource));
  for (const name in ATTRIBUTES) gl.bindAttribLocation(prog, ATTRIBUTES[name], name);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
  return prog;
}

// Shader editors
const vertEditor = document.getElementById("vertEditor");
const fragEditor = document.getElementById("fragEditor");
const shaderError = document.getElementById("shaderError");
vertEditor.value = VERTEX_SHADER;
fragEditor.value = FRAGMENT_SHADER;

let program, uModelView, uProjection, uLightPos, uColor;
let uShadingMode, uLightMode;

function updateProgram() {
  try {
    const prog = createProgram(vertEditor.value, fragEditor.value);
    gl.deleteProgram(program);
    program = prog;
    gl.useProgram(program);
    uModelView = gl.getUniformLocation(program, "uModelView");
    uProjection = gl.getUniformLocation(program, "uProjection");
    uLightPos = gl.getUniformLocation(program, "uLightPos");
    uColor = gl.getUniformLocation(program, "uColor");
    uLightMode = gl.getUniformLocation(program, "uLightMode");
    uShadingMode = gl.getUniformLocation(program, "uShadingMode");
    shaderError.textContent = "";
  } catch (e) {
    shaderError.textContent = e.message.replace(/\0/g, "");  // some drivers end the log with \0
  }
}
updateProgram();
vertEditor.addEventListener("input", updateProgram);
fragEditor.addEventListener("input", updateProgram);

function bindAttribute(name, data) {
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  gl.vertexAttribPointer(ATTRIBUTES[name], 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(ATTRIBUTES[name]);
}

function createMesh({ positions, normals, indices }) {
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  bindAttribute("aPosition", positions);
  bindAttribute("aNormal", normals);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
  return { vao, count: indices.length };
}

const cubeMesh = createMesh(createCube());
const cylinderMesh = createMesh(createCylinder(32));

//My two additional cubes
const cubeMesh2 = createMesh(createCube());
const cubeMesh3 = createMesh(createCube());

//WebGL setup
gl.enable(gl.DEPTH_TEST);
gl.clearColor(0, 0, 0, 1);
const projection = perspective(Math.PI / 4, canvas.width / canvas.height, 0.1, 100);
const lightWorld = [3, 4, 5];

// interactive controls
let dragRotX = 0, dragRotY = -0.5;      // mouse drag
let camX = 0, camY = 0, camZ = -7;      // arrow keys, w, s
let sliderAngle = 0;                    // degrees
let sliderTrans
let spinning = false, spinAngle = 0;    // Start/Stop button
let flatToggle = false;
let lightToggle = false;
let flatToggle2 = false;
let lightToggle2 = false;

let mouseDown = false, lastX, lastY;
canvas.addEventListener("mousedown", e => { mouseDown = true; lastX = e.clientX; lastY = e.clientY; });
window.addEventListener("mouseup", () => mouseDown = false);
window.addEventListener("mousemove", e => {
  if (!mouseDown) return;
  dragRotY += (e.clientX - lastX) * 0.01;
  dragRotX += (e.clientY - lastY) * 0.01;
  lastX = e.clientX; lastY = e.clientY;
});

document.addEventListener("keydown", e => {
  if (e.target === vertEditor || e.target === fragEditor) return;  // let the editors use the keys
  const step = 0.2;
  switch (e.key) {
    case "ArrowUp": camY -= step; break;
    case "ArrowDown": camY += step; break;
    case "ArrowLeft": camX += step; break;
    case "ArrowRight": camX -= step; break;
    case "w": camZ += step; break;
    case "s": camZ -= step; break;
    default: return;
  }
  e.preventDefault();  // keep the arrow keys from scrolling the page
});

//Selecting an axis to rotate on
const axisSelect = document.getElementById("axisSelect");
document.getElementById("sliderR").addEventListener("input", e => {
  sliderAngle = Number(e.target.value);
  document.getElementById("sliderValueR").textContent = sliderAngle;
});

const translationSelect = document.getElementById("translationSelect");
document.getElementById("sliderT").addEventListener("input", e => {
  sliderDest = Number(e.target.value);
  document.getElementById("sliderValueT").textContent = sliderDest;
});

document.getElementById("spinButton").addEventListener("click", () => spinning = !spinning);
document.getElementById("shaderButton").addEventListener("click", () => flatToggle = !flatToggle);
document.getElementById("lightButton").addEventListener("click", () => lightToggle = !lightToggle);
document.getElementById("shaderButton2").addEventListener("click", () => flatToggle2 = !flatToggle2);
document.getElementById("lightButton2").addEventListener("click", () => lightToggle2 = !lightToggle2);

//not sure what this is doing
function createNode(mesh, color, shape, lightMode = 0, shadingMode = 0) {
  return { mesh, color, shape, shadingMode, lightMode, joint: null, children: [] };
}

// Lower arm: scale the cylinder then move it up by 0.6 so its bottom sits at the joint
const lowerArm = createNode(cylinderMesh, [1, 0.2, 0.2],
  multiply(translate(0, 0.6, 0), scale(0.3, 0.6, 0.3)), 0, 0);

// Upper arm: scale the cube then move it up by 0.5 so its bottom sits at the joint
const upperArm = createNode(cubeMesh, [0.2, 0.4, 1],
  multiply(translate(0, 0.5, 0), scale(0.2, 0.5, 0.2)), 0, 0);

lowerArm.children.push(upperArm);

//Hand
const armHand = createNode(cubeMesh2, [0.2, 1, 0.2],
  multiply(translate(0, 0.6, 0), scale(0.2, 0.5, 0.3)), 0, 0);

upperArm.children.push(armHand);

//Finger
const armFinger = createNode(cubeMesh3, [1, 0.8, 0],
  multiply(translate(0, 0.4, 0), scale(0.1, 0.6, 0.3)), 0, 0);

armHand.children.push(armFinger);

function drawNode(node, frame) {
  gl.uniformMatrix4fv(uModelView, false, multiply(frame, node.shape));
  gl.uniform3fv(uColor, node.color);
  gl.uniform1i(uShadingMode, node.shadingMode);
  gl.uniform1i(uLightMode, node.lightMode);
  gl.bindVertexArray(node.mesh.vao);
  gl.drawElements(gl.TRIANGLES, node.mesh.count, gl.UNSIGNED_SHORT, 0);
}

//Data structure
function drawTree(root, rootFrame) {
  const stack = [[root, rootFrame]];
  while (stack.length > 0) {
    const [node, parentFrame] = stack.pop();
    const frame = multiply(parentFrame, node.joint);
    drawNode(node, frame);
    for (const child of node.children) stack.push([child, frame]);
  }
}

// Render loop
let lastTime = 0;
function render(time) {
  const t = time / 1000;
  if (spinning) spinAngle += t - lastTime;
  lastTime = t;
  if(flatToggle) {
    lowerArm.shadingMode = 1;
  }
  if(!flatToggle) {
    lowerArm.shadingMode = 0;
  } 
  if(lightToggle) {
    lowerArm.lightMode = 1;
  }
  if(!lightToggle) {
    lowerArm.lightMode = 0;
  }

  if(flatToggle2) {
    upperArm.shadingMode = 1;
  }
  if(!flatToggle2) {
    upperArm.shadingMode = 0;
  } 
  if(lightToggle2) {
    upperArm.lightMode = 1;
  }
  if(!lightToggle2) {
    upperArm.lightMode = 0;
  }
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Camera moves with the keys; the light stays fixed in the world.
  const view = translate(camX, camY, camZ);
  gl.uniformMatrix4fv(uProjection, false, projection);
  gl.uniform3fv(uLightPos, transformPoint(view, lightWorld));

  // Whole-model rotation
  const axisRotation = ROTATE[axisSelect.value](sliderAngle * Math.PI / 180 + spinAngle);
  const rotation = multiply(multiply(rotateY(dragRotY), rotateX(dragRotX)), axisRotation);

  // Lower arm (root)
  lowerArm.joint = multiply(multiply(translate(0, -2, 0), rotation), rotateZ(0.5 * Math.sin(t)));

  // Upper arm (child)
  upperArm.joint = multiply(translate(0, 1.2, 0), rotateZ(Math.sin(1.5 * t)));

  // Hand (grandchild)
  armHand.joint = multiply(translate(0, 1.2, 0), rotateY(Math.sin(1.5 * t)));

  // Finger (great grandchild)
  armFinger.joint = multiply(translate(0, 1.2, 0), rotateX(Math.sin(1.5 * t)));

  drawTree(lowerArm, view);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
