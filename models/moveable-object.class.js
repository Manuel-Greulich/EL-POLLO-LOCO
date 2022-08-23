class MoveableObject extends DrawableObject {
    // nur für bewegbare Objekte
    speed = 0.15;
    otherDirection = false;
    speedY = 0; // Geschwindigkeit Y Achse, wie schnell Objekt nach unten fällt
    acceleration = 2; // Beschleunigung, wie schnell objekt beschleunigt wird
    energy = 100; // für character
    energyboss = 100; // für endboss
    lastHit = 0; 
    bottle = 0;
    coin = 0;
    coins_collect_sound = new Audio('Audio/coins.mp3');
    
    
    
    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 35);
    }

    isAboveGround(){
        if(this instanceof ThrowableObject) { 
            return true;
        } else {
            return this.y < 180;
        }
    }



    // ob character mit chicken kolidiert
    isColliding(mo){
        // return this.x + this.width > mo.x &&
        //     this.y + this.height > mo.y &&
        //     this.x < mo.x &&
        //     this.y < mo.y + mo.height;
        return (this.x + this.offsetX) + (this.width - this.offsetW) > mo.x + mo.offsetX &&
            (this.y + this.offsetY) + (this.height - this.offsetH) > mo.y + mo.offsetY &&
            this.x + this.offsetX < (mo.x + mo.offsetX) + (mo.width - mo.offsetW) &&
            this.y + this.offsetY < (mo.y + mo.offsetY) + (mo.height - mo.offsetH);

    }


    // isColliding(mo) {
    //     return this.x + this.width - this.offsetRight > mo.x + mo.offsetLeft &&
    //         this.y + this.height - this.offsetBottom > mo.y + mo.offsetTop && 
    //         this.x + this.offsetLeft < mo.x + mo.width - mo.offsetRight && 
    //         this.y + this.offsetTop < mo.y + mo.height - mo.offsetBottom;
            
    // } 

    // flaschen werden hit um 20 erhöt stopt bei 100 

    hitBottle() { 
        if(this.bottle < 100) {
            this.bottle += 20;
        } 
    }

    hitCoins() { 
        if(this.coin < 100) {
            this.coin += 20;
            this.coins_collect_sound.play();
            this.coins_collect_sound.volume = 0.2;
        } 
    }

    endBossIsHit() {
        this.energy -= 20;
        if (this.energy < 0) {
            this.energy = 0;
            this.isDead();
        } else { 
            // this.lastHit = new Date().getTime();
        }
    }
    
    hit(){
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); 
        }
    }

    isHurt(){
        // let timepassed =  new Date().getTime() - this.lastHit; // differenz in millisekunden
        // timepassed = timepassed / 1000; // Differenz in Sekunden
        // return timepassed < 1;

        return this.boss2;
    }

    deadAfterSecond(){
        let timepassed =  new Date().getTime() - this.lastHit; // differenz in millisekunden
        timepassed = timepassed / 1000; // Differenz in Sekunden
        return timepassed < 1;
    }

    isDead(){
        // this.lastHit = new Date().getTime(); 
        return this.energy == 0;
    }

    isDeadBoss(){
        return this.energyboss == 0;
    }


    // endboss hit !?

    playAnimation(images){
        let i = this.currentImage % images.length; 

        if ((this instanceof Character || this instanceof Endboss) && images == this.imagesDead && i == images.length - 3) {

        } else {   
            let path = images[i];
            this.img = this.imageCache[path]; 
            this.currentImage++;
        }
    }

    moveright() {
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;   
    }

}