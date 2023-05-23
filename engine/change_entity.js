function transform(id, position, rotation) {
    let entities = window.entities;
    if (id == "camera") {
        cam_pos = position;
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
