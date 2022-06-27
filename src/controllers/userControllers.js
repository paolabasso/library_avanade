import { prismaClient } from "../database/prismaClient.js"

const CreateUser = async (req, res) => {
    const { name, email } = req.body
    if(!(name && email)){
        const message = {"message": "Os campos nome e e-mail devem ser preenchidos"}
        return res.status(400).json(message)
    } else {
        const user = await prismaClient.User.create({
            data: {
                name,
                email
            }
        })
        return res.status(201).json(user)
    }
    //req vamos pegar o conteudo do body
    //se esse conteudo vier vazio, nos vamos devolver um erro
    //se não, nós vamos gravar no banco de dados
}

export { CreateUser }