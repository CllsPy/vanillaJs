// coletar botões
buttons = document.querySelectorAll(".btn");

// functions
function applyEvent(array) {
  array.forEach((element) => {
    console.log(`DEBUG: ${element}`);
    console.log(element.target);
  });
}

applyEvent(buttons);
