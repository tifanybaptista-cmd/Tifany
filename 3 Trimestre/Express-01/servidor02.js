import express from 'express'
import path from 'path'

const dirBase = import.meta.dirname
const app = express()
const porta = 3000
// Usando Middleware (software intermediário) TODOS OS ARQ. ESTÁTICOS
app.use(express.static(path.join(dirBase, 'publico'))) 


// Criar as rotas do servidor
app.get('/',(req, res) => {
    res.sendFile('paginas/index.html', {root: import.meta.dinarme})
})


// Liberar a porta do meu computador
app.listen(porta, () => { console.log('Servidor está vivo!')})