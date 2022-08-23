class StatusBar extends DrawableObject{

    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png', // 0. Stelle
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png', // 5. Stelle

    ];

    percentage = 100;

    constructor(){
        super(); // methoden vom übergeordneteten Objekt initialisieren, also mitnehmen bekommen
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 40;
        this.width = 180;
        this.height = 40;
        this.setPercentage(100);
    }

    //setPercentage
    setPercentage(percentage) { // => bilder müssen aus array geladen werden, wir brauchen die zahl von 0-5
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){     
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }       
    }
    
}
    
