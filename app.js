// how to get input form user
// const readline = require('readline')
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// rl.question("enter your name ",(name)=>{
//     console.log(name);
//     rl.close()
// })

// rl.on('close',()=>{
//     console.log("interface close");
//     process.exit(0)
// })

// how to read file 
const fileSystem=require('fs')
const content=fileSystem.readFileSync('./input.txt','utf-8')
console.log(content);

// how to write file 
fileSystem.writeFileSync('./output.txt',content)