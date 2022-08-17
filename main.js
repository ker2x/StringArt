// Inspired by https://openprocessing.org/sketch/804077

// Create & configure main canvas
const mainCanvas = document.getElementById('mainCanvas');
mainCanvas.height = window.innerHeight;
// noinspection JSSuspiciousNameCombination
mainCanvas.width = mainCanvas.height; // square canvas

// button
let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    setup();
});

const mainCtx = mainCanvas.getContext('2d');
let counter = 0;
let count = 500;
let r, r2;

let param1 = 1;
let param2 = 1;
let param3 = 1;
let param4 = 1;

setup();

function setup() {
    mainCtx.setTransform(1, 0, 0, 1, 0, 0);
    mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    mainCtx.translate(mainCanvas.width / 2, mainCanvas.height / 2);

    mainCtx.strokeStyle = 'white';
    mainCtx.lineWidth = 1;
    mainCtx.globalAlpha = 0.01;

    r = Math.random() * 4;
    r2 = Math.random() * 4;

    form = document.getElementById("form");
    param1 = form.elements[0].value;
    param2 = form.elements[1].value;
    param3 = form.elements[2].value;
    param4 = form.elements[3].value;
    alternate = form.elements[4].checked;
    console.log(param1, param2, param3, param4, alternate);

    requestAnimationFrame(draw);
}

function draw() {


    if(counter >  count) {
        counter = 0;
        r = Math.random() * 4;
        r2 = Math.random() * 4;
        mainCtx.globalAlpha = 0.05;
        mainCtx.fillStyle = 'black';
        mainCtx.beginPath()
        mainCtx.rect(-mainCanvas.width / 2, -mainCanvas.height / 2, mainCanvas.width, mainCanvas.height);
        mainCtx.fill();
        if(alternate) {
            mainCtx.strokeStyle = Math.random() > 0.5 ? 'black' : 'white';
        } else {
            mainCtx.strokeStyle = 'white';
        }
    }
    mainCtx.globalAlpha = 0.1 + Math.random() * 0.1;

    mainCtx.beginPath();
        x = Math.sin( (Date.now() / param1) + (r  * Math.PI)) * (mainCanvas.width  / 2);
        y = Math.cos( (Date.now() / param2) + (r  * Math.PI)) * (mainCanvas.height / 2);
        x2 = Math.sin((Date.now() / param3) + (r2 * Math.PI)) * (mainCanvas.width  / 2);
        y2 = Math.cos((Date.now() / param4) + (r2 * Math.PI)) * (mainCanvas.height / 2);

        mainCtx.moveTo(x, y);
        mainCtx.lineTo(-x2, -y2);
        mainCtx.lineTo(-x, -y);
        mainCtx.lineTo(x2, y2);
        mainCtx.lineTo(x, y);
    mainCtx.stroke();

//    mainCtx.restore();

    counter++;
    // call this function again next frame
    requestAnimationFrame(draw);
}