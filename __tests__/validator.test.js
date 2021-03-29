'use strict';

const superTest = require('supertest');
const server = require('../src/server.js');

const request =superTest(server.app);

// heading of my test
describe('server',()=>{
//  place where we do the test 
  it('handle for validation routes', async ()=>{
    const response = await request.get('/person?name=faten');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('{"name":"faten"}');
  });
  it('handle invalid  validation routes', async ()=>{
    const response = await request.post('/person');
    expect(response.status).toEqual(404);
  });
});