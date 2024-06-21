let logo_list = {}
const sprites = ["media/logo_1.png", "media/logo_2.png", "media/logo_3.png", ]

function start_logo_loop(id, delay) {
    logo_list[id] = true;
    document.getElementById(id).src = sprites[1];
    logo_loop(id, 2, delay)
}

function end_logo_loop(id) {
    logo_list[id] = false;
    document.getElementById(id).src = sprites[0];
}

function logo_loop(id, index, timeout) {
    setTimeout(function() {
        next_frame = index + 1;
        if ( next_frame >= sprites.length ) {
            next_frame = 0;
        }
        if ( logo_list[id] == true ) {
            document.getElementById(id).src = sprites[index];
            logo_loop(id, next_frame, timeout);
        }
    }, timeout)
}