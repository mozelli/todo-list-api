import { Request, Response } from "express";

interface TaskInterface {
  id: string,
  title: string,
  description: string,
  date: Date,
  status: string
}

export class TasksController {
  constructor() {

  }

  async getTasks(request: Request, response: Response) {
    const task: TaskInterface = {
      id: "1",
      title: "Primeira tarfa",
      description: "Esta é a primeira tarefa",
      date: new Date(),
      status: "Created" 
    }
    return response.json(task);
  }
}