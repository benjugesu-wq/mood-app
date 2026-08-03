function toggleMenu() {
  document.getElementById("missionsMenu").classList.toggle("show");
}

// Cierra el menú si tocás en cualquier otro lado de la pantalla
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


const personaje = document.getElementById('personaje');

document.getElementById('boton-feliz').addEventListener('click', () => {
    personaje.src = 'Gemini_Generated_Image_jygm82jygm82jygm.jpg';
});

document.getElementById('boton-enojado').addEventListener('click', () => {
    personaje.src = 'Gemini_Generated_Image_sngpubsngpubsngp.jpg';
});

document.getElementById('boton-triste').addEventListener('click', () => {
    personaje.src = 'Gemini_Generated_Image_ibczkiibczkiibcz.jpg';
});
document.getElementById('boton-neutral').addEventListener('click', () => {
    personaje.src = 'Gemini_Generated_Image_vrp129vrp129vrp1.jpg';
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('El Service Worker se registró con éxito:', reg))
            .catch(err => console.log('Error al registrar el Service Worker:', err));
    });
}
