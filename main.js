// Inspired by https://openprocessing.org/sketch/804077
// (It's totally different now)

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
let maxCount = 500;
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
    mainCtx.lineWidth = 0.1;
    mainCtx.globalAlpha = 0.01;

    r = Math.random() * 4;
    r2 = Math.random() * 4;

    form = document.getElementById("form");
    param1 = form.elements[0].value;
    param2 = form.elements[1].value;
    param3 = form.elements[2].value;
    param4 = form.elements[3].value;
    maxCount = form.elements[4].value;
    fade = form.elements[5].value;
    mainCtx.lineWidth = form.elements[6].value;
    alternate = form.elements[7].checked;
    counter = 0;
    console.log(param1, param2, param3, param4, maxCount, fade, mainCtx.lineWidth, alternate);

    requestAnimationFrame(draw);
}

function draw() {


    if(counter >  maxCount) {
        counter = 0;
        r = Math.random() * 4;
        r2 = Math.random() * 4;
        mainCtx.globalAlpha = fade;
        mainCtx.fillStyle = 'black';
        mainCtx.beginPath()
        mainCtx.rect(-mainCanvas.width / 2, -mainCanvas.height / 2, mainCanvas.width, mainCanvas.height);
        mainCtx.fill();
        if(alternate) {
            if(Math.random() < 1/3) {
                mainCtx.strokeStyle = "red";
            } else if(Math.random() < 2/3) {
                mainCtx.strokeStyle = "yellow";
            } else {
                mainCtx.strokeStyle = "blue";
            }
            if(Math.random() < 1/4) {
            mainCtx.strokeStyle = Math.random() > 0.8 ? 'black' : 'white';
            }
        } else {
            mainCtx.strokeStyle = 'white';
        }
    }
    mainCtx.globalAlpha = 0.1 + Math.random() * 0.1;

    mainCtx.beginPath();
        x = Math.sin( (counter / param1) + (r  * Math.PI)) * (mainCanvas.width  / 2);
        y = Math.cos( (counter / param2) + (r  * Math.PI)) * (mainCanvas.height / 2);
        x2 = Math.sin((counter / param3) + (r2 * Math.PI)) * (mainCanvas.width  / 2);
        y2 = Math.cos((counter / param4) + (r2 * Math.PI)) * (mainCanvas.height / 2);

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