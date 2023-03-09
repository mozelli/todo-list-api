require('dotenv/config');
import mongoose from "mongoose";

const uri: string = process.env.DB_URI || "";

mongoose.connect(uri).then(() => {
  console.log("Database connected!");
})
.catch((error) => {
  console.log(error);
});

mongoose.Promise = global.Promise;

export const db = mongoose;