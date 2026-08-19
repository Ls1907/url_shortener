import express from "express";
import {db} from "./db.js";
import {usersTable} from "../models/schema.js";
import {crypto,createHmac} from "node:crypto";

const router  = express.Router();


router.get('/signup', async(req,res)=>{
    const {name,email,password} = req.body;
    const existingUser = await db.Select().from(usersTable).where(eq(usersTable.email,email));
    if(existingUser){
        return res.status(400).json({message: "User already exists please login"});
    }
  
    const salt = crypto.randomBytes(256).toString('hex');
    const hashedPassword = createHmac('sha256',salt).update(password).digest('hex');

     const [newUser] = await db.insert(usersTable).values({
        name,
        email,
        password: hashedPassword,
        salt
     }).returning({
        id:usersTable.id
     })
     return res.status(201).json({message: `User created with id`, id:newUser.id});



})


export default router;