const convas = document.querySelector ('canvas');
const gl = canvas.getContext ('webgl');

if(!gl) {

    throw new Error ('Webgl is not supported');
}

alert (`Webgl is available `)