class Character extends MoveableObject {

    y = 180;
    height = 250;
    width = 120;
    currentImage = 0;
    world;
    walking_sound = new Audio('Audio/walk.mp3');
    jumping_sound = new Audio('Audio/jump.mp3');
  
    speed = 8;
    
    offsetX = 0;
    offsetY = 100;
    offsetW = 0;
    offsetH = 110;

 
 
    IMAGES_WAIT = [ 
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'

    ];

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'


    ]

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'

    ];


    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_WAIT);



        this.applyGravity(); 

        this.animate();
    }

    animate(){ // läd animierte bilder vom character nacheinanders aus Array, character bewegt sich ab hier


        setInterval(() => {     //Character bewegt sich nach rechts und links 
            this.walking_sound.pause();
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { // rechte taste gedrückt bild nicht gespiegelt
                this.moveright();
                this.otherDirection = false;
                this.walking_sound.play();
            }
            
            if(this.world.keyboard.LEFT && this.x > 0) {  // linke taste  gespiegelt
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();
            }  

            if(this.world.keyboard.SPACE && !this.isAboveGround()){ //taste UP gedrückt und wir über dem grund sind dann springen
                this.jump();
                this.jumping_sound.play();
            }

            this.world.camera_x = -this.x + 100;
        }, 1500 / 60); 
        
        

        setInterval(() => {

            if(this.deadAfterSecond()){
                this.playAnimation(this.IMAGES_DEAD);  // bei tot spielt die animation IMAGES_DEAD
              
             
            } else if (this.isHurt()){
                this.playAnimation(this.IMAGES_HURT); // verletzung spielt IMAGES_HURT Animation
             
            }
              else if (this.isAboveGround()){ // animation ob wir über dem ground sind
                this.playAnimation(this.IMAGES_JUMPING); 
            }  else { 
                this.playAnimation(this.IMAGES_WAIT); 
            }

            {
                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // animation ob wir nach rechts und links laufens
                    this.playAnimation(this.IMAGES_WALKING);
                }
            } 
        }, 50);
    }

    jump(){
        this.speedY = 25;
    }

 
}