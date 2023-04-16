const partner = document.querySelector("div#partner div");
const div = document.querySelector("div#partner");
const autoritaLario = document.querySelector("div#partner div a img#autoritaLario");
const lagoComo = document.querySelector("div#partner div a img#lagoComo");
const lariofiere = document.querySelector("div#partner div a img#lariofiere");
const pvl = document.querySelector("div#partner div a img#pvl");
const fic = document.querySelector("div#partner div a img#fic");
const wr = document.querySelector("div#partner div a img#wr");

autoritaLario.style.width = "auto";
lagoComo.style.width = "auto";
lariofiere.style.width = "auto";
pvl.style.width = "auto";
fic.style.width = "auto";
wr.style.width = "auto";

autoritaLario.style.height = "50px";
lagoComo.style.height = "50px";
lariofiere.style.height = "50px";
pvl.style.height = "50px";
fic.style.height = "50px";
wr.style.height = "50px";



if(window.innerWidth > 1300 && !('ontouchstart' in window)){ 
autoritaLario.addEventListener("mouseover", function() {
    autoritaLario.style.height = "90px";
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
    lariofiere.style.height = "70px";
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

wr.addEventListener("mouseover", function() {
    wr.style.height = "85px";
});
wr.addEventListener("mouseout", function() {
    wr.style.height = "50px";
});

}







const divprova = document.querySelector("div#prova");
const provaimg = document.querySelector("div#prova img");
provaimg.style.opacity = "0";

divprova.addEventListener("mouseover", function() {
    provaimg.style.opacity = "1";
});
divprova.addEventListener("mouseout", function() {
    provaimg.style.opacity = "0";
});