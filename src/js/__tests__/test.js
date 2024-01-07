import PaySystemDetector from "../PaySystemDetector";
import Validator from "../Validator";

test.each([
  ['2', 'mir'],
  ['34', 'amex'],
])(('cheking paysystems for numbers'), (value, expected) => {
  expect(new PaySystemDetector().detector(value)).toBe(expected);
});

test.each([
  ['true for valid card number', '371449635398431', true],
  ['false for invalid card number', '371449635398432', false],
])(('it should be %s'), (_, value, expected) => {
  expect(new Validator().checkLuhnAlgorithm(value)).toBe(expected);
});

