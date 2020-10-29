const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./src/routes/usuarioRoutes.js')

routes(app)

app.route('/')
    .get((req, res) => {
        res.send('API TodoList funcionando')
    })

const port = process.env.PORT || 3001

app.listen(port)

console.log('Servidor On, na porta: ', port)