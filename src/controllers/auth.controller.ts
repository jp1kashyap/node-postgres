import { Request,Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User.entity";
import { Encrypt } from "../helpers/helpers";
import { StatusCodes } from "http-status-codes";

export class AuthController{
    static async signup(req:Request,res:Response){
        try{
        const {name,phone,email,age,password}=req.body;
        const encryptedPassword=await Encrypt.encryptpass(password);
        const user=new User();
        user.name=name;
        user.age=age;
        user.email=email;
        user.password=encryptedPassword;
        user.phone=phone;
        const userRepository=AppDataSource.getRepository(User);
        await userRepository.save(user);
        res.status(StatusCodes.CREATED).json({
            message:"User signed up successfully.",
            data:user
        });
    }catch(e){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:e.message,
            errors:[
                
            ]
        })
    }
    }
}