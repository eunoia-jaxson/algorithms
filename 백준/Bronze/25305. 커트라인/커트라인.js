const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line.split(' ').map(el => parseInt(el)));
}).on('close', function(){
    const sortedInput = [...input[1]].sort((a, b) => b - a);
	console.log(sortedInput[input[0][1] - 1]);
    
    process.exit();
});