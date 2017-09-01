var choco;
var canvas

// console.log("hi")
function setup() {
    var canvas = createCanvas(1140, 250);

    canvas.parent("sketch-holder")
    var hershey = loadImage("home-images/kiss.png")
    
 


    //create a sprite and add the 3 animations
    choco = createSprite(400, 150, 50, 100);
    
    choco.addImage(hershey)
}



function draw() {
    background(193,170,100);

    //if mouse is to the left
    if (mouseX < choco.position.x - 10) {
        // choco.changeAnimation("moving");
        //flip horizontally
        // choco.mirrorX(-1);
        //negative x velocity: move left
        choco.velocity.x = -2;
    }
    else if (mouseX > choco.position.x + 10) {
        // choco.changeAnimation("moving");
        //unflip 
        // choco.mirrorX(1);
        choco.velocity.x = 2;
    }
    else {
        //if close to the mouse, don't move
        // choco.changeAnimation("floating");
        choco.velocity.x = 0;
    }

    if (mouseIsPressed) {
        //the rotation is not part of the spinning animation
        choco.rotation -= 10;
        // choco.changeAnimation("spinning");
    }
    else
        choco.rotation = 0;

    //up and down keys to change the scale
    //note that scaling the image quality deteriorates
    //and scaling to a negative value flips the image
    if (keyIsDown(UP_ARROW))
        choco.scale += 0.05;
    if (keyIsDown(DOWN_ARROW))
        choco.scale -= 0.05;

    //draw the sprite
    drawSprites();
}
