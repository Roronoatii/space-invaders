export let alien = [];
export const grid = document.querySelector(".grille");
export let win = false;
export let loose = false;
export let incr = 0;
export let posship = 230;
export function setpoship(value) {
    posship = value;
}
export function newalien(posShots){
    poziAliens = poziAliens.filter(el => el !== posShots);
}

export let poziAliens = [0,1,2,3,4,5,6,7,8,9,10,11,20,21,22,23,24,25,26,27,28,29,30,31,40,41,42,43,44,45,46,47,48,49,50,51];

let direction = 1;

export function createmap(){
    var incr = 0;
    for(let i = 0; i < 240; i++){
        const newgrill = document.createElement("div");
        if(incr == 0){
            newgrill.classList.add("border_left")
        }else if(incr==19){
            newgrill.classList.add("border_right")
        }
        if((i > 159) && (i < 180)){
            newgrill.classList.add("border_top");  

        }
        if(i>219){
            newgrill.classList.add("border_bot");  

        }
        if(i==posship){
            newgrill.classList.add("tireur");  
        }
        grid.appendChild(newgrill);
        incr ++;
        if(incr == 20){
            incr = 0;
        }
    }
}

export function Aliens(){
    let AllDiv = document.querySelectorAll('.grille div')
    poziAliens.forEach(poziAliens => {AllDiv[poziAliens].classList.add('alien')});
}


let fromRight = true;
let fromLeft = false;

export function AliensMovement(){
    let AllDiv = document.querySelectorAll('.grille div');
    AllDiv.forEach(div=>
        div.classList.remove('boom'));
    for(let i = 0;i < poziAliens.length; i++){
        
        if(AllDiv[poziAliens[i]].classList.contains("border_right")){
            if(fromRight == true){
                direction = 20;
                fromRight = false; 
                break;
            }else{
                direction = -1;
                fromRight = true;
                break;
            }
        }
        if(!AllDiv[poziAliens[i]].classList.contains("tireur") && !AllDiv[poziAliens[i]].classList.contains("border_bot")){
            if(AllDiv[poziAliens[i]].classList.contains("border_left")){
                if(fromLeft == true){
                    direction = 20;
                    fromLeft = false;
                    break;
                }else{
                    direction = +1
                    fromLeft = true;
                    break;
                }
            }
        }else{
            death.play();
            console.log("game over");
            
        }
        
    }   
       

    for(let i = 0; i < poziAliens.length; i++){
        AllDiv[poziAliens[i]].classList.remove('alien');
    }
    for(let i = 0; i < poziAliens.length; i++){
        poziAliens[i] += direction;
    }
    for(let i = 0; i < poziAliens.length; i++){
        AllDiv[poziAliens[i]].classList.add('alien');
    }
}
