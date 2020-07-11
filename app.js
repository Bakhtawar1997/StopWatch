// var min = 0;
// var sec = 0;
// var minsec = 0;

// function abc(){
//     minsec++
//     if(minsec >= 100){
//         minsec = 0 ;
//         sec++;

//     }if(sec === 60){
//         sec = 0;
//         min++
//     }
    
//      document.getElementById("ass").innerHTML = min + ':' + sec + ':' + minsec
// }
// //interval = setInterval(abc, 10);

// function start(){
//     interval = setInterval(abc,10)
//     document.getElementById("start").disabled=true;
// }


// function stop(){
//     document.getElementById("start").disabled=false;
//     clearInterval(interval);
// }

// function reset(){
//     stop();
//     var sec = 0;
//     var min = 0;
//     var hours = 1;
//     document.getElementById("ass").innerHTML = sec + ';' + min + ';' + hours;
// }


var min = 0;
var sec = 0;
var msec = 0;
var min_heading = document.getElementById("min")
var sec_heading = document.getElementById("sec")
var msec_heading = document.getElementById("msec")
var interval;

function abc(){
    msec ++
    msec_heading.innerHTML = msec
    if (msec >=100){
        sec ++
        sec_heading.innerHTML = sec
        msec = 0
    }
    else if(sec>=60){
        min ++
        min_heading.innerHTML = min
        sec =   0
    }
}
function start(){
    interval = setInterval(abc ,10)
    document.getElementById('btn').disabled=true
}


function stop(){
    clearInterval(interval)
    document.getElementById('btn').disabled=false
}


function reset(){
    stop()
    min = 00;
    sec = 00;
    msec = 00;
    min_heading.innerHTML = min;
    sec_heading.innerHTML = sec;
    msec_heading.innerHTML = msec;
    document.getElementById('btn').disabled=false
}
