// const { appendFile } = require('fs/promises')
// const {writeFile} = require('fs/promises')

// synchronous
// fs.writeFileSync('hello.txt','falna chilna')

// async - callback based
// fs.writeFile('myhello.txt','hello chahacha kaise ho',function(err){
//     if(err) console.log(err);
//     else console.log('file written successfully')
// })

// console.log("last line of code")

// async - promise based
// async function createFile(){
//     try {
//         await appendFile('test.txt','\nnew content added')
//         console.log('file written successfully')
//     } catch (error) {
//         console.log(error)
//     }
// }

// createFile()
// console.log("last line of code")

// fs.promises.writeFile()