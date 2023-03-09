import { Request, Response } from "express";
import { StringExpressionOperatorReturningNumber } from "mongoose";
import { Task } from "../models/task";

export class TasksController {
  constructor() {

  }

  async getTasks(request: Request, response: Response) {
      Task.find()
      .then((tasks) => {
        return response.status(201).json({message: "", tasks})
      })
      .catch((error) => {
        console.dir(error, {depth: 1});
        return response.status(500).json({message: "Erro ao tentar recuperar as tarefas.", error});
      })
    
  }

  async createNewTask(request: Request, response: Response) {
    const { title, description } = request.body;

    Task.create({title, description})
    .then((task) => {
      return response.status(201).json({ message: "Nova tarefa criada com sucesso.", task })
    })
    .catch((error) => {
      return response.status(500).json({ message: "Falha ao criar nova tarefa.", error });
    })
  }

  async updateTask(request: Request, response: Response) {
    const id: string = request.params.id;
    Task.findByIdAndUpdate(id, request.body)
    .then((task) => {
      return response.status(201).json({message: "Tarefa atualizada com sucesso.", task})
    })
    .catch((error) => {
      console.dir(error, {depth: 1});
      return response.status(500).json({message: "Falha ao tantar atualizar a(s) tarefa(s).", error})
    })
  }
}