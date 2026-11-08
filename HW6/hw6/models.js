function createLongFloorTile() {
  const positions = new Float32Array([
    -6, -2,  0.1,   6, -2,  0.1,   6,  2,  0.1,  -6,  2,  0.1,   // front
     6, -2, -0.1,  -6, -2, -0.1,  -6,  2, -0.1,   6,  2, -0.1,   // back
    -6,  2,  0.1,   6,  2,  0.1,   6,  2, -0.1,  -6,  2, -0.1,   // top
    -6, -2, -0.1,   6, -2, -0.1,   6, -2,  0.1,  -6, -2,  0.1,   // bottom
     6, -2,  0.1,   6, -2, -0.1,   6,  2, -0.1,   6,  2,  0.1,   // right
    -6, -2, -0.1,  -6, -2,  0.1,  -6,  2,  0.1,  -6,  2, -0.1    // left
  ]);
  const faceNormals = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
  const normals = new Float32Array(faceNormals.flatMap(n => [...n, ...n, ...n, ...n]));

  // Tangent; bitangent = cross(N, T)
  const faceTangents = [[1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, -1], [0, 0, 1]];
  const tangents = new Float32Array(faceTangents.flatMap(t => [...t, ...t, ...t, ...t]));

  const texCoords = new Float32Array(faceNormals.flatMap(() => [0, 0, 1, 0, 1, 1, 0, 1]));

  const indices = new Uint16Array([
     0,  1,  2,   0,  2,  3,   // front
     4,  5,  6,   4,  6,  7,   // back
     8,  9, 10,   8, 10, 11,   // top
    12, 13, 14,  12, 14, 15,   // bottom
    16, 17, 18,  16, 18, 19,   // right
    20, 21, 22,  20, 22, 23    // left
  ]);
  return { positions, normals, tangents, texCoords, indices };
}

function createMedFloorTile() {
  const positions = new Float32Array([
    -4, -2,  0.1,   4, -2,  0.1,   4,  2,  0.1,  -4,  2,  0.1,   // front
     4, -2, -0.1,  -4, -2, -0.1,  -4,  2, -0.1,   4,  2, -0.1,   // back
    -4,  2,  0.1,   4,  2,  0.1,   4,  2, -0.1,  -4,  2, -0.1,   // top
    -4, -2, -0.1,   4, -2, -0.1,   4, -2,  0.1,  -4, -2,  0.1,   // bottom
     4, -2,  0.1,   4, -2, -0.1,   4,  2, -0.1,   4,  2,  0.1,   // right
    -4, -2, -0.1,  -4, -2,  0.1,  -4,  2,  0.1,  -4,  2, -0.1    // left
  ]);
  const faceNormals = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
  const normals = new Float32Array(faceNormals.flatMap(n => [...n, ...n, ...n, ...n]));

  // Tangent; bitangent = cross(N, T)
  const faceTangents = [[1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, -1], [0, 0, 1]];
  const tangents = new Float32Array(faceTangents.flatMap(t => [...t, ...t, ...t, ...t]));

  const texCoords = new Float32Array(faceNormals.flatMap(() => [0, 0, 1, 0, 1, 1, 0, 1]));

  const indices = new Uint16Array([
     0,  1,  2,   0,  2,  3,   // front
     4,  5,  6,   4,  6,  7,   // back
     8,  9, 10,   8, 10, 11,   // top
    12, 13, 14,  12, 14, 15,   // bottom
    16, 17, 18,  16, 18, 19,   // right
    20, 21, 22,  20, 22, 23    // left
  ]);
  return { positions, normals, tangents, texCoords, indices };
}

