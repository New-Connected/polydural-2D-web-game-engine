show_fps = false;

function draw_gui(ctx, fps) {
    if (show_fps) {
        ctx.font = "48px impact";
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.fillText("FPS: " + fps, 10, 50);
    }
}

function set_gui(name, state) {
    if (name == "fps") {
        show_fps = state;
    }
}
