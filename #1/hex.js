const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// doom
const clickBtn = document.getElementById("btn");
const main = document.querySelector("main");

// eventos
clickBtn.addEventListener("click", setColorBackground);

// funções
function pickRandomColor(colorArray) {
  /*
    seleciona uma cor aleatório.
    retorna a cor selecionada.
  */
  let selectedColor = colors[Math.floor(Math.random() * colors.length)];
  console.log(`DEBUG: Cor Selecionada ${selectedColor}`);
  return selectedColor;
}

function setColorBackground(colorArray) {
  /*
  chama pickRandom
  seta a cor aleatória escolhida na tag main
  */
  let selectedColor = pickRandomColor(colorArray);
  console.log(`DEBUG 2: ${console.log(main)}`);
  main.style.backgroundColor = selectedColor;
}
