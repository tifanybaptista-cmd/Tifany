// funções são blocos de código reapresentáveis
// que representam ações (funcionalidades)


function dancaDebutante(pai, filha){
    console.log(`O pai ${pai} dançou com a filha ${filha}`)
    return `O pai ${pai} dançou com a filha ${filha}` // expõe para reúso
}
dancaDebutante(`Eduardo`, `Pamela`)