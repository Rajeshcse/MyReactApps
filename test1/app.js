
const fs = require("fs");
const filename ="target.txt"

fs.readFile(filename, (err, data)=>{
  if(err){
    console.log(err);
  }
  console.log(data.toString());

});

console.log('Nodejs Async Programming.... ! ');
