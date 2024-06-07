// how to get input form user
// const readline=require('readline')
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// rl.question("enter your name ",(name)=>{
//     console.log(name);
//     rl.close()
// })
// rl.on('close',()=>{
//     console.log('interface closed');
//     process.exit(0)
// })


// how to readfile 
const reading= require('fs')
const content=reading.readFileSync('./input.txt','utf-8')
console.log(content);

// how to write file
reading.writeFileSync('./output.txt',content)
