const loader = document.querySelector("div#loader");
const imgloader = document.querySelector("div#loader img");
const body = document.querySelector("body")

loader.style.opacity = "1";
imgloader.style.opacity = "1";
body.style.overflow = "hidden";


setTimeout(function() {
    loader.style.opacity = "0";
  }, 3000);
  loader.addEventListener('transitionend', function () {
    loader.style.display = 'none';
    body.style.overflow = "auto";
  });

  setTimeout(function() {
    imgloader.style.opacity = "0.3";
  }, 1000);





  const immagine = document.querySelector("div#collegamento img");
  const container = document.querySelector("div#collegamento");
  
  immagine.style.opacity = "0";
  
  container.addEventListener("mouseover", () => {
    immagine.style.opacity = "1";
    });
    
    container.addEventListener("mouseout", () => {
    immagine.style.opacity = "0"; // qui puoi scegliere quale opacità dare all'immagine quando il cursore si sposta via dal container
    });