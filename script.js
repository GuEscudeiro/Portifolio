
function mudarIdade(idade){

    var anoAtual = new Date()
    var idade = anoAtual.getYear() - 81
   return idade
    
}
var tela = document.getElementById("idade")
tela.innerHTML += mudarIdade(idade)

// -------------------------------------------
