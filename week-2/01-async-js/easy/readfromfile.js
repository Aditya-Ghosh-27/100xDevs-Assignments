"use strict";

const fs = require("fs");
fs.readFile('read.txt', 'utf-8', (err, data) =>{
    try{
        console.log(data);
    } catch(err){
        throw err;
    }
})