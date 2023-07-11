/* CONTROLADOR DE FLUXO
    -> IF (Se)
    -> Else (Se não)

    OPERADORES DE COMPARAÇÃO
    > maior que
    < menor que
    == igual que
    else não precisa de ( ) pq ele não precisa de condição.
*/

const notaDoAluno = 10
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte){
   //O QUE SERÁ EXECUTADO, SE O IF FOR VERDADEIRO.
   console.log("Parabéns, você passou de ano") //Aqui posso colocar qualquer frase.
}

if(notaDoAluno < notaDeCorte){
   console.log("Você foi reprovado")
}

/*else {
    //SE O IF FOR FALSO, ELE ENTRA AQUI.
    //O Else é opcional por.
    console.log("Você foi reprovado")
}*/

const senhaDoUsuario = 123456 //NÃO PRECISA SER APENAS NÚMEROS!
const senhaDigitada = 123457

if(senhaDoUsuario == senhaDigitada){
    //O QUE SERÁ EXECUTADO, SE O IF FOR VERDADEIRO.
    console.log("Seja-bem vindo, você está logado(a)")
}
else {
    console.log("Senha incorreta")
}