const app = require('../server.js')
const request = require('supertest')
process.env.NODE_ENV = 'test'

const employeeModel = app.models['Employee']

const createData = {
  firstName: 'Gene',
  lastName: 'Simon',
  pin: '546546',
  isEmployed: '1',
  isWorking: '0',
  authorityId: '1',
  crewId: '1',
}

const updateData = {
  firstName: 'Jodi',
  lastName: 'Simon',
  pin: '546546',
  isEmployed: '1',
  isWorking: '0',
  authorityId: '1',
  crewId: '1',
}

describe('/employee', () => {
  beforeAll((done) => {
    employeeModel.destroyAll((err) => {
      employeeModel.create(
        [
          {
            firstName: 'Joshua',
            lastName: 'Wootonn',
            pin: '565656',
            isEmployed: '1',
            isWorking: '0',
            authorityId: '1',
            crewId: '1',
          },
          {
            firstName: 'Jay',
            lastName: 'Simon',
            pin: '234234',
            isEmployed: '1',
            isWorking: '0',
            authorityId: '1',
            crewId: '1',
          },
        ],
        (err) => {
          done()
        },
      )
    })
  })
  afterAll((done) => {
    app.dataSources.db.disconnect()
    done()
  })
  test('gets all employee', (done) => {
    return request(app)
      .get('/api/employees')
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(2)
        done()
      })
  })
  test('gets a employee', (done) => {
    return request(app)
      .get('/api/employees/1')
      .expect(200)
      .then((response) => {
        expect(response.body.firstName).toBe('Joshua')
        done()
      })
  })
  test('creates a new employee', (done) => {
    return request(app)
      .post('/api/employees')
      .send(createData)
      .expect(200, done)
  })
  test('deletes employee 3', (done) => {
    return request(app).delete('/api/employees/3').send().expect(200, done)
  })
  test('updates employee 2', (done) => {
    return request(app)
      .put('/api/employees/2')
      .send(updateData)
      .expect(200, done)
  })
})
