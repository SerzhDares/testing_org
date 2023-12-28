import PaySystemDetector from "./PaySystemDetector";
import Validator from "./Validator";

export default class AppController {

    init() {
        const detector = new PaySystemDetector();
        detector.detector();
        const validator = new Validator();
        document.querySelector('button').addEventListener('click', () => {
            validator.checkLuhnAlgorithm(document.querySelector('.card-input').value);
        })
        
    }
}