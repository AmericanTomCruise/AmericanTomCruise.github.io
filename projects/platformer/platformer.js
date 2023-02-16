$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(000,650,100,150)
    createPlatform(400,650,100,150)
    createPlatform(800,650,100,150)
    createPlatform(1200,650,300,150)
    createPlatform(1300,550,100,10)
    createPlatform(1150,450,50,10)
    createPlatform(900,420,50,10)
    createPlatform(600,420,50,10)
    createPlatform(350,420,50,10)
    createPlatform(100,1,10,450)
    createPlatform(100,420,50,10)
    createPlatform(110,300,10,5)
    createPlatform(150,200,30,5)
    createPlatform(170,105,10,95)
    createPlatform(230,200,30,5)
    createPlatform(250,105,10,95)
    createPlatform(310,200,30,5)
    createPlatform(330,105,10,95)
    createPlatform(390,200,30,5)
    createPlatform(410,105,10,95)
    createPlatform(470,200,30,5)
    createPlatform(490,105,10,95)
    createPlatform(550,200,30,5)
    createPlatform(570,105,10,95)
    createPlatform(630,200,30,5)
    createPlatform(650,105,10,95)
    createPlatform(710,200,30,5)
    createPlatform(730,105,10,95)
    createPlatform(780,200,30,5)
    createPlatform(800,105,10,95)
    createPlatform(860,200,30,5)
    createPlatform(880,105,10,95)
    createPlatform(940,200,30,5)
    createPlatform(960,105,10,95)
    createPlatform(1020,200,30,5)
    createPlatform(1040,105,10,95)
    createPlatform(1100,200,30,5)
    createPlatform(1120,105,10,95)
    createPlatform(1160,200,300,5)
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
   createCollectable('database',1350,610,0,0)
   createCollectable('database',110,380,0,0)
   createCollectable('database',1350,150,0,0)
    
    
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)

createCannon('left',650,.00000000000000000000000000000001)
createCannon('right',100,1000)
createCannon('right',450,1500)
createCannon('right',766,.00000000000000000000000000000001)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
