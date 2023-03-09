import { Router, Request, Response } from "express";
import { TasksController } from "./controllers/tasksController";

const routes = Router();
const Tasks = new TasksController();

routes.get("/", (request: Request, response: Response) => Tasks.getTasks(request, response));
routes.post("/", (request: Request, response: Response) => Tasks.createNewTask(request, response));
routes.put("/:id", (request: Request, response: Response) => Tasks.updateTask(request, response));

export { routes };