let canvas;
let world;
let keyboard = new Keyboard();


function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas,keyboard)
    mobileButtonPlay()
}

function startGame() {
    document.getElementById('startscreen').classList.add('d-none'); 
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('start-btn').classList.add('d-none');
    document.getElementById('control-description').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');

    checkEndscreen()
}

function restart() {
    location.reload();
}

function checkEndscreen() {

    let checkwinlose =  setInterval(() => {
      if (world.lose || world.win) {
          document.getElementById('restart').classList.remove('d-none');
        clearInterval (checkwinlose)
      }
    }, 200);
}


function mobileButtonPlay() {
    document.getElementById('btn-left').addEventListener("touchstart", (event) => {
        event.preventDefault();
            keyboard.LEFT = true;
    });

    document.getElementById('btn-left').addEventListener("touchend", (event) => {
        event.preventDefault();
            keyboard.LEFT = false;
    });

    document.getElementById('btn-right').addEventListener("touchstart", (event) => {
        event.preventDefault();
            keyboard.RIGHT = true;
    });

    document.getElementById('btn-right').addEventListener("touchend", (event) => {
        event.preventDefault();
            keyboard.RIGHT = false;
    });
        
    document.getElementById('btn-throw').addEventListener("touchstart", (event) => {
        event.preventDefault();
            keyboard.D = true;
    });

    document.getElementById('btn-throw').addEventListener("touchend", (event) => {
        event.preventDefault();
            keyboard.D = false;
    });

    document.getElementById('btn-up').addEventListener("touchstart", (event) => {
        event.preventDefault();
            keyboard.SPACE = true;
    });

    document.getElementById('btn-up').addEventListener("touchend", (event) => {
        event.preventDefault();
            keyboard.SPACE = false;
    });
}


window.addEventListener("keydown", (e) => {
    if(e.keyCode == 39){
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 37)
        keyboard.LEFT = true;
    
    if(e.keyCode == 38){
        keyboard.UP = true;
        
    
    if(e.keyCode == 40)
        keyboard.DOWN = true;
    }  

    if(e.keyCode == 32)
        keyboard.SPACE = true;

    if(e.keyCode == 68)
        keyboard.D = true;    
    
});



window.addEventListener("keyup", (e) => {
    if(e.keyCode == 39){
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37)
        keyboard.LEFT = false;
    
    if(e.keyCode == 38){
        keyboard.UP = false;
        
    
    if(e.keyCode == 40)
        keyboard.DOWN = false;
    }  

    if(e.keyCode == 32)
        keyboard.SPACE = false;

    if(e.keyCode == 68)
        keyboard.D = false; 

    
});

