class Coins extends MoveableObject {

    width = 100;
    height = 100;

    offsetX = 20;
    offsetY = 20;
    offsetW = 40;
    offsetH = 40;


    images = [
        'img/8_coin/coin_2.png',
    ];

constructor(x, y){
    super().loadImage('img/8_coin/coin_2.png');
    this.x = x;
    this.y = y;

    this.loadImages(this.images);
   


}




}