

const level1 = new Level(
    [
        new chicken(),
        new chicken(),
        new chicken(),
        new chicken(),
        new chicken(),
        new chicken(),
    ],

    [
        new Endboss()
    ],

    [
        new cloud(100),
        new cloud(600),
        new cloud(1000),
        new cloud(1400),
        new cloud(1800),
        new cloud(2200),
        new cloud(2600),
        new cloud(3000),
        new cloud(3400),
        new cloud(3800),
  
    ],

    [
        new BackgroundObject('img/5_background/layers/air.png', -719), 
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0), 
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img/5_background/layers/air.png', 719), 
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719*2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2),

        new BackgroundObject('img/5_background/layers/air.png', 719*3), 
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3),

       

        new BackgroundObject('img/5_background/layers/air.png', 719*4), 
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*4),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*4),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*4),

        new BackgroundObject('img/5_background/layers/air.png', 719*5), 
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*5),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*5),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*5),
    ],

    [
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),
        new Bottles(),

    ],

    [   //      width height
       
    // new Coins(600, 300),
    // new Coins(700, 240),
    // new Coins(800, 200),
    // new Coins(900, 250),
    // new Coins(1000, 300),

    new Coins(680, 300),
    new Coins(720, 260),
    new Coins(760, 220),


    new Coins(1300, 260),
    new Coins(1400, 260),
    new Coins(1500, 260),


    new Coins(2100, 250),
    new Coins(2120, 200),
    new Coins(2145, 150),
    new Coins(2170, 100),
    new Coins(2195, 150),
    new Coins(2120, 200),
    new Coins(2240, 250),
    new Coins(2220, 200),

    new Coins(2700, 300),
    new Coins(2800, 260),
    new Coins(3000, 220)



    ],

);
