// constant
const SEPARATOR = 'd';

// dice rolling function
const rollDice = (instruction) => {
    const nums = instruction.split(SEPARATOR).map(num => parseInt(num));
    const diceNums = [...Array(nums[0]).keys()]
        .map(() => Math.floor(Math.random() * nums[1]) + 1);
    return diceNums.reduce((a, b) => a + b, 0);
};

// test cases
console.assert(rollDice('3d6') <= 18, 'the result of 3d6 should be less or equal to 18');
console.assert(rollDice('3d6') >= 3, 'the result of 3d6 should be greater or equal to 18');
console.assert(rollDice('3d1') === 3, 'the result of 3d1 should be equal to 3');
