import { db } from "../database/mongoose";

const TaskSchema = new db.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    default: "Pendente",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

export const Task = db.model("Task", TaskSchema);