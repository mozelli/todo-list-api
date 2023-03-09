import { Router, Request, Response } from "express";
import { TasksController as Tasks } from "./controllers/tasksController";

const routes = Router();
const TasksController = new Tasks();

routes.get("/", (request: Request, response: Response) => TasksController.getTasks(request, response));
routes.post("/", (request: Request, response: Response) => TasksController.getTasks(request, response));

export { routes };