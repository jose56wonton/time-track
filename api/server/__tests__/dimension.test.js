const app = require('../server.js')
const request = require('supertest')
process.env.NODE_ENV = 'test'

const model = app.models['Dimension']
const createData = {
  type: 'new',
}

const updateData = {
  type: 'newer',
}

describe('/dimensions', () => {
  beforeAll((done) => {
    model.destroyAll((err) => {
      model.create(
        [
          {
            type: 'LS',
          },
          {
            type: 'SF',
          },
          {
            type: 'SY',
          },
        ],
        () => {
          done()
        },
      )
    })
  })
  afterAll((done) => {
    app.dataSources.db.disconnect()
    done()
  })
  test('gets all dimension', (done) => {
    return request(app).get('/api/dimensions').expect(200, done)
  })
  test('gets a dimension', (done) => {
    return request(app)
      .get('/api/dimensions/1')
      .expect(200)
      .then((response) => {
        expect(response.body.type).toBe('LS')
        done()
      })
  })
  test('creates a new dimension', (done) => {
    return request(app)
      .post('/api/dimensions')
      .send(createData)
      .expect(200, done)
  })
  test('updates dimension 3', (done) => {
    return request(app)
      .put('/api/dimensions/3')
      .send(updateData)
      .expect(200, done)
  })
  test('deletes dimension 2', (done) => {
    return request(app).delete('/api/dimensions/2').send().expect(200, done)
  })
})
