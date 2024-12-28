import {z} from "zod";

export const signUP=z.object({
    name:z.string(),
    email:z.string().email(),
    phone:z.string().min(10).max(11),
    age:z.number().min(18).max(99),
    password:z.string().min(8).max(32),
})