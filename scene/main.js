var rect1;
var rect2;

function start() {
    rect1 = create_rect(
        "rect1", [0, 0], 0, [20, 20], [255, 0, 0]
        );
    rect2 = create_rect(
        "rect1", [20, 0], 0, [20, 20], [255, 0, 255]
        );

    transform(rect1, [-20, 10], 0);
    set_gui("fps", true);
    set_fps(120);
}

function update() {
    transform(rect2, 
        [get_pos(rect2)[0] + 0.5, get_pos(rect2)[1]],
        0
        )
    transform("camera")
}
