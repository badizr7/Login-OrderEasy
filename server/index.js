//nuestras dependencias
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

//vamos a ejecutar el servidor. entonces esta funcionando
app.listen (3002,()=>{
    console.log('server is running on port 3002')
})

// creamos nuestros datos basados (mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'easidb',
})

//creemos ahora una ruta al servidor

app.post('/register' ,(req, res) =>{
    // necesitamos obtener variables enviadas desde el formulario
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password
    const sentApellido = req.body.Apellido
    const sentNumero = req.body.Numero

    // vamos a crear una declaración Sql para insertar el usuario en la tabla de la base de datos Usuarios
    const SQL = 'INSERT INTO users(email, username, password, apellido, numero) VALUES(?,?,?,?,? )'
    //INGRESAR ESTOS VALORES MEDIANTE UNA VARIABLE
    const Values = [sentEmail, sentUserName, sentPassword, sentApellido, sentNumero]

    //consulta para ejecutar la instrucción sql indicada anteriormente
    db.query( SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({message: 'User added!'})
            
        }
    })
})

//crea otra ruta
app.post('/login' , (req, res)=> {
    // obtener variables enviadas desde el formulario

    const sentLoginEmail = req.body.LoginEmail
    const sentLoginPassword = req.body.LoginPassword

    //crear una declaración Sql para insertar el usuario en la tabla de la base de datos Usuarios
    const SQL = 'SELECT * FROM users WHERE email = ? && password = ?'
    // VAMOS A INGRESAR ESTOS VALORES MEDIANTE UNA VARIABLE
    const Values = [sentLoginEmail, sentLoginPassword]

    db.query( SQL, Values, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
        }
        else{
            res.send({message: 'Credentials Dont match!'})
            
        }
    })
})