function createSmallFloorTile() {
  const positions = new Float32Array([
    -1, -2,  0.1,   1, -2,  0.1,   1,  2,  0.1,  -1,  2,  0.1,   // front
     1, -2, -0.1,  -1, -2, -0.1,  -1,  2, -0.1,   1,  2, -0.1,   // back
    -1,  2,  0.1,   1,  2,  0.1,   1,  2, -0.1,  -1,  2, -0.1,   // top
    -1, -2, -0.1,   1, -2, -0.1,   1, -2,  0.1,  -1, -2,  0.1,   // bottom
     1, -2,  0.1,   1, -2, -0.1,   1,  2, -0.1,   1,  2,  0.1,   // right
    -1, -2, -0.1,  -1, -2,  0.1,  -1,  2,  0.1,  -1,  2, -0.1    // left
  ]);
  const faceNormals = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
  const normals = new Float32Array(faceNormals.flatMap(n => [...n, ...n, ...n, ...n]));

  // Tangent; bitangent = cross(N, T)
  const faceTangents = [[1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, -1], [0, 0, 1]];
  const tangents = new Float32Array(faceTangents.flatMap(t => [...t, ...t, ...t, ...t]));

  const texCoords = new Float32Array(faceNormals.flatMap(() => [0, 0, 1, 0, 1, 1, 0, 1]));

  const indices = new Uint16Array([
     0,  1,  2,   0,  2,  3,   // front
     4,  5,  6,   4,  6,  7,   // back
     8,  9, 10,   8, 10, 11,   // top
    12, 13, 14,  12, 14, 15,   // bottom
    16, 17, 18,  16, 18, 19,   // right
    20, 21, 22,  20, 22, 23    // left
  ]);
  return { positions, normals, tangents, texCoords, indices };
}

function createSquareFloorTile() {
  const positions = new Float32Array([
    -2, -2,  0.1,   2, -2,  0.1,   2,  2,  0.1,  -2,  2,  0.1,   // front
     2, -2, -0.1,  -2, -2, -0.1,  -2,  2, -0.1,   2,  2, -0.1,   // back
    -2,  2,  0.1,   2,  2,  0.1,   2,  2, -0.1,  -2,  2, -0.1,   // top
    -2, -2, -0.1,   2, -2, -0.1,   2, -2,  0.1,  -2, -2,  0.1,   // bottom
     2, -2,  0.1,   2, -2, -0.1,   2,  2, -0.1,   2,  2,  0.1,   // right
    -2, -2, -0.1,  -2, -2,  0.1,  -2,  2,  0.1,  -2,  2, -0.1    // left
  ]);
  const faceNormals = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
  const normals = new Float32Array(faceNormals.flatMap(n => [...n, ...n, ...n, ...n]));

  // Tangent; bitangent = cross(N, T)
  const faceTangents = [[1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, -1], [0, 0, 1]];
  const tangents = new Float32Array(faceTangents.flatMap(t => [...t, ...t, ...t, ...t]));

  const texCoords = new Float32Array(faceNormals.flatMap(() => [0, 0, 1, 0, 1, 1, 0, 1]));

  const indices = new Uint16Array([
     0,  1,  2,   0,  2,  3,   // front
     4,  5,  6,   4,  6,  7,   // back
     8,  9, 10,   8, 10, 11,   // top
    12, 13, 14,  12, 14, 15,   // bottom
    16, 17, 18,  16, 18, 19,   // right
    20, 21, 22,  20, 22, 23    // left
  ]);
  return { positions, normals, tangents, texCoords, indices };
}

