const x = document.querySelector('input')
var a = x.getAttribute("value");

function inserir(valor){
    a += valor;
    x.setAttribute("value",a);
}
    
function limpar(){
    a = "";
    x.setAttribute("value", a);
}

function apagar(){
    if(a){
        a = a.substring(0, a.length -1);
    }
    x.setAttribute("value",a);
}

function resultado(){
    a = eval(a);
    x.setAttribute("value",a);
}