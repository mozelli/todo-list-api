require('dotenv/config');
import express from "express";
import { routes } from "./routes";


const app = express();
app.use(express.json());

app.use("/tasks", routes);

app.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`));