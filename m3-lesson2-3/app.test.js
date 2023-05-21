//app.test.js
const { expect } = require('@jest/globals');
const supertest = require('supertest');
const app = require('./app.js');

test('GET aplicarDesconto', async () => {
    const response = await supertest(app)
        .get('/aplicarDesconto/10/5');
    
    expect(response.statusCode).toEqual(200);
    expect(response.body.valorDescontado).toEqual(5);
})