//Columns in hangar
function createColumn() {
  const positions = new Float32Array([
    -0.5, -0.5,  3,   0.5, -0.5,  3,   0.5,  0.5,  3,  -0.5,  0.5,  3,   // front
     0.5, -0.5, -3,  -0.5, -0.5, -3,  -0.5,  0.5, -3,   0.5,  0.5, -3,   // back
    -0.5,  0.5,  3,   0.5,  0.5,  3,   0.5,  0.5, -3,  -0.5,  0.5, -3,   // top
    -0.5, -0.5, -3,   0.5, -0.5, -3,   0.5, -0.5,  3,  -0.5, -0.5,  3,   // bottom
     0.5, -0.5,  3,   0.5, -0.5, -3,   0.5,  0.5, -3,   0.5,  0.5,  3,   // right
    -0.5, -0.5, -3,  -0.5, -0.5,  3,  -0.5,  0.5,  3,  -0.5,  0.5, -3    // left
  ]);
  const faceNormals = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
  const normals = new Float32Array(faceNormals.flatMap(n => [...n, ...n, ...n, ...n]));

  // Tangent; bitangent = cross(N, T)
  const faceTangents = [[1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, -1], [0, 0, 1]];
  const tangents = new Float32Array(faceTangents.flatMap(t => [...t, ...t, ...t, ...t]));

  const texCoords = new Float32Array(faceNormals.flatMap(() => [0, 0, 1, 0, 1, 1, 0, 1]));

  const indices = new Uint16Array([
     0,  1,  2,   0,  2,  3,   // front
     4,  5,  6,   4,  6,  7,   // back
     8,  9, 10,   8, 10, 11,   // top
    12, 13, 14,  12, 14, 15,   // bottom
    16, 17, 18,  16, 18, 19,   // right
    20, 21, 22,  20, 22, 23    // left
  ]);
  return { positions, normals, tangents, texCoords, indices };
}

//creating the two longer steps that I need two of
function createLargeStep() {
  const positions = new Float32Array([
    -3.5, -0.5,  0.1,   3.5, -0.5,  0.1,   3.5,  0.5,  0.1,  -3.5,  0.5,  0.1,   // front
     3.5, -0.5, -0.1,  -3.5, -0.5, -0.1,  -3.5,  0.5, -0.1,   3.5,  0.5, -0.1,   // back
    -3.5,  0.5,  0.1,   3.5,  0.5,  0.1,   3.5,  0.5, -0.1,  -3.5,  0.5, -0.1,   // top
    -3.5, -0.5, -0.1,   3.5, -0.5, -0.1,   3.5, -0.5,  0.1,  -3.5, -0.5,  0.1,   // bottom
     3.5, -0.5,  0.1,   3.5, -0.5, -0.1,   3.5,  0.5, -0.1,   3.5,  0.5,  0.1,   // right
    -3.5, -0.5, -0.1,  -3.5, -0.5,  0.1,  -3.5,  0.5,  0.1,  -3.5,  0.5, -0.1    // left
  ]);
  const faceNormals = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
  const normals = new Float32Array(faceNormals.flatMap(n => [...n, ...n, ...n, ...n]));

  // Tangent; bitangent = cross(N, T)
  const faceTangents = [[1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, -1], [0, 0, 1]];
  const tangents = new Float32Array(faceTangents.flatMap(t => [...t, ...t, ...t, ...t]));

  const texCoords = new Float32Array(faceNormals.flatMap(() => [0, 0, 1, 0, 1, 1, 0, 1]));

  const indices = new Uint16Array([
     0,  1,  2,   0,  2,  3,   // front
     4,  5,  6,   4,  6,  7,   // back
     8,  9, 10,   8, 10, 11,   // top
    12, 13, 14,  12, 14, 15,   // bottom
    16, 17, 18,  16, 18, 19,   // right
    20, 21, 22,  20, 22, 23    // left
  ]);
  return { positions, normals, tangents, texCoords, indices };
}

