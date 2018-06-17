const app = require('../server.js');
const request = require('supertest');
process.env.NODE_ENV ='test'

const model = app.models['Crew']

const createData = {
  id: 4,
  name: 'new'
};

const updateData = {
  name: 'newer',
};

beforeEach((done) => {  
  model.destroyAll((err) => { });
  model.create([{
    id: 1,
    name: 'Crew 1'
  }, {
    id: 2,
    name: 'Crew 2'
  }, {
    id: 3,
    name: 'Crew 3'
  }],()=> { done();}) 
})

describe('/crew', () => {
  
  test('gets all crew', done => {
    return request(app).get('/api/crews').expect(200).then(response => {
      expect(response.body.length).toBe(3);
      done();
    })
  })
  test('gets a crew', done => {
    return request(app).get('/api/crews/1').expect(200).then(response => {
      expect(response.body.name).toBe('Crew 1');
      done();
    })
  })
  test('creates a new crew', (done) => {
    return request(app).post('/api/crews').send(createData).expect(200, done);
  });
  test('updates crew 4', done => {
    return request(app).put('/api/crews/4').send(updateData).expect(200,done);
  })
  test('deletes a crew', (done)=> {
    return request(app).delete('/api/crews/4').send().expect(200,done);
  })
})