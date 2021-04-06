import { translateEnglishToMorse, translateMorseToEnglish } from './translator.js';

// Valid Tests
it ('Should translate A to .-', () => {
    const result = translateEnglishToMorse('A');
    expect(result).toBe('.- ')
});
//... Write a bunch more tests below and the tests should FAIL to start with..

it ('Should translate this is a test to - .... .. ... / .. ... / .- / - . ... - ', () => {
    const result = translateEnglishToMorse('this is a test');
    expect(result).toBe('- .... .. ... / .. ... / .- / - . ... - ')
});

it ('Should translate morsecode to -- --- .-. ... . -.-. --- -.. .', () => {
    const result = translateEnglishToMorse('morsecode');
    expect(result).toBe('-- --- .-. ... . -.-. --- -.. . ')
})


// Invalid Tests

// Null/Empty Tests
