const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0, 0, 0, 0];
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    //converts value inside time to a string consisting of  0time eg. 09
    //js conersters final result to time towe retain a number time datatype
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){   
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));    
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);
    
    if (textEntered == originText) {    
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else{            
            testWrapper.style.borderColor = "#E95D0F";
        }
    }
}

// Start the timer:
function start(){
    //how much content in box. if content = 0 set timer = 0
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0){
        setInterval(runTimer, 10); //run every 1/1000 of a second
      }
    console.log(textEnteredLength);
}

// Reset everything:
function reset() {
    console.log('Reset button clicked');
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener.length("click", reset, false)