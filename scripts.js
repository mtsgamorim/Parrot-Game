let cartasEmJogo = [];
let embaralhar = [];

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

let cartas = [];


function clicarCarta (elemento){
    elemento.classList.toggle("girar")
}

function comparador() { 
	return Math.random() - 0.5; 
}



const qntdCartas = prompt("Quantas cartas jogar? Apenas valores pares de 4 a 14");
if(qntdCartas % 2 === 0 && qntdCartas >= 4 && qntdCartas <= 14){
   // JOGO RODA NESSE ESPAÇO
    const elemento = document.querySelector(".conteudo");
    elemento.innerHTML = "";
    for(let i = 0; i < qntdCartas; i++) {
        cartasEmJogo[i] = baralho[i];
    }
    cartasEmJogo = cartasEmJogo.sort(comparador);
    for(let i = 0; i < qntdCartas; i++) {
        cartas[i] = cartasEmJogo[i].nome;
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

    
    
    
    























    // JOGO RODA NESSE ESPAÇO
}else {
    alert("QUANTIDADE DE CARTAS INVÁLIDOS");
}