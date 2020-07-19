import cardDetector from './detector';

describe('geting bank information', () => {
    test('retrieving bank by card number', () => {
        expect(cardDetector(341234567890123)).toStrictEqual(["341234567890123", "American Express"]);
    });
});
