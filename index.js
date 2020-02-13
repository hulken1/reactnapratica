const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false}))


app.get('/', (req, res) => {
    res.send('funcionando')
})

// ./ ele sabeque é meu arquivo entao ele vai procurar nos meus arquivos e nao no node modules
// sempre quando digitar o endereço do servidor /api ele abrira o rotas
const rotas = require('./rotas')
app.use('/api', rotas)

// dirname resolve automaticamente toda o caminho de diretorio ate o diretorio atual
app.use(express.static(__dirname + '/client'))

const port = 3005

app.listen(port, () => {
    console.log('Servidor esta rodando em http://localhost',port)
})