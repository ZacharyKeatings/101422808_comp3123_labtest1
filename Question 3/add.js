const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
} else {
    return;
}

process.chdir(logDir);

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `filename: log${i}.txt`);
    console.log(fileName);
}
