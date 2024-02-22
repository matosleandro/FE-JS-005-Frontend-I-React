// Dependências
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// Iniciar o servidor.
app.listen(3002, () => {
    console.log('Server is runing on port 3002')
})

// Criar um banco de dados (MySQL).
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', // Definir a senha do XAMPP. 
    database: 'browsergamesdb',
})

// router para registrar o usuário

app.post('/register', (req, res)=>{
    // Precisamos obter as variáveis enviadas pelo formulário.
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    // Criar instrução SQL para inserir o usuário na tabela de banco de dados 'Users'.
    const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)' // we are going to enter these values through a variable
    const Values = [sentEmail, sentUserName, sentPassword]
    
    // Consulta para executar a instrução SQL mencionada acima.
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send({message: 'User added!'})
        }
    })
})

app.post('/login', (req, res)=>{

    const sentLoginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword

    const SQL = 'SELECT * FROM users WHERE username = ? && password'
    const Values = [sentLoginUserName, sentLoginPassword]
    
    // Consulta para executar a instrução SQL mencionada acima.
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.lenght > 0){
            res.send(results)
        }
        else{
            res.send({message: `Credentials don't match!`})
        }
    })
})