import { Router } from "express";
import { CreateUser } from "../controllers/userControllers.js";

const router = Router();

router.get('/', (req, res) =>{
    return res.json({message:"To funcionando!"})
})

//Vamos construir todas as rotas necessarios: creates, get, put, delete


router.post('/user', CreateUser)

export default router;