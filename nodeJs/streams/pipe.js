const fs = require("fs");

const readStream = fs.createReadStream(__dirname + "/input.txt");

const writeStream = fs.createWriteStream(__dirname + "/output.txt");

readStream.pipe(writeStream);
