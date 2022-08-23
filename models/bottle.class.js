class Bottles extends MoveableObject {
    y = 330;
    width = 100;
    height = 100;

    offsetX = 5;
    offsetY = 15;
    offsetW = 10;
    offsetH = 30;



    images = [
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];


    constructor() {

        super().loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.x = 300 + Math.random() * 2800;
        // this.y = 280 + Math.random() * 100;
        this.loadImages(this.images);


    }
  
  
}
  
