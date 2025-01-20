const fs = require("fs");
const path = require("node:path");

const {stdin, stdout} = process;

const writableStream = fs.createWriteStream(path.join(__dirname, "textOUT.txt"));
stdout.write("Hello, traveler!\nTell me about yourself:\n");
stdin.on("data", (chunk) => { 
  writableStream.write(chunk);
  process.exit();
});
stdin.on("error", (error)=>{
  console.log("Error", error.message);
})