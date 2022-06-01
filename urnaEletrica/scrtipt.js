let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaA = 0;
let numero = '';
let vbranco = true;

function etapaComeca() {
    let etapa = votacao[etapaA];

    let numeroHtml = '';
    numero = '';
    vbranco = false;

    for(let i=0;i<etapa.numeros;i++){
        if(i==0){
            numeroHtml += '<div class="num pisca"></div>';
        }
        else{
            numeroHtml += '<div class="num"></div>';
        }
    }
    
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}
function updateUI(){
    let etapa = votacao[etapaA];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }
    });
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'flex';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;
    } else {
        seuVotoPara.style.display = 'flex';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }
}

function clicou(n){
    let eleNum = document.querySelector('.num.pisca');
    if(eleNum !== null){
        eleNum.innerHTML = n;
        numero = `${numero}${n}`;

        eleNum.classList.remove('pisca');
        
        if(eleNum.nextElementSibling!==null){
            eleNum.nextElementSibling.classList.add('pisca');
        }else{
            updateUI();
        }
    }

}
function branco(){
    if(numero === ''){
        vbranco = true;
        seuVotoPara.style.display = 'flex';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
    } else{
        alert("Para VOTO EM BRANCO a caixa de números deve estar vazia")
    }
}
function corrige(){
    etapaComeca();
}
function confirma(){
    let etapa = votacao[etapaA];
    let votoConfirmed = false;
    if(vbranco === true){
        votoConfirmed = true;
    } else if (numero.length === etapa.numeros) {
        votoConfirmed = true;
    }

    if(votoConfirmed){
        etapaA++;
        if(votacao[etapaA] !== undefined){
            etapaComeca();
        } else {
            alert("FIM!!!!!")
        }
    }
}

etapaComeca();