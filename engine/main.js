const canvas = document.getElementById("main_canvas");
const ctx = canvas.getContext("2d");

window.entities = [];

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

function run() {
    clear();
    draw();
}

setInterval(run, 10);
