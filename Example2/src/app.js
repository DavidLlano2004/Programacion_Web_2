import express from "express";
import exampleRouter from "./routes/example.route.js";

const app = express();

app.use(express.json());

app.use("/api" , exampleRouter);

export default app;
