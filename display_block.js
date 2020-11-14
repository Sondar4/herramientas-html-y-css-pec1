function change_display(elem1, elem2) {
  let other = document.getElementById(elem2);
  let otherTexto = document.getElementById(elem2 + 'Texto');
  let elemTexto = document.getElementById(elem1 + 'Texto');
  other.classList.remove('titulo-mostrado');
  otherTexto.classList.add('oculto');
  elemTexto.classList.remove('oculto')
}

window.display = function(elem) {
  if (!elem.classList.contains('titulo-mostrado')) {
    if (elem.id == 'Descripcion') {
      change_display('Descripcion', 'Caracteristicas')
    }
    if (elem.id == 'Caracteristicas') {
      change_display('Caracteristicas', 'Descripcion')
    }
    elem.classList.add('titulo-mostrado');
  }
}