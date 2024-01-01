import fs from "fs";

fs.readFile('test.txt', 'utf-8', (err, data) => {
    let newData;
    try{
        newData = data.split(' ').filter((word) => (word !== '')).join(' ');
        console.log(newData);
    } catch(err){
        throw err;
    }
    fs.appendFile('test.txt', "\nOutput: \n" + newData, (err) => {
        if(err){
            throw err;
        } 
    })
});