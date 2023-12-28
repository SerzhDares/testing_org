import paySystems from "./PaySystems";

export default class PaySystemDetector {

    detector() {
        const cards = document.querySelectorAll('.card-img');
        const input = document.querySelector('.card-input');
        input.oninput = () => {
            for (let system of Object.keys(paySystems)) {
                cards.forEach(card => {
                    if (system == input.value) {
                        card.classList.add('card-disabled');
                        if (card.alt == paySystems[system].name) {
                            card.classList.remove('card-disabled');
                        }
                    }
                    if (input.value == '' || input.value == 3 || input.value == 5 || input.value == 6 && card.classList.contains('card-disabled')) {
                        card.classList.remove('card-disabled');
                    }
                }) 
            }
        }
    }
}