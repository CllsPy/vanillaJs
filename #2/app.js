// coletar botões
const buttons = document.querySelectorAll(".btn");
const h1 = document.querySelector(".counter");
let globalCounter = 1;

// functions
function applyEvent(array) {
  /*
  input:
    recebe array com btns

  to-do:
    verificar a classe de cada btn
    applicar evento 
    alterar html 

    output: 
      none
  */
  array.forEach((e) => {
    // criar if para olhar classList
    if (e.classList.contains("increase")) {
      e.addEventListener("click", increaseValue);
    }
  });
}

// increase
function increaseValue() {
  /*
    altera o h1 do front aumentando 1
   */
  h1.textContent = globalCounter++;
}

applyEvent(buttons);
