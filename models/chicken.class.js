class chicken extends MoveableObject{
    y = 345;
    width = 70;
    height = 70; 

    offsetX = 0;
    offsetY = 0;
    offsetW = 0;
    offsetH = 0;


    
    IMAGES_WALKING  = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'

    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];


    // eigene bzw extra Eigenschaften zur vererbung moveable-obejects. !! nur für das chicken in dem Fall

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
      

        this.x = 240 + Math.random() * 2800; 
        this.speed = 0.15 + Math.random() * 0.3; //chicken bekommen verschiedene Geschwindigkeit  

        this.animate();

    }


    animate(){ 
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);  
        

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);    
    }
    

}