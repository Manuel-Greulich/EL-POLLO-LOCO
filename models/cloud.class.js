class cloud extends MoveableObject{
    y = 20;
    height = 250;
    width = 500;
    
    

    constructor(x){
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = x;

    //    this.x = Math.random() * 500; //  this.x = 200 + Math.random() * 500; // Zahl wischen 200 und 700, math.random pickt die zahl random zwischen 0 und 1
       this.animate();

    }

    animate(){          // bewegt Objekte
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

}


