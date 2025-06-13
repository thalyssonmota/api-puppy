const { Users } = require('../models')
const bcrypt = require('bcrypt')

async function validateCreateUser(req, res, next) {
    const { name, email, cpf, nascimento, password } = req.body

    if(!name || !email || !cpf || !nascimento || !password) {
        return res.status(400).send({
            error: 'Todos os campos são obrigatórios'
        })
    }

    if(name.length > 33) {
        return res.status(400).send({
            erro:'Não pode ter mais que 33 caracteres'
        })
    }
    
    if(email.length > 255) {
        return res.status(400).send({
            error: 'O email não pode ter mais que 255 caracteres'
        })
    }

    if(cpf.length == 11) {
        return res.status(400).send({
            error: 'CPF tem quer ter 11 caracteres'
        })
    }

    if(!nascimento) {
        return res.status(400).send({
            error: 'Data deve ser válida'
        })
    }

    const existingUser = await Users.findOne({
        where: {
            email: email
        }
    })

    if(existingUser) {
        return res.status(400).send({
            error: 'Email já cadastrado'
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    req.body.password = hashedPassword

    next()
}

module.exports = {
    validateCreateUser
}