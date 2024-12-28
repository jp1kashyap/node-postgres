import { AppDataSource } from "./data-source"
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import "reflect-metadata";
import { errorHandler } from "./middlewares/error.middleware";
import { AuthRouter } from "./routes/auth.route";
dotenv.config();
const {PORT=3008}=process.env;
const app=express();
app.use(express.json());
app.use(errorHandler);

//auth routes
app.use('/auth',AuthRouter);
app.get("*", (req: Request, res: Response) => {
    res.status(505).json({ message: "Bad Request" });
});
AppDataSource.initialize().then(async () => {

    app.listen(PORT,()=>{
        console.log(`Express Postgress application started on: localhost://${PORT}`)
    })
    console.log("Data Source has been initialized!");
}).catch(error => console.log(error))
