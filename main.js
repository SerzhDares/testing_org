/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/PaySystems.js
const paySystems = {
  34: 'amex',
  37: 'amex',
  30: 'diners',
  36: 'diners',
  38: 'diners',
  39: 'diners',
  60: 'discover',
  62: 'discover',
  64: 'discover',
  65: 'discover',
  35: 'jcb',
  51: 'mastercard',
  52: 'mastercard',
  53: 'mastercard',
  54: 'mastercard',
  55: 'mastercard',
  2: 'mir',
  4: 'visa'
};
/* harmony default export */ const PaySystems = (paySystems);
;// CONCATENATED MODULE: ./src/js/PaySystemDetector.js

class PaySystemDetector {
  constructor() {
    this.input = document.querySelector('.card-input');
  }
  detector(value) {
    const cards = document.querySelectorAll('.card-img');
    for (let system of Object.keys(PaySystems)) {
      cards.forEach(card => {
        if (system == value[0] || system == value.substr(0, 2)) {
          card.classList.add('card-disabled');
          if (card.alt == PaySystems[system]) {
            card.classList.remove('card-disabled');
          }
        }
        if (value == '' || value == 3 || value == 5 || value == 6 && card.classList.contains('card-disabled')) {
          card.classList.remove('card-disabled');
        }
        if (value == '') {
          this.input.style.backgroundColor = '#fff';
        }
      });
    }
    return PaySystems[value];
  }
  inputMonitor() {
    this.input.oninput = () => {
      this.detector(this.input.value);
    };
  }
}
;// CONCATENATED MODULE: ./src/js/Validator.js
class Validator {
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
    });
    sum = endArr.reduce((acc, num) => acc + num, 0) + Number(value[value.length - 1]);
    if (sum % 10 == 0) {
      return true;
    } else {
      return false;
    }
  }
}
;// CONCATENATED MODULE: ./src/js/AppController.js


class AppController {
  constructor() {
    this.input = document.querySelector('.card-input');
  }
  init() {
    new PaySystemDetector().inputMonitor();
    this.clickToValidate();
  }
  fieldColor(sign) {
    if (sign) {
      this.input.style.backgroundColor = '#81e781';
    } else if (this.input.value == '') {
      this.input.style.backgroundColor = '#fff';
    } else {
      this.input.style.backgroundColor = '#e78383';
    }
    if (sign && this.input.value.length < 13 || this.input.value.length > 19) {
      this.input.style.backgroundColor = '#e78383';
    }
  }
  clickToValidate() {
    document.querySelector('button').addEventListener('click', e => {
      if (this.input.value != '') {
        e.preventDefault();
      }
      this.fieldColor(new Validator().checkLuhnAlgorithm(this.input.value));
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here

new AppController().init();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;