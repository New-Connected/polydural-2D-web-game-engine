var current_id = 0;

function create_rect(name, position, rotation, size, color) {
    current_id++;
    window.entities.push(
        [0, position, rotation, size, name, color, current_id - 1]
    );
    return current_id - 1;
}