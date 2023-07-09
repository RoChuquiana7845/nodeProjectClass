import express from "express";
import userRoutes from "./routes/userRoutes.js";
//Crear servidor en app 
const app = express(); 

app.use("/users", userRoutes);
//app.use("/productos", useRoutes);

export default app