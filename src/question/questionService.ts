import { Question } from './questionModel'
import Knex from 'knex'

export class QuestionService {
  constructor(private readonly client: Knex) {}

  async list (): Promise<Question[]> {
    let query = this.client
      .from('question')
      .select('*')

    return query
  }
}
