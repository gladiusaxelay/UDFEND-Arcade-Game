// Enemies our player must avoid
const Enemy = function Enemy(posX, posY, vel) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.posX = posX;
    this.posY = posY;
    this.vel = vel;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // Enemies are moving left to right in a horizontal line
    // across the canvas
    // thus, we are incrementing their location by each enemy
    // assigned dt constant they got
    this.posX += this.vel * dt;

    // Checking if the enemies are at the canvas border, if so
    // reset their position and very the enemy speed
    if (this.posX > 505) {
        this.posX = -50;
        let changeVel = Math.floor(Math.random() * 500 + 1);
        this.vel = changeVel;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.posX, this.posY);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function Player() {
    this.posX = 202;
    this.posY = 404;
    this.horMove = 101;
    this.verMove = 83;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function (dt) {
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.posX, this.posY);
};

Player.prototype.handleInput = function (whereTo) {
    switch (whereTo) {
        case 'up':
            // move ...
            break;

        case 'down':
            // move ...
            break;

        case 'left':
            // move ...
            break;

        case 'right':
            // move ...
            break;
    }
};

// Now instantiate your objects.
let bug1 = new Enemy(0, 60 + 80 * 0, 100);
let bug2 = new Enemy(0, 60 + 80 * 1, 200);
let bug3 = new Enemy(0, 60 + 80 * 2, 300);

// Place all enemy objects in an array called allEnemies
window.allEnemies = [bug1, bug2, bug3];

// Place the player object in a variable called player
window.player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
