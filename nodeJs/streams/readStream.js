const fs = require("fs");
const path = require("path");

let content = "";

const readStream = fs.createReadStream(path.join(__dirname + "/input.txt"));

readStream.on("data", (chunk) => {
  //   console.log(chunk);
  content += chunk;
});

readStream.on("end", () => {
  console.log(content);
});

readStream.on("error", (err) => {
  console.log(err);
});
