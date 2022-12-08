const {readFileSync, promises: fsPromises} = require('fs');
var filename = './input.txt';

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\n/);
    return arr;
}

function calcScore(arr) {
    //console.log(arr);
    var otherPlayer = [];
    var outcome = [];
    var score = 0;

    //Get other player's actions
    for (i = 0; i < arr.length; i++) {
        switch (arr[i][0]) {
            case 'A':
                otherPlayer[i] = 'Rock';
                break;
            case 'B':
                otherPlayer[i] = 'Paper';
                break;
            case 'C':
                otherPlayer[i] = 'Scissors';
                break;
        }
    }

    //Get outcome of the match
    for (i = 0; i<arr.length; i++) {
        switch (arr[i][2]) {
            case 'X':
                outcome[i] = 'Lose';
                break;
            case 'Y':
                outcome[i] = 'Draw';
                break;
            case 'Z':
                outcome[i] = 'Win';
                break;
        }
    }

    //Battle!
    for (i = 0; i<outcome.length; i++) {
        switch (outcome[i]) {
            case 'Lose':
                score += 0;
                switch (otherPlayer[i]) {
                    case 'Rock':
                        score += 3;
                        break;
                    case 'Paper':
                        score += 1;
                        break;
                    case 'Scissors':
                        score += 2;
                        break;
                }
                break;
            case 'Draw':
                score += 3;
                switch (otherPlayer[i]) {
                    case 'Rock':
                        score += 1;
                        break;
                    case 'Paper':
                        score += 2;
                        break;
                    case 'Scissors':
                        score += 3;
                        break;
                }
                break;
            case 'Win':
                score += 6;
                switch (otherPlayer[i]) {
                    case 'Rock':
                        score += 2;
                        break;
                    case 'Paper':
                        score += 3;
                        break;
                    case 'Scissors':
                        score += 1;
                        break;
                }
                break;
        }
    }
    console.log(score);
}

var arr = readFile(filename);
calcScore(arr);