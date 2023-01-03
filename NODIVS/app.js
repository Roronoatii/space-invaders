for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 16; j++) {
    const newgrill = document.createElement("div");
      if(i < 3 && j < 15){
        newgrill.classList.add("alien");
      }
      if (i == 19 && j == 10){
        newgrill.classList.add("tireur");
      }
    grid.appendChild(newgrill);
  }
}

window.addEventListener('keydown', (e) => {
    console.log(e);
  });

document.onkeydown = Spacekey;
function Spacekey(e) {
  e = e || window.event;

  if (e.keyCode == '37') {
    player_left();
  }
  if (e.keyCode == '39') {
    player_right();
  }
  if (e.keyCode == '32') {
    player_shoot();
  }
}
function player_left(){

}
function player_right(){

}
function player_shoot(){

}
