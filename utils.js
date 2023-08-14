const fs = require(`fs`);

function readFileContent(path) {
    return fs.readFileSync(path);
}

module.exports = {
    readFileContent
}

