function transform(id, position, rotation) {
    let entities = window.entities;
    if (id == "camera") {
        cam_pos = [position[0], -position[1]];
        return;
    }
    for (let entity = 0; entity < entities.length; entity++) {
        if (entities[entity][6] == id) {
            window.entities[entity][1] = position;
            window.entities[entity][2] = rotation;
            return;
        }
    }
}

function get_pos(id) {
    let entities = window.entities;
    for (let entity = 0; entity < entities.length; entity++) {
        if (entities[entity][6] == id) {
            return window.entities[entity][1];
        }
    }
}

function add_modifier(id, name, args) {
    let entities = window.entities;
    for (let entity = 0; entity < entities.length; entity++) {
        if (entities[entity][6] == id) {
            if (args != null) {
                window.entities[entity][8].push([name, args])
            } else {
                window.entities[entity][8].push([name])
            }
        }
    }
}
