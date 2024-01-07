import PaySystemDetector from "./PaySystemDetector";
import Validator from "./Validator";

export default class AppController {
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
        if (sign && this.input.value.length < 13) {
            this.input.style.backgroundColor = '#e78383';
        }
    }

    clickToValidate() {
        document.querySelector('button').addEventListener('click', e => {
            if (this.input.value != '') {
                e.preventDefault();
            }
            this.fieldColor(new Validator().checkLuhnAlgorithm(this.input.value));
        })
    }
}