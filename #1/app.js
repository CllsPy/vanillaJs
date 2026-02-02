const LIMIT = 200;

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

  let colors = buildRandomArrayColors();
  let selectedColor = colors;
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

function buildRandomArrayColors() {
  /*
  gera três valores aleatório 
  para criar um padrão rgb
   */
  let color = `rgba(${Math.floor(Math.random() * LIMIT)}, ${Math.floor(Math.random() * LIMIT)}, ${Math.floor(Math.random() * LIMIT)})`;
  console.log(`DEBUG APP.JS ${color}`);
  return color;
}
