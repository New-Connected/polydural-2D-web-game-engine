const canvas = document.getElementById("main_canvas");
const ctx = canvas.getContext("2d");

let date = new Date();
var time = date.getTime();

var started = false;
var frame = 0;
var fps = 0;

window.entities = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    for (let entity = 0; entity < entities.length; entity++) {
        if (entities[entity][0] == 0) {
            ctx.fillStyle = "rgb(" + 
                entities[entity][5][0] + ", " +
                entities[entity][5][1] + ", " +
                entities[entity][5][2] + ")";
            ctx.fillRect(
                entities[entity][1][0] + canvas.width / 2 -
                entities[entity][3][0] / 2, 
                entities[entity][1][1] + canvas.height / 2 -
                entities[entity][3][1] / 2, 
                entities[entity][3][0], entities[entity][3][1]
                );
        }
    }
}

function update_fps() {
    let date = new Date();
    let time_new = date.getTime();
    if (time_new > time + 100) {
        fps = frame * 10;
        frame = 0;
        time = time_new;
    }
    frame++;
}

function run() {
    if (window.loaded == true && started == false) {
        start();
        started = true;
    } else if (window.loaded == true && started == true) {
        update_fps();
        resize();
        clear();
        draw();
        draw_gui(ctx, fps);
        update();
    }
}

setInterval(run, 1000 / 110);