//Creating the medium step that I only need one of
function createMedStep() {
  const positions = new Float32Array([
    -3.0, -0.5,  0.1,   3.0, -0.5,  0.1,   3.0,  0.5,  0.1,  -3.0,  0.5,  0.1,   // front
     3.0, -0.5, -0.1,  -3.0, -0.5, -0.1,  -3.0,  0.5, -0.1,   3.0,  0.5, -0.1,   // back
    -3.0,  0.5,  0.1,   3.0,  0.5,  0.1,   3.0,  0.5, -0.1,  -3.0,  0.5, -0.1,   // top
    -3.0, -0.5, -0.1,   3.0, -0.5, -0.1,   3.0, -0.5,  0.1,  -3.0, -0.5,  0.1,   // bottom
     3.0, -0.5,  0.1,   3.0, -0.5, -0.1,   3.0,  0.5, -0.1,   3.0,  0.5,  0.1,   // right
    -3.0, -0.5, -0.1,  -3.0, -0.5,  0.1,  -3.0,  0.5,  0.1,  -3.0,  0.5, -0.1    // left
  ]);
  const faceNormals = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
  const normals = new Float32Array(faceNormals.flatMap(n => [...n, ...n, ...n, ...n]));

  // Tangent; bitangent = cross(N, T)
  const faceTangents = [[1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, -1], [0, 0, 1]];
  const tangents = new Float32Array(faceTangents.flatMap(t => [...t, ...t, ...t, ...t]));

  const texCoords = new Float32Array(faceNormals.flatMap(() => [0, 0, 1, 0, 1, 1, 0, 1]));

  const indices = new Uint16Array([
     0,  1,  2,   0,  2,  3,   // front
     4,  5,  6,   4,  6,  7,   // back
     8,  9, 10,   8, 10, 11,   // top
    12, 13, 14,  12, 14, 15,   // bottom
    16, 17, 18,  16, 18, 19,   // right
    20, 21, 22,  20, 22, 23    // left
  ]);
  return { positions, normals, tangents, texCoords, indices };
}

//Creating the inner step
function createInnerStep() {
  const positions = new Float32Array([
    -3.0, -3.5,  0.1,   3.0, -3.5,  0.1,   3.0,  3.5,  0.1,  -3.0,  3.5,  0.1,   // front
     3.0, -3.5, -0.1,  -3.0, -3.5, -0.1,  -3.0,  3.5, -0.1,   3.0,  3.5, -0.1,   // back
    -3.0,  3.5,  0.1,   3.0,  3.5,  0.1,   3.0,  3.5, -0.1,  -3.0,  3.5, -0.1,   // top
    -3.0, -3.5, -0.1,   3.0, -3.5, -0.1,   3.0, -3.5,  0.1,  -3.0, -3.5,  0.1,   // bottom
     3.0, -3.5,  0.1,   3.0, -3.5, -0.1,   3.0,  3.5, -0.1,   3.0,  3.5,  0.1,   // right
    -3.0, -3.5, -0.1,  -3.0, -3.5,  0.1,  -3.0,  3.5,  0.1,  -3.0,  3.5, -0.1    // left
  ]);
  const faceNormals = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [1, 0, 0], [-1, 0, 0]];
  const normals = new Float32Array(faceNormals.flatMap(n => [...n, ...n, ...n, ...n]));

  // Tangent; bitangent = cross(N, T)
  const faceTangents = [[1, 0, 0], [-1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, -1], [0, 0, 1]];
  const tangents = new Float32Array(faceTangents.flatMap(t => [...t, ...t, ...t, ...t]));

  const texCoords = new Float32Array(faceNormals.flatMap(() => [0, 0, 1, 0, 1, 1, 0, 1]));

  const indices = new Uint16Array([
     0,  1,  2,   0,  2,  3,   // front
     4,  5,  6,   4,  6,  7,   // back
     8,  9, 10,   8, 10, 11,   // top
    12, 13, 14,  12, 14, 15,   // bottom
    16, 17, 18,  16, 18, 19,   // right
    20, 21, 22,  20, 22, 23    // left
  ]);
  return { positions, normals, tangents, texCoords, indices };
}

