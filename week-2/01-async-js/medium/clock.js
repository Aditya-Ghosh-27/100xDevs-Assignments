"use strict";

function currentTime(){
    setInterval(() =>{
        let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = 'AM';

    if(hours === 0){
        hours = 12;
    }

    if(hours > 12){
        hours = hours - 12;
        session = 'PM';
    }

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let time = `${hours} : ${minutes} : ${seconds} ${session}`;
    console.log(time);
    }, 1000);
}

currentTime(); 