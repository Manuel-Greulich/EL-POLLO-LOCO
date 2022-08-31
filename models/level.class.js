class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 3200;
    bottle;
    coin;
    endboss;

    constructor(enemies, endboss,  clouds, backgroundObjects, bottle, coin){  // FUnktion wird am Anfang aufgerufen, wenn level erstellt wird oder zB chicken, enemies
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottle = bottle;
        this.coin = coin;
        this.endboss = endboss;
    }

}               