const canvas = document.getElementById("main_canvas");
const ctx = canvas.getContext("2d");

var entities = [
    ["rect", [20, 20], [10, 10]],
    ["rect", [50, 50], [20, 20]]
];

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    for (let entity = 0; entity < entities.length; entity++) {
        if (entities[entity][0] == "rect") {
            ctx.fillRect(
                entities[entity][1][0], entities[entity][1][1], 
                entities[entity][2][0], entities[entity][2][1]
                );
        }
    }
}

function run() {
    clear();
    draw();
}

setInterval(run, 10);
