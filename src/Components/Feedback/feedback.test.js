import React from 'react';
import Feedback from './feedback';

describe('geting text', () => {
    test('showing bank name', () => {
        expect(Feedback({input: "American Express"})).toStrictEqual(<h1 id="bank">American Express</h1>);
    });
});

