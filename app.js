// how to get input form user
const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("enter your name ",(name)=>{
    console.log(name);
    rl.close()
})
rl.on('close',()=>{
    console.log('interface closed');
    process.exit(0)
})
