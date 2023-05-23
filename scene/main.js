var rect1 = create_rect(
    "rect1", [-20, 0], 0, [20, 20], [255, 0, 0]
    );
var rect2 = create_rect(
    "rect1", [20, 0], 0, [20, 20], [255, 0, 255]
    );

transform(rect1, [-20, 10], 0);
console.log(get_pos(rect1));
