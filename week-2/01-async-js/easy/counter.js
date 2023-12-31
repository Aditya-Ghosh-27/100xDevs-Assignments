"use strict";

// Code a counter in JavaScript using setInterval

let count = 0;

setInterval(function updateCounter(){
    count++;
    console.log(count);
}, 1000);