function girarCarta (elemento){
    elemento.classList.toggle("girar")
}



const qntdCartas = prompt("Quantas cartas jogar? Apenas valores pares de 4 a 14");
if(qntdCartas % 2 === 0 && qntdCartas >= 4 && qntdCartas <= 14){
   // JOGO RODA NESSE ESPAÇO
    const elemento = document.querySelector(".conteudo");
    elemento.innerHTML = "";
    for(let i = 0; i < qntdCartas; i++) {
       elemento.innerHTML += `
       <div class="card" onclick="girarCarta(this)">
           <div class="face front">
               <img src="imagens/front.png">
           </div>
           <div class="face back">
               <img src="imagens/bobrossparrot.gif">
           </div>
       </div>
   `;
    }























    // JOGO RODA NESSE ESPAÇO
}else {
    alert("QUANTIDADE DE CARTAS INVÁLIDOS");
}