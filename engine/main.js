const canvas = document.getElementById("main_canvas");
const ctx = canvas.getContext("2d");

let date = new Date();
var time = date.getTime();

var started = false;
var frame = 0;
var fps = 0;
var max_fps = 120;
var cam_pos = [0, 0];

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
                entities[entity][3][0] / 2 - cam_pos[0], 
                (canvas.height - 
                (entities[entity][1][1] + cam_pos[1])) - 
                    canvas.height / 2 - 
                    entities[entity][3][1] / 2, 
                entities[entity][3][0], entities[entity][3][1]
                );
        }
    }
}

function update_fps() {
    let date = new Date();
    let time_new = date.getTime();
    if (time_new > time + 1000) {
        fps = frame;
        frame = 0;
        time = time_new;
    }
    frame++;
}

function set_fps(fps) {
    max_fps = fps;
}

function run() {
    update_fps();
    resize();
    clear();
    update();
    physics();
    draw();
    draw_gui(ctx, fps);
}

function waitForLoad() {
    if (window.loaded == true) {
        start();
        setInterval(run, 1000 / max_fps);
    } else {
        setTimeout(waitForLoad, 1);
    }
}

waitForLoad()
