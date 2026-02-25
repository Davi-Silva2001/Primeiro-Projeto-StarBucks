let imagem = document.querySelector(".imagem-copo")
let fundo = document.querySelector(".circulo")

    function  trocarImagem(endereco){
        imagem.src = endereco
    }

    function trocaFundo(cor){
        fundo.style.background = cor
    }
