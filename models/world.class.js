class World{

    character = new Character()
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    hits = 0;
    bottles = new BottlesBar();
    statusbar = new StatusBar();
    coinsbar = new CoinsBar();
    throwableObjects = [];
    bottle = new Bottles();
    coin = new Coins();
    hurt_sound = new Audio('Audio/hurt.mp3');
    throw_sound = new Audio('Audio/throw.mp3');
    game_sound = new Audio('Audio/gamesound.mp3');
    // endboss = this.level.enemies.find(e => e instanceof Endboss);
        // endscreen = new Endscreen;
    // win = new Win();
   
    

    
    

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;   
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
        this.run();
        this.bottleImpactEndboss();
        this.gameSound();
    }

    gameSound(){
        setInterval(() => {
            this.game_sound.play();
            this.game_sound.volume = 0.5;
        }, 500);
    }

    setWorld(){
        this.character.world = this;
    }


    run(){
        this.stopInterval = setInterval(() => {
            this.checkCollision();
            this.checkThrowObjects();
            this.charackterPickUpBottle();  
            this.charackterPickUpCoins();
            this.gameOver();
            this.gameWin();
            // this.characterBoss();

        },  200); //200ms 
 
    }

    characterBoss(){
    let boss = this.level.endboss[0]
        if(boss.isColliding(this.character)) {
            console.log('hit');
        }
    }



    checkThrowObjects(){ // flaschen wird geworfen und von bottlesbar dazu und web gerechnet
        
        if(this.keyboard.D) {
                this.throw_sound.play();
                this.keyboard.D = false;
             if(this.character.bottle > 0){
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.character.bottle -= 20; 
                this.throwableObjects.push(bottle);
                this.bottles.setPercentage(this.character.bottle); 
                // console.log(this.character.bottle)  
                       
            }
        }
       
    }

    // flaschen wurf auf endboss animation und leben abzug

    bottleImpactEndboss() {
            this.throwableObjects.forEach((bottle) => {
                console.log('funktioniert');
                let endboss = this.level.endboss[0];
                if (endboss.isColliding(bottle)) {
                    endboss.boss2 = true;
                    endboss.energyboss -= 20;
                    console.log(endboss.energyboss);
                    this.throwableObjects.splice(0, 1);    
                }
            })
       
    }

 
   // kontrolliert ob elemente miteinander kolidieren
    
    checkCollision(){
        this.level.enemies.forEach( (enemy) => {
            if(this.character.isColliding(enemy) ) {
                this.character.hit();
                this.hurt_sound.play();
                this.statusbar.setPercentage(this.character.energy);
            
                }
                
            });
        }

        

        // Sammelt Flaschen auf, gelöscht bis 6
        charackterPickUpBottle() {
            if(this.character.bottle < 100) {
                this.level.bottle.forEach((value, index) => {
                
                    if (this.character.isColliding(value)) {
                        this.character.hitBottle();
                        this.level.bottle.splice(index, 1);
                        this.bottles.setPercentage(this.character.bottle);
                        // console.log(this.character.bottle);
        
                    }
                });    
            }   
        }

        // sammelt coins aud
        charackterPickUpCoins() {
            this.level.coin.forEach((coin, index) => {
                if (this.character.isColliding(coin)) {
                    this.character.hitCoins();
                    this.level.coin.splice(index, 1);
                    this.coinsbar.setPercentage(this.character.coin);
                };
            })
        }

        endscreen = [];
        winscreen = [];

        gameWin(){
            if(this.level.endboss[0].energyboss == 0){
                setTimeout(() => {
                let screen2 = new Win();
                this.winscreen.push(screen2);

        
                }, 200);
                console.log('win');
            }
        }
    
        
        gameOver() {
          if(this.character.energy == 0){

            clearInterval(this.stopInterval);
            keyboard = false;
        

            setTimeout(() => {
                let screen = new Endscreen();
                this.endscreen.push(screen);
    
            }, 200);
            console.log('tot');
          }
        }

        draw(){

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // welt wird erstmal gelöscht also canvas

            this.ctx.translate(this.camera_x, 0);
            
            this.addObjectsToMap(this.level.backgroundObjects); //objekte werden zur map hinzugefügt, clouds, enemies etc.
            this.addObjectsToMap(this.level.coin);
            this.addObjectsToMap(this.level.bottle);
            
            
            this.addObjectsToMap(this.level.clouds);

            this.addToMap(this.character); 
        
            this.addObjectsToMap(this.level.enemies);
            this.addObjectsToMap(this.throwableObjects);
            this.addObjectsToMap(this.level.endboss);


            // Statusbar position fixed
            this.ctx.translate(-this.camera_x, 0); // Back 
            this.addToMap(this.bottles);
            this.addToMap(this.statusbar);
            this.addToMap(this.coinsbar);
            
            this.addObjectsToMap(this.endscreen);
            this.addObjectsToMap(this.winscreen);    
            
            
            this.ctx.translate(this.camera_x, 0); // Forwards
            this.ctx.translate(-this.camera_x, 0);
           
            // draw() wird immmer weider aufgerufen
            let self = this;
            requestAnimationFrame(function(){
                self.draw();
            }); 
           
    }

    // startScreenEndScreen() {
    //     if (this.character.energy == 0) {
    //         this.addToMap(this.endscreen);
    //     }
    //     if (this.endboss.energyboss == 0) {
    //         this.addToMap(this.win);
    //     }
    // }


    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) { //mo = moveable object 
        if(mo.otherDirection) {
            this.flipImage(mo);
        }   
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
            
        if(mo.otherDirection){
            this.flipImageBack(mo);
        }
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}    


