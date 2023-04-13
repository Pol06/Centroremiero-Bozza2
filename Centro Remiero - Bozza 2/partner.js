const partner = document.querySelector("div#partner");
const autoritaLario = document.querySelector("div#partner div a img#autoritaLario");
const lagoComo = document.querySelector("div#partner div a img#lagoComo");
const lariofiere = document.querySelector("div#partner div a img#lariofiere");
const pvl = document.querySelector("div#partner div a img#pvl");
const fic = document.querySelector("div#partner div a img#fic");

autoritaLario.style.width = "auto";
lagoComo.style.width = "auto";
lariofiere.style.width = "auto";
pvl.style.width = "auto";
fic.style.width = "auto";

autoritaLario.style.height = "50px";
lagoComo.style.height = "50px";
lariofiere.style.height = "50px";
pvl.style.height = "50px";
fic.style.height = "50px";

autoritaLario.addEventListener("mouseover", function() {
    autoritaLario.style.height = "85px";
});
autoritaLario.addEventListener("mouseout", function() {
    autoritaLario.style.height = "50px";
});

lagoComo.addEventListener("mouseover", function() {
    lagoComo.style.height = "85px";
});
lagoComo.addEventListener("mouseout", function() {
    lagoComo.style.height = "50px";
});

lariofiere.addEventListener("mouseover", function() {
    lariofiere.style.height = "75px";
});
lariofiere.addEventListener("mouseout", function() {
    lariofiere.style.height = "50px";
});

pvl.addEventListener("mouseover", function() {
    pvl.style.height = "85px";
});
pvl.addEventListener("mouseout", function() {
    pvl.style.height = "50px";
});

fic.addEventListener("mouseover", function() {
    fic.style.height = "85px";
});
fic.addEventListener("mouseout", function() {
    fic.style.height = "50px";
});

