// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.get('/auth/login', (req, res) => {
  console.log('Login Success');
  return res.status(200).json('Login Success')
})

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})