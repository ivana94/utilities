const path = require("path");
const fs = require("fs");
module.exports = (pathToFile) =>
    fs.readFileSync(path.join(pathToFile), "utf-8");
