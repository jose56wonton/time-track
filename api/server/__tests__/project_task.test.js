const app = require('../server.js')
const request = require('supertest')
process.env.NODE_ENV = 'test'

const taskModel = app.models['ProjectTask']

const createData = {
  quantity: '100',
  estimateTime: '1000',
  taskId: '1',
  projectId: '1',
}

const updateData = {
  quantity: '100',
  estimateTime: '1000',
  taskId: '1',
  projectId: '1',
}

describe('/projectTasks', () => {
  beforeAll((done) => {
    taskModel.destroyAll((err) => {
      taskModel.create(
        [
          {
            quantity: '100',
            estimateTime: '1000',
            taskId: '1',
            projectId: '1',
          },
          {
            quantity: '200',
            estimateTime: '500',
            taskId: '1',
            projectId: '1',
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

  test('gets all task', (done) => {
    return request(app)
      .get('/api/projectTasks')
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(2)
        done()
      })
  })
  test('gets a task', (done) => {
    return request(app)
      .get('/api/projectTasks/1')
      .expect(200)
      .then((response) => {
        expect(response.body.quantity).toBe(100)
        done()
      })
  })
  test('creates a new task', (done) => {
    return request(app)
      .post('/api/projectTasks')
      .send(createData)
      .expect(200, done)
  })
  test('deletes task 2', (done) => {
    return request(app).delete('/api/projectTasks/2').send().expect(200, done)
  })
  test('updates task 1', (done) => {
    return request(app)
      .put('/api/projectTasks/1')
      .send(updateData)
      .expect(200, done)
  })
})
