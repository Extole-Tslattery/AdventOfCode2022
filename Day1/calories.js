const {readFileSync, promises: fsPromises} = require('fs');
var filename = './Day1_Input.txt';

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\n/);
    return arr;
}

function computeArr(arr) {
    var builtArr = [];
    var sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '') {
            sum += Math.floor(arr[i]);
        } else {
            builtArr.push(sum);
            sum = 0
            continue;
        }
    }
    return builtArr;
}

function computeTopThree(arr) {
    var topThree =[0,0,0,0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > topThree[0]) {
            topThree[1] = topThree[0];
            topThree[0] = arr[i];
            continue;
        } else if (arr[i] > topThree[1]) {
            topThree[2] = topThree[1];
            topThree[1] = arr[i];
            continue;
        } else if (arr[i] > topThree[2]) {
            topThree[2] = arr[i];
            continue;
        } else {
            continue;
        }
    }

    topThree[3] = topThree.reduce((partialSum, a) => partialSum + a, 0);
    return topThree;
}

var inputArr = readFile(filename);
var sumArr = computeArr(inputArr);
var topThree = computeTopThree(sumArr);
console.log(topThree);
//console.log(Math.max.apply(0, sumArr));

