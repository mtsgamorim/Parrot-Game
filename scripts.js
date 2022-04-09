let cartasEmJogo = [];
let baralho = [
    {
        nome: "carta1",
        img: "bobrossparrot.gif"
    },
    {
        nome: "carta1",
        img: "bobrossparrot.gif"
    },
    {
        nome: "carta2",
        img: "explodyparrot.gif"
    },
    {
        nome: "carta2",
        img: "explodyparrot.gif"
    },
    {
        nome: "carta3",
        img: "fiestaparrot.gif"
    },
    {
        nome: "carta3",
        img: "fiestaparrot.gif"
    },
    {
        nome: "carta4",
        img: "metalparrot.gif"
    },
    {
        nome: "carta4",
        img: "metalparrot.gif"
    },
    {
        nome: "carta5",
        img: "revertitparrot.gif"
    },
    {
        nome: "carta5",
        img: "revertitparrot.gif"
    },
    {
        nome: "carta6",
        img: "tripletsparrot.gif"
    },
    {
        nome: "carta6",
        img: "tripletsparrot.gif"
    },
    {
        nome: "carta7",
        img: "unicornparrot.gif"
    },
    {
        nome: "carta7",
        img: "unicornparrot.gif"
    }
]

let primeiraCarta = "";
let segundaCarta = "";
let pai = document.querySelector(".conteudo");
let cartasAcertadas = 0;
let rodadas = 0;
const qntdCartas = prompt("Quantas cartas jogar? Apenas valores pares de 4 a 14");

function clicarCarta (elemento){
    if(elemento.classList.contains("girar") === false && pai.classList.contains("aguardar") === false){
        rodadas++;
        elemento.classList.add("girar");
        if(primeiraCarta === ""){
            primeiraCarta = elemento;
            
        }else{
            segundaCarta = elemento;
            pai.classList.add("aguardar");
            verificaIgualdade();
        }
    }
}

function verificaIgualdade(){
    if(primeiraCarta.innerHTML !== segundaCarta.innerHTML){
        setTimeout(esperar, 1000);
    }else {
        primeiraCarta = "";
        segundaCarta = "";
        pai.classList.remove("aguardar");
        cartasAcertadas = cartasAcertadas + 2;
        if(cartasAcertadas == qntdCartas){
            setTimeout(ganhou, 600);
        }
    }
}

function esperar(){
    primeiraCarta.classList.remove("girar");
    segundaCarta.classList.remove("girar");
    primeiraCarta = "";
    segundaCarta = "";
    pai.classList.remove("aguardar");
}

function comparador() { 
	return Math.random() - 0.5; 
}

function ganhou() {
    alert(`Você ganhou em ${rodadas} jogadas!`);
}




if(qntdCartas % 2 === 0 && qntdCartas >= 4 && qntdCartas <= 14){
   
    const elemento = document.querySelector(".conteudo");
    elemento.innerHTML = "";
    for(let i = 0; i < qntdCartas; i++) {
        cartasEmJogo[i] = baralho[i];
    }
    cartasEmJogo = cartasEmJogo.sort(comparador);
    for(let i = 0; i < qntdCartas; i++) {
        elemento.innerHTML += `<div class="cards">
        <div class="card" onclick="clicarCarta(this)">
           <div class="face front">
               <img src="imagens/front.png">
           </div>
           <div class="face back">
               <img src="imagens/${cartasEmJogo[i].img}">
           </div>
        </div>
        </div>
   `;
    }

    
}else {
    alert("QUANTIDADE DE CARTAS INVÁLIDOS");
}