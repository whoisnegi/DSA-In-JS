/* Using readline module (inbuilt) 

const readline = require('readline').createInterface({
  	input: process.stdin,
  	output: process.stdout
});

readline.question('Who are you?', name => {
  	console.log(`Hey there ${name}!`);
  	readline.close();
});

*/


/* Using prompt-sync */

const prompt = require('prompt-sync')({sigint: true});

const name = prompt('What is your name?');

console.log(`Hey there ${name}`);