"use strict";
// Code a counter in JavaScript without using setIterval
// Hint : setTimeout



const counter = function(n){
    for(let count = 1; count <= n; count++){
        setTimeout(function(){
            console.log(count);
        }, count * 1000);
    }
}

counter(10);

// While loop conversio
let count = 1;
const n = 10; // You can set the desired value of n

function printCount() {
  console.log(count);
  count++;
}

// Using a while loop
while (count <= n) {
  setTimeout(printCount, count * 1000);
}
