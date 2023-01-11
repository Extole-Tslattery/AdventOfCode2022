const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");

partOne(input);
redditAnswer(input);


function partOne(input) {
    var overlapCount = 0;
    
    input.forEach((pair, index) => {
        var bothElves = pair.split(',');
        var elfOne = bothElves[0];
        var elfTwo = bothElves[1];

        var elfOneStart = parseInt(elfOne.split('-')[0]);
        var elfOneEnd = parseInt(elfOne.split('-')[1]);
        var elfTwoStart = parseInt(elfTwo.split('-')[0]);
        var elfTwoEnd = parseInt(elfTwo.split('-')[1]);

        if ((elfOneStart <= elfTwoStart && elfOneEnd >= elfTwoEnd) || (elfOneStart >= elfTwoStart && elfOneEnd <= elfTwoEnd)) {
            overlapCount++
        } 
    })
    console.log(overlapCount);
}

function redditAnswer(input) {
    
    let fullOverlaps = 0,
    partOverlaps = 0;

    for (let i = 0; i < input.length; i++) {
        let ns = input[i].match(/(\d+)/g);
        // console.log(ns);
        ns = ns.map((n) => parseInt(n));
        let r1 = [ns[0], ns[1]],
             r2 = [ns[2], ns[3]],
            ma = (a) => Math.max(...a),
            mi = (a) => Math.min(...a);
        if ((ns[0] <= ns[2] && ns[1] >= ns[3]) || (ns[0] >= ns[2] && ns[1] <= ns[3]))
            fullOverlaps++;
        else if (r1.some((n) => r2.includes(n))) partOverlaps++;
        else if (
            (ma(r1) >= mi(r2) && ma(r1) <= ma(r2)) ||
            (ma(r2) >= mi(r1) && ma(r2) <= ma(r1))
        )
            partOverlaps++;
    }

    console.log(`Full overlaps: ${fullOverlaps}`); // Part 1
    console.log(`All overlaps: ${partOverlaps + fullOverlaps}`); // Part 2
}