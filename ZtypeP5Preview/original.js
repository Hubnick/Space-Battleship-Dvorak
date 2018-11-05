
const WORDS = ["game", "day", "java", "script", "rainbow", "program", "p5", "bunny", "youtube", "github"];

var focus; // Astroid the player is currently typing out
var field = [];

var score = 0;

var planetCrust; // color of crust
var planetMantle; // color of mantle

var ship; // color of ship

// background image
var bg; 
// var y = 0;

function setup() {
    // createCanvas(1000, 1500);

    planetCrust = randomColor();
    planetMantle = randomColor();
    ship = randomColor();

    field.push(new Asteroid(random(width - 150) + 75, 0, random(WORDS), randomColor()));

    focus = null;

    bg = loadImage("./pic22.jpg");
    createCanvas(640, 420);

}

function draw() {
    background(bg);
    
    // stroke(226, 204, 0);
    // line(0, y, width, y);

    // y++;
    // if (y > height) {
    //     y = 0;
    // }

    background(51);

    drawBase();
    drawLazer();
    drawScore();

    handleField();
    
}

/**
 * updates & draws Astroids
 * manages field array
 * increments score
 * manages focus
 * creates Asteroids
 */
function handleField() {

    for (var i = field.length - 1; i >= 0; i--) {

        field[i].update();

        if (field[i].intact) {
            // astroid is still on-screen

            field[i].draw();
        } else {
            // Astroid has been destroyed

            score += field[i].text.length;
            field.splice(i, 1); // delete from array
            focus = null;
        }
    }

    /* attempt new Astroid */
    if (frameCount % 60 === 0) { // every second

        if (random() > map(score, 0, 1000, 0.8, 0.01)) { // more difficult as game progresses

            field.push(new Asteroid(random(width - 150) + 75, 0, random(WORDS), randomColor()));
        }
    }
}

/**
 * handles user input
 */
function keyPressed() {

    if (focus) {
        // if we have honed in on a specific Asteroid

        focus.erode(keyCode);
    } else {
        // find the astroid to target

        focus = findAsteroid(keyCode, field);

        if (focus) {
            focus.erode(keyCode);
        }
    }
}

/**
 * draws planet as a rectangle
 * draws "ground control" as a triangle
 */
function drawBase() {

    /* planet */
    fill(planetMantle);
    stroke(planetCrust);
    strokeWeight(5);
    rect(0, height - 15, width, height);

    /* ground control */
    fill(ship);
    stroke(255);
    beginShape();
    vertex(width / 2 - 20, height);
    vertex(width / 2, height - 50);
    vertex(width / 2 + 20, height);
    endShape(CLOSE);
}

/**
 * draws "lazer" between ground control and Asteroid
 */
function drawLazer() {

    if (!focus)
        return;

    stroke(randomColor());
    strokeWeight(focus.completedText.length); // width of line depends on progress

    // point of ground control
    line(width / 2, height - 50, focus.position.x, focus.position.y);

    fill(255);
    noStroke();
    textAlign(LEFT);
    textSize(30);
    text(focus.completedText, 10, height - 40);
}

/**
 * draws the score
 */
function drawScore() {

    textAlign(RIGHT);
    noStroke();
    textSize(30);
    fill(255);
    text(score, 50, height / 2);
}

/**
 * Generates a random color
 */
function randomColor() {

    return color(random(255), random(255), random(255));
}

/**
 * stops loop, draws game over message
 */
function endGame() {

    noLoop();

    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(80);
    text("Game Over!", width / 2, height / 2);
}

function Asteroid(x, y, text, color) {

    this.position = createVector(x, y);

    this.color = color; // color

    this.text = text; // text do be typed
    this.size = text.length * 15; // size

    this.completedText = ""; // text which the user has correctly inputted

    this.intact = true; // whether the astroid is on-screen or not
}

/**
 * moves Astroid down the screen
 */
Asteroid.prototype.update = function () {

    // make speed based upon score
    this.position.y += map(score, 0, 1000, 1, 15);

    if (this.position.y > height) {
        endGame();
    }
};

/**
 * based upon keyCode, will add to the completedText
 */
Asteroid.prototype.erode = function (keyCode) {

    var inputChar = String.fromCharCode(keyCode).toLowerCase(); // keyCode to char
    var length = this.completedText.length + 1;

    if (this.text.substring(0, length) === this.completedText + inputChar) // if the character matches text
        this.completedText += inputChar;

    this.intact = (this.completedText !== this.text); // update intact
};

/**
 * draws Astroid
 */
Asteroid.prototype.draw = function () {

    fill(this.color);

    stroke(0);
    strokeWeight(3);
    ellipse(this.position.x, this.position.y, this.size);

    noStroke();
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text(this.text, this.position.x, this.position.y);
};

/**
 * figures out which Astroid within the field array
 * should be targeted
 */
function findAsteroid(code, field) {

    var char = String.fromCharCode(code).toLowerCase();

    for (var i = 0; i < field.length; i++) {
        if (field[i].text.startsWith(char)) {

            return field[i];
        }
    }

    return null;
}
