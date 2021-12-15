var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload() {
    towerImg = loadImage("tower.png");
    doorImg = loadImage("door.png");
    climberImg = loadImage("climber.png");
    ghostImg = loadImage("ghost-standing.png");
    spookySound = loadSound("spooky.wav");
    doorsGroup = new Group()
    climbersGroup = new Group()
    invisibleBlockGroup = new Group()
}

function setup() {
    createCanvas(600, 600);
    //spookySound.loop();
    tower = createSprite(300, 300);
    tower.addImage("tower", towerImg);
    tower.velocityY = 1;
    ghost = createSprite(200, 200, 50, 50);
    ghost.scale = 0.3;
    ghost.addImage("ghost", ghostImg);

}

function draw() {
    background(0);
    if (tower.y > 400) {
        tower.y = 300
    }

    if (gameState === "play") {
        if (keyDown("left_arrow")) {
            ghost.x = ghost.x - 3;
        }

        if (keyDown("right_arrow")) {
            ghost.x = ghost.x + 3;
        }

        if (keyDown("space")) {
            ghost.velocityY = -10;
        }
        ghost.velocityY = ghost.velocityY + 0.8
        }
        spawnDoors()
        drawSprites()
    }
    function spawnDoors() {
        if (frameCount % 400 === 0) {
            var door = createSprite(200, -50)
            door.addImage(doorImg)
            door.velocityY = 1;
            door.x = Math.round(random(120, 400));
            door.lifetime = 800
            doorsGroup.add(door)
            climber = createSprite(200, 10)
            climber.addImage(climberImg)
            climber.x = door.x
            climber.velocityY = 1
            climber.lifetime = 800;
            climbersGroup.add(climber);
            invisibleBlock = createSprite(200, 10)
            climber.x = door.x




            invisibleBlock.lifetime = 800;

        }
    }