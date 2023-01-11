const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");

partOne(input);

function partOne(input) {
    let stacks = buildStacks(input);
    let instructions = buildInstructions(input);   
    
    console.log(instructions);

    for (let i = 0; i < instructions.length; i++) {
        for (let j = 0; j < 3; j++) {
            
        }
    }
}



//Helper Functions----------------------------------------------------------------
function buildStacks(input) {
    let stacks =[];
    let tempStack = [];
    let column = 1;

    for (let column = 1; column < 35;) {
        tempStack = [];
        for (let row = 0; row < 8; row++) {
            tempStack.push(input[row][column])
            }
        stacks.push(tempStack);
        column = column +4;
    }
    return stacks;
}

function buildInstructions(input) {
    let tempInstructions;
    let instructions =[];

    for (row = 10; row < input.length; row++) {
        tempInstructions = input[row].match(/\d+/g);
        instructions.push(tempInstructions);
    }
    return instructions;
}