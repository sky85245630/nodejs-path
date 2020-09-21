var path = require('path')

//抓目錄路徑
console.log(path.dirname('/xx/yy/zz.js'))

//路徑合併
console.log(path.join(__dirname,'/xx'))