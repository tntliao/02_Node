const fs = require('fs');

fs.writeFile('hello.txt', 'nihaoliaojiajia', (err) => {
    if (err) {
        throw err
    } else {
        console.log('写入文件成功');
    }
})