'use strict';
const { handler } = require('./index.js')

describe('Testing the readPeople lambda', () => {
    test('Should return a list of people', async () => {
        let response = await handler({});

        expect(response.statusCode).toEqual(200);
        expect(response.body).toBeTruthy();
    })
})