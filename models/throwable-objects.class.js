class ThrowableObject extends MoveableObject {


    offsetX = 0;
    offsetY = 0;
    offsetW = 0;
    offsetH = 0;

    IMAGES_THROW = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];


    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];


    constructor(x, y){
        super().loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_SPLASH);

        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 50;
        this.animate();
        this.throw();
    }

    throw(x, y){
        this.speedY = 20;
        this.applyGravity(); 
        setInterval( () => {
            this.x += 50;

        }, 50);
    }

    animate() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_THROW);
            if (world.checkThrowObjects()) {
                this.playAnimation(this.IMAGES_THROW);
            } else if (world.bottleImpactEndboss()) {
                this.playAnimation(this.IMAGES_SPLASH);
            }
        }, 50);
    }


}