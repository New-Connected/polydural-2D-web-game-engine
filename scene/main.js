var rect1;
var rect2;

function start() {
    rect1 = create_rect(
        "rect1", [-20, 0], 0, [20, 20], [255, 0, 0]
        );
    rect2 = create_rect(
        "rect1", [20, 0], 0, [20, 20], [255, 0, 255]
        );

    transform(rect1, [-20, 10], 0);
    console.log(get_pos(rect1));
}

function update() {
    transform(rect2, 
        [get_pos(rect2)[0] + 1, get_pos(rect2)[1]],
        0
        )
}
