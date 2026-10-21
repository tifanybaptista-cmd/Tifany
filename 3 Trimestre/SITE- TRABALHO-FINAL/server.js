import express from 'express'
import path from 'path'

const dirBase = import.meta.dirname
const app = express()
const porta = 3000
// Usando Middleware (software intermediário) TODOS OS ARQ. ESTÁTICOS
app.use(express.static(path.join(dirBase, 'src/publico'))) 


// Criar as rotas do servidor
app.get('/',(req, res) => {
    res.sendFile('src/paginas/index.html', {root: dirBase})
})
app.get('/',(req, res) => {
    res.sendFile('src/paginas/sobre.html', {root: dirBase})
})
app.get('/',(req, res) => {
    res.sendFile('src/paginas/produtos.html', {root: dirBase})
})
app.get('/',(req, res) => {
    res.sendFile('src/paginas/contato.html', {root: dirBase})
})

// Liberar a porta do meu computador
app.listen(porta, () => { console.log('Servidor está vivo!')})