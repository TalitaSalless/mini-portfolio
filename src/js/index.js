/* Instruções: 
1. Pegar elementos que representam as abas do HTML.
2. Identificar o clique no elemento da aba.
3. Quando o usuário clicar, desmarcar a aba selecionada.
4. Marcar a aba clicada como selecionada.
5. Esconder o conteudo anterior.
6. mostrar o conteudo da aba selecionada.
*/

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba) {
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    // passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}