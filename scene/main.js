const obstacles = [
    [100, -275], [200, -275], [200, -225]
]

function start() {
    background = create_rect(
        "background", [0, 0], 0, [20000, 2000], [222, 75, 217]
        );
    floor = create_rect(
        "rect1", [0, -500], 0, [20000, 400], [255, 0, 255]
        );
    player = create_rect(
        "player", [0, 0], 0, [50, 50], [255, 255, 255]
        );
    player_center = create_rect(
        "player", [0, 0], 0, [40, 40], [255, 0, 255]
        );
    
    for (let obstacle = 0; obstacle < obstacles.length; obstacle++) {
        create_rect(
            "obstacle", 
            obstacles[obstacle], 0, 
            [50, 50], [255, 255, 255]
            );
    }

    set_gui("fps", true);
    set_fps(120);
}

function update() {
    transform(player, 
        [get_pos(player)[0] + 0, get_pos(player)[1]],
        0
        )
    transform(player_center, get_pos(player), 0)
    transform("camera", get_pos(player), 0)
}
