var start_str = "START";
var stop_str = "STOP";
var timer_on = false;

function button_pressed() {
    button = document.getElementById("button");
    console.log("Button's text:" + button.innerHTML);
    if (button.innerHTML == start_str) {
        start(button);
    } else {
        stop();
    }
}

function start(button) {
    console.log("start was pressed");
    // change the button to be a stop button
    button.innerHTML = stop_str;
    button.classList.remove("start");
    button.classList.add("stop");

    second = document.getElementById("second");
    millisecond = document.getElementById("millisecond");

    // start the timer
    timer_on = true;
    let sec = 0;
    let ms = 0;
    while (timer_on) {
        setTimeout(function() {
            ms += 1;
            if (ms >= 1000) {
                ms = 0;
                sec += 1
            }
            if (sec >= 60) {
                timer_on = false;
                time_out();
            }
            // display the times
            sec_str = String(sec);
            if (len(sec_str) == 1) {
                sec_str = "0" + sec_str;
            }

            ms_str = String(ms);
            if (len(ms_str) == 1) {
                ms_str = "00" + ms_str;
            } else if (len(ms_str) == 2) {
                ms_str = "0" + ms_str;
            }

            second.innerHTML = sec_str;
            millisecond.innerHTML = ms_str;
        }, 1); // wait 1 ms between runs

    }
}

function time_out() {
    // pop up message that says, "you've timed out."
}

function stop() {
    console.log("stop was pressed");
    // stop the timer
    timer_on = false;

    // wait 2 seconds
    
    // if win:

    // else (if lose): pop up with Try Again button
}

function try_again() {

}
