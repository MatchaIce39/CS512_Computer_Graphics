// cube
const positions = new Float32Array([
  -1, -1, -0.3,  // 0
   1, -1, -0.3,  // 1
   1,  1, -0.3,  // 2
  -1,  1, -0.3,  // 3
  -1, -1,  0.3,  // 4
   1, -1,  0.3,  // 5
   1,  1,  0.3,  // 6
  -1,  1,  0.3   // 7
]);

const colors = new Float32Array([
  1,0,0,  0,1,0,  0,0,1, 1,1,0, 1,0,1, 0,1,1, 1,1,0, 1,0,1
]);


const indices = new Uint16Array([
  // Front
  4, 5, 6,   4, 6, 7,
  // Back
  1, 0, 3,   1, 3, 2,
  // Top
  3, 7, 6,   3, 6, 2,
  // Bottom
  0, 1, 5,   0, 5, 4,
  // Right
  1, 2, 6,   1, 6, 5,
  // Left
  0, 4, 7,   0, 7, 3,
]);

// Second Cube
const positionsA = new Float32Array([
  -0.5, -0.5, -1.5,  // 0
   0.5, -0.5, -1.5,  // 1
   0.5, 0.5, -1.5,  // 2
  -0.5, 0.5, -1.5,  // 3
  -0.5, -0.5,  1.5,  // 4
   0.5, -0.5,  1.5,  // 5
   0.5,  0.5,  1.5,  // 6
  -0.5,  0.5,  1.5   // 7
]);

const colorsA = new Float32Array([
  1,0,0,  1,0.7,0.3,  1,0.5,1, 1,1,0.7, 0.4,0.7,1, 0,1,1, 1,1,0.7, 1,0.7,1
]);


const indicesA = new Uint16Array([
  // Front
  4, 5, 6,   4, 6, 7,
  // Back
  1, 0, 3,   1, 3, 2,
  // Top
  3, 7, 6,   3, 6, 2,
  // Bottom
  0, 1, 5,   0, 5, 4,
  // Right
  1, 2, 6,   1, 6, 5,
  // Left
  0, 4, 7,   0, 7, 3,
]);

// Pyramid
const positionsB = new Float32Array([
   1,  1,  0,  // 0
  -1,  1,  0,  // 1
  -1, -1,  0,  // 2
   1, -1,  0,  // 3
   0,  0,  1  // 4
]);

const colorsB = new Float32Array([
  1,0,0, 0,0,1, 0,1,0, 0,1,0, 0,0,1
]);

const indicesB = new Uint16Array([
  // Front
  3, 0, 4,
  // Back
  2, 1, 4,
  // Bottom
  3, 2, 1,   3, 0, 1,
  // Right
  0, 1, 4,
  // Left
  4, 2, 3,
]);

