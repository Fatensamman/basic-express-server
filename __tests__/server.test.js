'use strict';

const superTest = require('supertest');
const server = require('../src/server.js');

const request =superTest(server.app);

// heading of my test
describe('server',()=>{
//  place where we do the test 
  it('handle invalid routes', async ()=>{
    const response = await request.get('/hhhh');
    expect(response.status).toEqual(404);
  });
 
  it('handle server errors', async ()=>{
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
 
});