// import de GL Matrix depuis la bibliothèque 'gl-matrix';

import * as glMatrix from 'gl-matrix';

const canvas = document.querySelector ('canvas');
const gl = canvas.getContext ('webgl');

if(!gl) {

    throw new Error ('Webgl is not supported');
}
// LES ETAPES : 
// vertexDate = [];

// create Buffer

// load vertexDate into Buffer

// create vertex shader 
// create fragment shader

// create program

// attach shaders to program
// enable vertex attributes

// draw

// création de la matrice / matrix 

const matrix = mat4.create();


const vertexData = [
    0, 1, 0,
    1, -1, 0,
    -1, -1, 0,
];

const colorData =[
    1, 0, 0, // V1.color
    0, 1, 0, // V2.color
    0, 0, 1, // V3.color
];
 // on va rename les deux const ci-dessous en positionBuffer et colorBuffer
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader,
    `precision mediump float;
    
    
    attribute vec3 position;
    attribute vec3 color;
    varying vec3 vColor;

    void main () {
        vColor = color;
        gl_Position = vec4(position, 1);
    }`
);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader,
    // Correction : Ajouter les accolades ouvrantes et fermantes autour de la fonction main
    `
    precision mediump float;

    varying vec3 vColor;
    
    void main () {
        gl_FragColor = vec4(vColor, 1);
    }`
);
gl.compileShader(fragmentShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

const positionLocation = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(positionLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

const colorLocation = gl.getAttribLocation(program, 'color');
gl.enableVertexAttribArray(colorLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

gl.useProgram(program);
gl.drawArrays(gl.TRIANGLES, 0, 3);

