const SPRITE_WIDTH = 70;
const NUM_FRAMES = 48;
const WAKEUP_TIME = 5000;


var is_hit = false;

function hit() {
    // function called when the element is clicked
    if ( is_hit ) {
        return
    }
    is_hit = true;
    let goon = document.getElementById("goon")
    goon.classList.remove("clickable")
    animate_hit()
}

function animate_hit() {
    let sound = new Audio("../media/down.wav")
    sound.play()
    let goon = document.getElementById("goon")
    goon.classList.remove("goon-up-sheet")
    goon.classList.add("goon-fall-sheet")
    for (var i = 0; i < NUM_FRAMES; i++) {
        sprite_coord = i*SPRITE_WIDTH;
        (function (i, j) {
            setTimeout(function () {
                document.getElementById("goon").style.backgroundPosition = `-${j}px 0px`;
                if ( i >= NUM_FRAMES-1 ) {
                    setTimeout(animate_up, WAKEUP_TIME) // wake up after a certain time has passed
                }
            }, 60*i); // 30ms animation
        })(i, sprite_coord);
    };
}

function animate_up() {
    let sound = new Audio("../media/up.wav")
    sound.play()
    let goon = document.getElementById("goon")
    goon.classList.remove("goon-fall-sheet")
    goon.classList.add("goon-up-sheet")
    for (var i = 0; i < NUM_FRAMES; i++) {
        sprite_coord = i*SPRITE_WIDTH;
        (function (i, j) {
            setTimeout(function () {
                document.getElementById("goon").style.backgroundPosition = `-${j}px 0px`;
                if ( i >= NUM_FRAMES-1 ) {
                    finish()  // we're done!
                }
            }, 60*i); // 30ms animation
        })(i, sprite_coord);
    };
}

function finish() {
    let goon = document.getElementById("goon")
    goon.classList.add("clickable")
    is_hit = false
}