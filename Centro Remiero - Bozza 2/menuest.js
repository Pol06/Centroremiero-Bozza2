const menuest = document.querySelector("div#menuest");


const menuChiSiamo = document.querySelector("ul#ul-chi-siamo");
const menuClubHouse = document.querySelector("ul#ul-club-house");
const menuForesteria = document.querySelector("ul#ul-foresteria");
const menuBoathouse = document.querySelector("ul#ul-boathouse");
const menuCentroEstivo = document.querySelector("ul#ul-centro-estivo");
const menuCanottaggio = document.querySelector("ul#ul-canottaggio");
const menuRegate = document.querySelector("ul#ul-regate");
const liChiSiamo = document.querySelector("li#chi-siamo");
const elementimenuest = document.querySelector("div#elementumenuest");

menuChiSiamo.style.display = "none";
menuest.style.display = "flex";
menuClubHouse.style.display = "none";
menuForesteria.style.display = "none";
menuBoathouse.style.display = "none";
menuCentroEstivo.style.display = "none";
menuCanottaggio.style.display = "none";
menuRegate.style.display = "none";
elementimenuest.style.display = "none";


liChiSiamo.addEventListener("mouseover", function() {
    menuChiSiamo.style.display = "block";
    elementimenuest.style.display = "block";
  });
  
  liChiSiamo.addEventListener("mouseout", function() {
    menuChiSiamo.style.display = "none";
    elementimenuest.style.display = "none";
  });