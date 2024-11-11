"use strict"

let onlyPositive = () => {
    let sum = 0;
    let input = 0;
    while (input >= 0) {
        input = +prompt("What number would you like to input?");
        if (input >= 0) {
            sum += input;
        } else {
            console.log(`your final number is: ${sum}`);
            
        }
    }
}

onlyPositive();