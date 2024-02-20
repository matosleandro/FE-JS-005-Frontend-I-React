// Dependecies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// run the server
app.listen(3002, () => {
    console.log('Server is runing on port 3002')
})

// create a database(mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', // set xampp password 
    database: 'browsergamesdb',
})

// router register user

app.post('/register', (req, res)=>{
    // we need to get variables sent from the form
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    // create SQL statement to insert the user to Database table Users
    const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)' // we are going to enter these values through a variable
    const Values = [sentEmail, sentUserName, sentPassword]
    
    // Query to execute the sql statement stated above
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send({message: 'User added!'})
            // let try and see
        }
    })
})

app.post('/login', (req, res)=>{

    const sentLoginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword

    const SQL = 'SELECT * FROM users WHERE username = ? && password'
    const Values = [sentLoginUserName, sentLoginPassword]
    
    // Query to execute the sql statement stated above
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