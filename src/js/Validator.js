export default class Validator {

    checkLuhnAlgorithm(value) {
        let numsArr = [];
        let endArr = [];
        let sum = 0;
        const cutValue = value.substr(0, value.length - 1);
        const reverseCutValue = cutValue.split('').reverse().join('');
        for (let i = 0; i <= reverseCutValue.length - 1; i++) {
            if (i % 2 == 0) {
                numsArr.push(reverseCutValue[i] * 2);
            } else {
                numsArr.push(Number(reverseCutValue[i]));
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
            return true;
        } else {
            return false;
        }
    }
}