let botaoSubir = document.getElementById("botaoSubirTopo");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botaoSubir.style.display = "block";
  } else {
    botaoSubir.style.display = "none";
  }
}

botaoSubir.addEventListener("click", function() {
  // Rolagem suave para navegadores modernos
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Fallback para navegadores mais antigos (opcional, mas recomendado para compatibilidade)
  if (!('scrollTo' in window)) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});