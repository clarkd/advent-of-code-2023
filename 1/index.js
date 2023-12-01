const { read } = require('../util/readFromFile');

const part1 = async() => {
    const data = await read('./input.txt');

    const sum = data.split('\n').reduce((acc, v)=> {
        const numbers = v.match(/\d/g);
        const number = parseInt(`${numbers[0]}${numbers[numbers.length-1]}}`);
        acc+= number;
        return acc;
    }, 0);

    console.log(`Part 1: ${sum}`);
};

const value = (s) => {
    switch(s) {
        case 'one': return 1;
        case 'two': return 2;
        case 'three': return 3;
        case 'four': return 4;
        case 'five': return 5;
        case 'six': return 6;
        case 'seven': return 7;
        case 'eight': return 8;
        case 'nine': return 9;
        default: return s;
    }
}
const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

const part2 = async() => {
    const data = await read('./input.txt');
    
    const sum = data.split('\n').reduce((acc, v)=> {
        const numbers = [...v.matchAll(regex)].map(m => m[1]);
        const number = parseInt(`${value(numbers[0])}${value(numbers[numbers.length-1])}}`);
        acc+= number;
        return acc;
    }, 0);

    console.log(`Part 2: ${sum}`);
};

part1();
part2();