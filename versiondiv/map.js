export let alien = [];
export const grid = document.querySelector(".grille");

export let incr = 0;
export let posship = 230;
export function setpoship(value) {
    posship = value;
}


export function createmap(){
    for(let i=0; i< 240; i++){
        let newgrill = document.createElement("div");
        if(incr==0){
            newgrill.classList.add("border_left");  
        }
        if(incr==19){
        
            newgrill.classList.add("border_right");  
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

export const newgrill = document.querySelectorAll("#grade div");