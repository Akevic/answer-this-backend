import { QuestionService } from './questionService'
import { Question } from './questionModel'
import { Request, Response, NextFunction } from "express-serve-static-core"

export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  async listQuestions (req: Request, res: Response, next: NextFunction): Promise<Question[]> {
    const query = await this.questionService.list()

    res.json({ query })

    return query
  }
}
