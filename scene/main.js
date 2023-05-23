var background;
var rect1;
var player;

function start() {
    background = create_rect(
        "background", [0, 0], 0, [20000, 2000], [222, 75, 217]
        );
    rect1 = create_rect(
        "rect1", [0, -500], 0, [20000, 400], [255, 0, 255]
        );
    player = create_rect(
        "player", [-800, 0], 0, [50, 50], [255, 255, 255]
        );
    player_center = create_rect(
        "player", [-800, 0], 0, [40, 40], [255, 0, 255]
        );

    //transform(rect1, [0, 50], 0);
    set_gui("fps", true);
    set_fps(120);
}

function update() {
    transform(player, 
        [get_pos(player)[0] + 1, get_pos(player)[1]],
        0
        )
    transform(player_center, get_pos(player), 0)
    transform("camera", get_pos(player), 0)
}
