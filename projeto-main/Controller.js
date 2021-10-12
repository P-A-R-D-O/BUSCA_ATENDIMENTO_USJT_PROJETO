const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Meu servidor backend já está online !')
})

let base_usuarios = [["Juan@hotmail.com", "123", 1], ["Caetano@hotmail.com", "456", 2], ["Farfan@hotmail.com", "789", 3]]

app.post('/login', (req, res) => {
    console.log(req.body);
    console.log('Email: ' + req.body.email);
    console.log('Password: ' + req.body.password);
    
    for(let x = 0; x < base_usuarios.length; x++) {
        if (req.body.email == base_usuarios[x][0]) { //Verificação de usuário
            if(req.body.password == base_usuarios[x][1]) { //Verificação da senha
                res.status(200).send('Seja bem vindo ' + req.body.email)
            } else {
                res.status(401).send("Usuário ou senha incorreta")
                console.log('Usuário ou senha incorreta')
            }
        } 
    }
    res.status(404).send("Usuário não existe")
    console.log('Usuário não existe')
})




let porta = process.env.PORT || 3000; 

app.listen(porta, (req, res) => {
    console.log('Server online, porta: ' + porta)
})