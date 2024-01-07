import paySystems from "./PaySystems";

export default class PaySystemDetector {
    constructor() {
        this.input = document.querySelector('.card-input');
    }

    detector(value) {
        const cards = document.querySelectorAll('.card-img');
        for (let system of Object.keys(paySystems)) {
            cards.forEach(card => {
                if (system == value[0] || system == value.substr(0, 2)) {
                    card.classList.add('card-disabled');
                    if (card.alt == paySystems[system]) {
                        card.classList.remove('card-disabled');
                    }
                }
                if (value == '' || value == 3 || value == 5 || value == 6 && card.classList.contains('card-disabled')) {
                    card.classList.remove('card-disabled');
                    }
                if (value == '') {
                    this.input.style.backgroundColor = '#fff';
                }
            }) 
        }
        return paySystems[value];
    }

    inputMonitor() {
        this.input.oninput = () => {
            this.detector(this.input.value);
        }
    }
}