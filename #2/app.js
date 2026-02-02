// coletar botões
buttons = document.querySelectorAll(".btn");

// functions
function applyEvent(array) {
  array.forEach((element) => {
    console.log(element.classList);
  });
}

applyEvent(buttons);
