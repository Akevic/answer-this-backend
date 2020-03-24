import express from 'express'
import bodyParser from 'body-parser'
import { QuestionService } from './question/questionService'
import { QuestionController } from './question/questionController'

const app = express()
const PORT = process.env.PORT || 3030

app.use(bodyParser.json())

const client = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'simun',
    password : 'developer',
    database : 'answerThis'
  }
})

const questionService = new QuestionService(client)
const questionController = new QuestionController(questionService)

app.get('/questions', questionController.listQuestions.bind(questionController))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})
