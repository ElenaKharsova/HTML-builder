const fs = require("fs");
const path = require("node:path");
const process = require("node:process")

const {stdin, stdout} = process;

const writableStream = fs.createWriteStream(path.join(__dirname, "textOUT.txt"));
stdout.write("Hello, traveler!\nTell me about yourself:\n");
stdin.on("data", (chunk) => { 
  if(chunk.toString().trim() === "exit"){
    console.log("Goodbye, traveler!");  
    process.exit();
  }
  writableStream.write(chunk);
});
stdin.on("error", (error)=>{
  console.log("Error", error.message);
});

process.on("SIGINT",()=>{
  console.log("Goodbye, traveler!");  
  process.exit();
})