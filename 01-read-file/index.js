const path = require("node:path");
const fs = require("fs");
const dir = __dirname;
const readableStream = fs.createReadStream(path.join(dir,"text.txt"), "utf-8");
let data = "";
readableStream.on("data", (chunk) => console.log(data += chunk));
readableStream.on("error", (error) => {console.log("Error", error.message)})