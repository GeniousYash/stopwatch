window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var OtptSeconds = document.getElementById("second");
    var OtptTens = document.getElementById("tens");
    var btnStart = document.getElementById("start");
    var btnStop = document.getElementById("stop");
    var btnReset = document.getElementById("reset");
    var Interval;

    btnStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
    });
    btnStop.addEventListener('click', () => {
        clearInterval(Interval);
    });
    btnReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        OtptSeconds.innerHTML = seconds;
        OtptTens.innerHTML = tens;
    });

    function startTimer(){
        tens++;
        if(tens <= 9){
            OtptTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            OtptTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            OtptSeconds.innerHTML = "0" + seconds;
            tens = 0;
            OtptTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OtptSeconds.innerHTML = seconds;
        }
    }
}
