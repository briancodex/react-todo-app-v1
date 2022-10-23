import 'dotenv/config'
import express from 'express'
import todoRouter from './routes/TodoRoutes.js'
import customLogging from './logging/custom.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(customLogging)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // yolo
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
  res.header('Access-Control-Expose-Headers', 'Content-Length')
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  } else {
    return next()
  }
})

app.use(express.json())

app.use('/todo', todoRouter)

app.listen(PORT, () => {
  console.log('Server started listening on port: ' + PORT)
})
