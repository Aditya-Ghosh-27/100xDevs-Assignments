import fs from "fs";

fs.readFile('test.txt', 'utf-8', (err, data) => {
    try{
        const newData = data.split(' ').filter((word) => (word !== '')).join(' ');
        console.log(newData);
    } catch(err){
        throw err;
    }
});