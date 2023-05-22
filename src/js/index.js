
// const Variavel constatnte = Não muda o valor desta variavel | Que seria o botão de trocar o tema
// Cod para deixar o cod mais limpo Botaoalterartema para achar mais facil
const botaoAlterartema = document.getElementById("botao-alterar-tema");

// querSelector detectar Classe, tag
const body = document.querySelector("body");

// achar o img
const imgtroca = document.querySelector(".imagem-botao")


// Detectar click do botao-alterar-tema
//adicionar ouvinte em algum elemento
botaoAlterartema.addEventListener("click", () => {
    // Verificar se tem a classe modo escuro para mudar
    //contains verificar se contem uma classe
    const modoescuroativo = body.classList.contains("modo-escuro");
    //alternar modo escuro
    body.classList.toggle("modo-escuro")


    if (modoescuroativo) {

        imgtroca.setAttribute("src", "src/imagens/sun.png")

    }
    else /*Se não tiver com o modo ligado*/ {

        //trocar a imagem do sol qnd clicado
        imgtroca.setAttribute("src", "src/imagens/lua.png")
    }
});
