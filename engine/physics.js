function box_collider(object) {
    let can_move = true;
    let entities = window.entities;
    for (let entity = 0; entity < entities.length; entity++) {
        for (let modifier = 0; modifier < entities[entity][8].length; modifier++) {
            for (let modifier = 0; modifier < entities[entity][8].length; modifier++) {
                if (entities[entity][8][modifier][0] == "collider") {
                    if (entities[entity][1][0] - entities[entity][3][0] / 2 < object[1][0] + object[3][0] / 2 && 
                        entities[entity][1][0] + entities[entity][3][0] / 2 > object[1][0] - object[3][0] / 2 &&
                        entities[entity][1][1] - entities[entity][3][1] / 2 < object[1][1] + object[3][1] / 2 &&
                        entities[entity][1][1] + entities[entity][3][1] / 2 > object[1][1] - object[3][1] / 2) {
                        can_move = false
                        
                        if (entities[entity][1][0] > object[1][0] + object[3][0] / 2) {
                            object[1][0] = entities[entity][1][0] - entities[entity][3][0] / 2 - object[3][0] / 2
                        } else 
                        if (entities[entity][1][0] < object[1][0] - object[3][0] / 2) {
                            object[1][0] = entities[entity][1][0] + entities[entity][3][0] / 2 + object[3][0] / 2
                        } else 
                        if (entities[entity][1][1] < object[1][1] - object[3][1] / 2) {
                            object[1][1] = entities[entity][1][1] + entities[entity][3][1] / 2 + object[3][1] / 2
                        } else 
                        if (entities[entity][1][1] > object[1][1] - object[3][1] / 2) {
                            object[1][1] = entities[entity][1][1] - entities[entity][3][1] / 2 - object[3][1] / 2
                        }
                    }
                }
            }
        }
    }
    return can_move
}

function gravity(object) {
    if (box_collider(object)) {
        object[1][1] -= object[7][1]
        object[7][1] += 0.031
    } else {
        object[7][1] = 0
    }
}

function physics() {
    let entities = window.entities;
    for (let entity = 0; entity < entities.length; entity++) {
        for (let modifier = 0; modifier < entities[entity][8].length; modifier++) {
            if (entities[entity][8][modifier][0] == "gravity") {
                gravity(window.entities[entity])
            }
        }
    }
}
