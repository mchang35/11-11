var start_str = "START";
var stop_str = "STOP";

let [milliseconds,second] = [0,0];
let timerRef = document.querySelector('.mainTime');
let int = null;

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

    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(mainTime,10);
}

function mainTime(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        second++;
        if(second == 60){
            clearInterval(int);
            time_out();
        }
    }

    let s = second < 10 ? "0" + second : second;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = `${s} : ${ms}`;
}

function time_out() {
    // pop up message that says, "you've timed out."
}

function stop() {
    console.log("stop was pressed");
    // stop the timer
    // timer_on = false;
    clearInterval(int);

    // wait 2 seconds
    
    // if win:

    // else (if lose): pop up with Try Again button
}

function try_again() {
    // set everything back to 00:00
}
