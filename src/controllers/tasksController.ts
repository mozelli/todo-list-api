import { Request, Response } from "express";
import { Model } from "mongoose";
import { Task } from "../models/task";

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
      Task.find()
      .then((result) => {
        return response.status(201).json({message: "", result})
      })
      .catch((error) => {
        console.dir(error, {depth: 1});
        return response.status(500).json({message: "Erro ao tentar recuperar as tarefas.", error});
      })
    
  }

  async createNewTask(request: Request, response: Response) {
      Task.create(request.body)
      .then((result) => {
        return response.status(201).json({ message: "Nova tarefa criada com sucesso.", result })
      })
      .catch((error) => {
        return response.status(500).json({ message: "Falha ao criar nova tarefa.", error });
      })
  }
}