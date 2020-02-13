const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) => {
    res.json({
        conteudo: 'Parabens chegou ate aqui',
        autor: 'Gutao'
    })
})

module.exports = router