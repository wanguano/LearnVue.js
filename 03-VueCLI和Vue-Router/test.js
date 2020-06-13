const path = require('path')
// const { readFile, write, read } = require('fs/promises')
// const { writeFile } = require('fs')

// const filePath = path.join('folder','file.data')

// 如果 VS Code 检测到正在使用 CommonJS 样式的 JavaScript 代码，auto imports 会使用require而非import
// 敲下: writeFile (会自动引入)
console.log('ok')
console.log('ok')
console.log('ok')


function resolve(dir) {
  return path.join(__dirname, dir)
}
console.log(resolve('src'))