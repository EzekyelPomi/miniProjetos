let tempo = 6000,
imagem_atual = 0,
image = document.querySelectorAll("#banner-slider img"),
max=image.length;

function trocaImagem(){
    image[imagem_atual].classList.remove("selecionado")
    imagem_atual++

    if(imagem_atual>=max)
    imagem_atual=0

    image[imagem_atual].classList.add("selecionado")
}

function slider(){
    setInterval(()=>{
        trocaImagem()
    }, tempo)
}

window.addEventListener("load", slider);