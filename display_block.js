window.display = function(elem) {
  if ('oculto' in elem.classList) {
    console.log("Está oculto!")
    // elem.classList.add('titulo-mostrado')
  }
  console.log("No está oculto!")
}