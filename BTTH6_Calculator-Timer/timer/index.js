let m = document.getElementById('minute');
let s = document.getElementById('second');
let mm = document.getElementById('millisecond');
let history = document.getElementById('history');
let startTime = null;
let intervalId = false;
let saveTime = 0;
let minute = 0
let second = 0
let millisecond = 0
var count = 1;

m.value = "00"
s.value = "00"
mm.value = "00"

function startTimer() {
    if (intervalId) {
        return;
    }
    if(saveTime){
        startTime = new Date().getTime() - saveTime;
    }else{
        startTime = new Date().getTime();
    }
    
    time_count = setInterval(() => {
        let currentTime = new Date().getTime();
        millisecond = currentTime - startTime;
        mm.value = millisecond
        if (millisecond >= 1000) {
            startTime = new Date().getTime();
            second += 1;
            if (second == 60) {
                minute += 1;
                if (minute < 10) {
                    m.value = '0' + minute
                } else {
                    m.value = minute
                }
                second = 0
            }
            if (second < 10) {
                s.value = '0' + second
            } else {
                s.value = second
            }
            millisecond = 0
        }
        intervalId = true;
    }, 1);
}

function stopTimer() {
    clearInterval(time_count);
    intervalId = false;
    saveTime = millisecond;
    
}
function lapTimer() {
    history.innerHTML += '<p style="text-align:left; width:100%"> Lan '+ count +':  '
     + '<span>'+ minute + ':' + second + ':' + millisecond + '</span>'
     +'</p>'
    count++;
}
function resetTimer() {
    clearInterval(time_count);
    history.innerHTML = ''
    m.value = "00"
    s.value = "00"
    mm.value = "00"
    minute = 0
    second = 0
    millisecond = 0
    intervalId = false;
    count=1;
    saveTime = 0
}