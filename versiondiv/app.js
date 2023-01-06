import * as map from "./map.js";

map.createmap();
map.Aliens();
setInterval(map.AliensMovement,400);
let keypressed = true;
let posShots;
let touch = [];

let allDiv = document.querySelectorAll('.grille div');

window.addEventListener('keydown', (e) => {
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
    if(keypressed == true){
      keypressed = false;
      player_shoot();

    }
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
  let boucle = setInterval(() =>  {
      allDiv[posShots].classList.remove("laser");
      posShots = posShots - 20;
      allDiv[posShots].classList.add("laser");
      if(allDiv[posShots].classList.contains("alien")){
        allDiv[posShots].classList.remove("alien");
        allDiv[posShots].classList.add("boom");
        map.newalien(posShots);
        console.log(map.poziAliens);
        
        clearInterval(boucle);
        setTimeout(() => allDiv[posShots].classList.remove("laser"), 100);
        keypressed = true;

      }
      if(posShots < 20){
          clearInterval(boucle);
          setTimeout(() => allDiv[posShots].classList.remove("laser"), 100);
          keypressed = true;
      }
  }, 100);
}
