// Funções de retorno exigem o termo 'return'
// Permitem tornar disponiveis os dados processados
// Reaproveitamento e ações sequenciais
//podemos armazenarasfunções de retorno
// a variáveis, funções, arrays, etc.

function meuSalario(salario){ 
     const contaLuz = 145.0 
     const aluguel = 1350.0
     const restoSalario = salario - (contaLuz=aluguel)
     //console.log(restoSalario)// não serve p/ usuário
     return `O resto do seu salário é R$ ${restoSalario.toFixed(2).replace(".",",")}`
}
meuSalario(2500.0)
