const fs = require("fs");
const path = require("path");

const dataTobeWritten = "Hey dude whats up";

const writeStream = fs.createWriteStream(__dirname + "/output.txt");

writeStream.write(dataTobeWritten, "utf-8");

writeStream.end();

writeStream.on("finish", () => {
  console.log("Written successfully");
});
