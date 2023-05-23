const obstacles = [
    [100, -275], [200, -275], [200, -225]
];

function start() {
    background = create_rect(
        "background", [0, 0], 0, [20000, 2000], [222, 75, 217]
    );
    floor = create_rect(
        "rect1", [0, -500], 0, [20000, 400], [255, 0, 255]
    );
    floor_test = create_rect(
        "rect1", [-30, -100], 0, [50, 50], [255, 255, 255]
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

    add_modifier(player, "gravity");
    add_modifier(floor_test, "collider");
    add_modifier(floor, "collider");

    set_gui("fps", true);
    set_fps(120);
}

function update() {
    let pos = get_pos(player);
    let pos2 = get_pos(floor_test);
    if (pos[1] < -100) {
        transform(player, [pos[0] + 1, pos[1]], 0);
    }
    transform(player_center, pos, 0);
    transform(floor_test, [pos2[0] + 0.1, pos2[1]], 0);
    transform("camera", pos, 0);
}