//Sphere for invisbilty sphere with Gif
function createSphere(segmentsU = 64, segmentsV = 32, uRepeat = 1, vRepeat = 1) {
  const positions = [], normals = [], tangents = [], texCoords = [], indices = [];

  // Generate vertices along latitude (v) and longitude (u) rings
  for (let j = 0; j <= segmentsV; j++) {
    const v = j / segmentsV;
    const phi = Math.PI * v; // 0 (North Pole) to PI (South Pole)
    const sinPhi = Math.sin(phi);
    const cosPhi = Math.cos(phi);

    for (let i = 0; i <= segmentsU; i++) {
      const u = i / segmentsU;
      const theta = 2 * Math.PI * u; // 0 to 2*PI
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      // Unit sphere position where (x = sinTheta * sinPhi, y = cosPhi, z = cosTheta * sinPhi)
      // Matching the cylinder's orientation: s = sin(theta), c = cos(theta)
      const x = sinTheta * sinPhi;
      const y = cosPhi;
      const z = cosTheta * sinPhi;

      positions.push(x, y, z);
      normals.push(x, y, z); // For a unit sphere centered at origin, N == P

      // Tangent vector pointing in the direction of increasing u (d/d_theta)
      // d/d_theta (sinTheta * sinPhi, cosPhi, cosTheta * sinPhi) = (cosTheta * sinPhi, 0, -sinTheta * sinPhi)
      // Normalized: (cosTheta, 0, -sinTheta) along horizontal latitude rings
      tangents.push(cosTheta, 0, -sinTheta);

      // Texture coordinates (v = 0 at top/North Pole, v = 1 at bottom/South Pole)
      texCoords.push(u * uRepeat, (1 - v) * vRepeat);
    }
  }

  // Generate triangle indices for the quad grid
  const rowStride = segmentsU + 1;
  for (let j = 0; j < segmentsV; j++) {
    for (let i = 0; i < segmentsU; i++) {
      const a = j * rowStride + i;
      const b = (j + 1) * rowStride + i;

      // Two triangles per quad: (a, b, a + 1) and (b, b + 1, a + 1)
      indices.push(a, b, a + 1);
      indices.push(b, b + 1, a + 1);
    }
  }

  // Uint32Array ensures safety when total vertex count exceeds 65535
  const IndexArrayType = (segmentsU + 1) * (segmentsV + 1) > 65535 ? Uint32Array : Uint16Array;

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    tangents: new Float32Array(tangents),
    texCoords: new Float32Array(texCoords),
    indices: new IndexArrayType(indices)
  };
}


//For toxic waste barrel
function createCylinder(segments = 64, uRepeat = 3) {
  const positions = [], normals = [], tangents = [], texCoords = [], indices = [];

  // Side: theta grows with u, so T points along the circle and B = cross(N, T) points up
  for (let i = 0; i <= segments; i++) {
    const u = i / segments, theta = 2 * Math.PI * u;
    const s = Math.sin(theta), c = Math.cos(theta);
    for (const y of [-1, 1]) {
      positions.push(s, y, c);
      normals.push(s, 0, c);
      tangents.push(c, 0, -s);
      texCoords.push(u * uRepeat, (y + 1) / 2);
    }
  }
  for (let i = 0; i < segments; i++) {
    const k = 2 * i;
    indices.push(k, k + 2, k + 3, k, k + 3, k + 1);
  }

  // Caps: planar mapping of x, z into the texture, T = +x on both
  for (const y of [1, -1]) {
    const center = positions.length / 3;
    positions.push(0, y, 0);
    normals.push(0, y, 0);
    tangents.push(1, 0, 0);
    texCoords.push(0.5, 0.5);
    for (let i = 0; i <= segments; i++) {
      const theta = 2 * Math.PI * i / segments;
      const s = Math.sin(theta), c = Math.cos(theta);
      positions.push(s, y, c);
      normals.push(0, y, 0);
      tangents.push(1, 0, 0);
      texCoords.push(0.5 + 0.5 * s, 0.5 - 0.5 * y * c);  // keeps cross(N, T) along +v
    }
    for (let i = 0; i < segments; i++) {
      const a = center + 1 + i, b = a + 1;
      if (y > 0) indices.push(center, a, b);
      else indices.push(center, b, a);
    }
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    tangents: new Float32Array(tangents),
    texCoords: new Float32Array(texCoords),
    indices: new Uint16Array(indices)
  };
}
