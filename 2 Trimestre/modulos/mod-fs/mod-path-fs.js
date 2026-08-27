
const fs = require('fs')
const path = require('node:path')
const chalk = require('chalk').default

try {

    // resultado     ler arquivo     caminho     pasta      arquivo     codificador
    // const arquivo = fs.readFileSync(path.join(__dirname, "/README.MD"), "utf-8")
    const arquivo = fs.readFileSync(path.resolve(__dirname + "/README.M"), "utf-8")
    console.log(chalk.bgGreen.white('✨ Arquivo Carregado com sucesso!...'))
    console.log(arquivo)
} catch (error) {
    console.error(chalk.bgRed.white('💜 Deu ruim...'))
    console.log(error.message)
}