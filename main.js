// Inspired by https://openprocessing.org/sketch/804077

// Create & configure main canvas
const mainCanvas = document.getElementById('mainCanvas');
mainCanvas.height = window.innerHeight;
// noinspection JSSuspiciousNameCombination
mainCanvas.width = mainCanvas.height; // square canvas

const mainCtx = mainCanvas.getContext('2d');
let counter = 0;
let count = 100;
let r, r2;

setup();

function setup() {
    mainCtx.translate(mainCanvas.width / 2, mainCanvas.height / 2);
    mainCtx.strokeStyle = 'white';
    mainCtx.lineWidth = 1;
    mainCtx.globalAlpha = 0.05;
    r = Math.random() * 4;
    r2 = Math.random() * 4;

    requestAnimationFrame(draw);
}

function draw() {
    // don't clear the canvas
    //mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

    if(counter >  count) {
        counter = 0;
        r = Math.random();
        r2 = Math.random();
        mainCtx.globalAlpha = 0.05;
        mainCtx.fillStyle = 'black';
        mainCtx.beginPath()
        mainCtx.rect(-mainCanvas.width / 2, -mainCanvas.height / 2, mainCanvas.width, mainCanvas.height);
        mainCtx.fill();
        mainCtx.fillStyle = 'white';
    }
    mainCtx.globalAlpha = 0.01 + Math.random() * 0.1;

    mainCtx.beginPath();
        x = Math.sin((Date.now() / 2000) + (r * Math.PI)) * mainCanvas.width  / 2;
        y = Math.cos((Date.now() / 2000) + (r * Math.PI)) * mainCanvas.height / 2;
        x2 = Math.sin((Date.now() / 2000) + (r2 * Math.PI)) * mainCanvas.width  / 2;
        y2 = Math.cos((Date.now() / 2000) + (r2 * Math.PI)) * mainCanvas.height / 2;

    mainCtx.moveTo(-x, -y);
    mainCtx.lineTo(x2, y2);
    mainCtx.lineTo(-x2, -y);
    mainCtx.lineTo(-x, y);
    mainCtx.lineTo(x, -y2);
    mainCtx.stroke();

    counter++;
    // call this function again next frame
    requestAnimationFrame(draw);
}