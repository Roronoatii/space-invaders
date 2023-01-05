import * as map from "./map.js";

map.createmap();

let posShots;
let allDiv = document.querySelectorAll('.grille div');
console.log(map.grid.classList.contains("border_left"));

window.addEventListener('keydown', (e) => {
  console.log(e);
});
document.onkeydown = Spacekey;
function Spacekey(e) {
  e = e || window.event;

  if (e.keyCode == '37') {
    player_left();
  }
  if (e.keyCode == '38') {
    player_up();
  }
  if (e.keyCode == '39') {
    player_right();
  }
  if (e.keyCode == '40') {
    player_down();
  }
  if (e.keyCode == '32') {
    player_shoot();
  }
}
function player_left(){
  if(!allDiv[map.posship].classList.contains('border_left')){
    allDiv[map.posship].classList.remove("tireur");
    map.setpoship(map.posship - 1);
    allDiv[map.posship].classList.add("tireur");
  }
}
function player_up(){
  if(!allDiv[map.posship].classList.contains('border_top')){
    allDiv[map.posship].classList.remove("tireur");
    map.setpoship(map.posship - 20);
    allDiv[map.posship].classList.add("tireur");
  }
}
function player_right(){
  if(!allDiv[map.posship].classList.contains('border_right')){
    allDiv[map.posship].classList.remove("tireur");
    map.setpoship(map.posship + 1);
    allDiv[map.posship].classList.add("tireur");
  }
}
function player_down(){
  if(!allDiv[map.posship].classList.contains('border_bot')){
    allDiv[map.posship].classList.remove("tireur");
    map.setpoship(map.posship + 20);
    allDiv[map.posship].classList.add("tireur");
  }
}
function player_shoot(){
  posShots = map.posship;
  let boucle = setInterval(() =>{
      allDiv[posShots].classList.remove("laser");
      posShots = posShots - 20;
      allDiv[posShots].classList.add("laser");
      
      if(posShots < 20){
        clearInterval(boucle);
        setTimeout(() => allDiv[posShots].classList.remove("laser"), 100);
      }
  }, 100);
}
