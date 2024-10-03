const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logDir)) {
    const logFiles = fs.readdirSync(logDir);

    logFiles.forEach(file => {
        const filePath = path.join(logDir, file);
        console.log(`Delete files...${file}`);
        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logDir);
} else {
    return
}