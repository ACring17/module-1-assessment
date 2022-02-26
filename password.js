const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


console.log("Welcome to Password Validator!")
reader.question("What password would you like to validate?", function(input) {
    let tokens = input;

    if (tokens >= 10) {
        console.log('Successful Vslidation!')
    } else {
        console.log('Try a longer password')
    }
});
