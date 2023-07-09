import app from "./app.js";
import { config} from "dotenv";
config({ path: process.ENV })
import dbConnect from "./db.js";

const port = 3005;
app.listen(port, ()=>{
    console.log(`Servidor iniciado en el endpoint => http:localhost:${port}/`); 
})

dbConnect();