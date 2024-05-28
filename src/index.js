import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./Routes/auth.routes.js";
import userRouter from "./Routes/protectedRoute/protected.routes.js";
import budgetRouter from "./Routes/protectedRoute/budget.routes.js";
import subcategoryRouter from "./Routes/protectedRoute/subCategory.routes.js";
import categoryRouter from "./Routes/protectedRoute/category.routes.js";
import dotenv from "dotenv";
dotenv.config();

const mongoDBURI = process.env.DATABASE_URL;

mongoose
  .connect(mongoDBURI)
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

const app = express();

app.use(express.json());
app.use(cors());

app.use(`/auth`, authRouter);
app.use(`/user`, userRouter);
app.use(`/budget`, budgetRouter);
app.use(`/sub-category`, subcategoryRouter);
app.use(`/category`, categoryRouter);

app.listen(3001, () => console.log("app connected to port 3001"));
