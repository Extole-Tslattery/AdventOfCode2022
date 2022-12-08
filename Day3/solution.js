const {readFileSync, promises: fsPromises} = require('fs');
var filename = './input.txt';

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\n/);
    return arr;
}

function partOne(input){
    var compartmentOne;
    var compartmentTwo;
    var lowerCaseLetter;
    var score = 0;

    for (i = 0; i < input.length; i++) {
    compartmentOne = input[i].slice(0,(input[i].length/2));
    compartmentTwo = input[i].slice(input[i].length/2,input[i].length)
    for (var j = 0; j < compartmentOne.length; j++) {
        if (compartmentTwo.indexOf(compartmentOne[j]) !== -1) {
            if (compartmentOne[j] == compartmentOne[j].toLowerCase()){
             //Character is lowercase
            score += compartmentOne[j].charCodeAt(0)-96
            break;
             } else {
                 //Character is uppercase
                lowerCaseLetter = compartmentOne[j].toLowerCase();
                score += lowerCaseLetter.charCodeAt(0)-70;
                break;
             }
        }
    }
    }
    return score;
}

function partTwo(input) {
    var elfOne;
    var elfTwo;
    var elfThree;
    var score = 0;
    
    for (var i = 0; i < input.length; i+= 3) {
        elfOne = input[i];
        elfTwo = input[i+1];
        elfThree = input[i+2];
        
        for (var j = 0; j <elfOne.length; j++) {
            if(elfTwo.indexOf(elfOne[j]) != -1 && elfThree.indexOf(elfOne[j]) != -1) {
                if (elfOne [j] == elfOne[j].toLowerCase()) {
                    score += elfOne[j].charCodeAt(0)-96
                    break;
                } else {
                    lowerCaseLetter = elfOne[j].toLowerCase();
                    score += lowerCaseLetter.charCodeAt(0)-70
                    break;
                }
            }
        }
    }
    return score;
}

var input = readFile(filename);
var score = partOne(input);
var newScore = partTwo(input);
console.log(score + ',' + newScore);
