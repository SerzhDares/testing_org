import paySystems from "./PaySystems";

export default class Validator {
    constructor() {
    }

    checkLuhnAlgorithm(value) {
        let numsArr = [];
        let endArr = [];
        let sum = 0;
        for (let i = 0; i <= value.length - 1; i++) {
            if (i % 2 == 0) {
                numsArr.push(value[i] * 2);
            }
        }
        numsArr.forEach(num => {
            if (num > 9) {
                const newNum = num % 10 + Math.floor(num / 10);
                endArr.push(newNum);
            } else {
                endArr.push(num);
            }    
        })
        sum = endArr.reduce((acc, num) => acc + num, 0) + Number(value[value.length - 1]);
        if (sum % 10 == 0) {
            console.log('Card is valid!');
        } else {
            console.log('Card is invalid!');
        }
    }
}