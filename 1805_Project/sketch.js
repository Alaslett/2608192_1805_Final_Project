
// ====== GAME STATE ======
// the starting level of the game, state 1 is the transition between levels, 2 is the display of level 2 
 // the transition starts at the first level of the game when the sprite interacts with the objects */

let CurrentBG;
let bg1;
let bg2;
let bg3;

let phones = [];

let s;
let scl = 100;
let food;
let score = 0;

// establish the sprite group .. basically saying leave room for this name to be established 
let SPRITE_CHARACTER_EAST = null;
let SPRITE_CHARACTER_WEST = null;
let SPRITE_CHARACTER_SOUTH = null;
let SPRITE_CHARACTER_NORTH = null;

//====The TileMap for level 1 ====// 
//the start of the tile variables to 'map out the game' 
let tileMap = []; // creates a map for the game which will help the character interact with objects within the game 
let tilesX = 23; //23 tiles on the x-axis 
let tilesY = 18; // 13 tiles on the y-axis. // both of these values will fit the canvas 
let tileSize = 100; // the number of pixels across each tile. 
let theCanvasWidth = tilesX*tileSize  // TomFix: Calc canvas size based on tile size and numbers
let theCanvasheight = tilesY*tileSize // TomFix: Calc canvas size based on tile size and numbers

//establishes the texture variable which displays the textures on screen
let textures = [];

let Ds2;
let DS2Sprite;
let DS2Pos = { col: 18, row: 12};
// ========== STARTING POSITIONS FOR ALL OF THE SPRITES ==========
// this is the variables for the sprites which will impact the scene changes in the game 
// TOM FIX: Calculate start position of sprites based on the tile 
let Ds;
let DSSprite;
let DSPos = { col: 2.5, row: 1.5 };

let game; 

let Phone;
let PhoneSprite;
let PhonePos = { col:10.5, row: 11.5};

let charStartX = 21.5;  // Character start position
let charStartY = 11.5;  // Character start position

//LEVEL DATA OBJECTS 

let level0 = {


    //the tile rules establish which tiles are walkable for the sprite 
    tileRules : [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1], //1
      [0, 0, 0, 2,/*DS sprite*/  1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1], //2
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1], //3
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1], //4     //X Values 
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1], //5
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1], //6
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1], //7
      [0, 0, 1, 1,/* PHONE SPRITE*/  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //13
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //18    //X Values 
    ],
  }


  let level1 = { 
  tileRules : [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
 
  ],
}

  let level2 = { 
  tileRules : [
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], //0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
 
  ],
}


//LEVEL CONTROL VARIABLES 
let levels = [level0,level1,level2];

//the starting level for the sprite 
let currentLevel = 0;

//let graphicsMap;
let tileRules;


// ====== PRELOAD ======
function preload(){

  // the images of each facing direction of the sprite are preloaded onto the canvas so that they are ready to use when called for 
  // TOM FIX: incorrect image path names
  SPRITE_CHARACTER_EAST = loadImage('/images/east.png');
  SPRITE_CHARACTER_WEST = loadImage('/images/West.png');
  SPRITE_CHARACTER_SOUTH = loadImage('/images/South.png');
  SPRITE_CHARACTER_NORTH = loadImage('/images/North.png');

  // refers to the tileMap from earlier ans establishes which images will be displayed in the tiles in the game 
  textures[0] = loadImage("/images/purple.png");
  textures[1] = loadImage("/images/background2.png");
  textures[2] = loadImage("/images/ds.png");

  bg1 = loadImage("/images/background.png");
  bg2 = loadImage("/images/sunset.jpg");
  bg3 = loadImage ("/images/gameboy.png");


  // these sprites will be the ones that the character interacts with to progress the game 
 DSSprite = loadImage("/images/ds.png"); // loads the image for the DS sprite 
PhoneSprite = loadImage("/images/phone.png");

game = loadImage("/images/ds.png"); 

//the DS sprite that appears on the second level 
DS2Sprite = loadImage ("/images/ds.png");

//the image for the falling objects on the second level
phoneImg = loadImage ("/images/phone.png")
}


//  === SETUP=== 
function setup() { 
  createCanvas(theCanvasWidth,theCanvasheight);

s = new Snake();
//food = createVector(random(width),random(height));
pickLocation();

 CurrentBG = bg1
  //loads Graphic data
   loadLevel();

  //the sprite is loaded onto the canvas 
  Ds = new DS (DSSprite, DSPos.col * tileSize, DSPos.row * tileSize);
  Phone = new phone (PhoneSprite, PhonePos.col * tileSize, PhonePos.row *tileSize);

  Ds2 = new DS2 (DS2Sprite, DS2Pos.col * tileSize, DS2Pos.row * tileSize);

  // resizes the character as the file size is small
  SPRITE_CHARACTER_EAST.resize(150,150);
  SPRITE_CHARACTER_WEST.resize(150,150);
  SPRITE_CHARACTER_SOUTH.resize(150,150);
  SPRITE_CHARACTER_NORTH.resize(150,150);

  // TOM FIX: resizing every frame is inefficient; move to setup
  PhoneSprite.resize (200,200);
  DSSprite.resize (200,200);
  phoneImg.resize (100,100);

  game.resize (200,200);
 
  DS2Sprite.resize (200,200);
// the starting background of the game will be the bedroom 

}

const FACING_DIRECTION_SOUTH = 0;
const FACING_DIRECTION_EAST = 1;
const FACING_DIRECTION_WEST = 2;
const FACING_DIRECTION_NORTH = 3;


/* establishes the character class - when no keys are being pressed the player will not be moving and start in the bottom right corner. The characters starting
position will be facing south towards the screen*/

let character = {
//affects the starting position and speed of the character 
// TOM FIX: start aligned to tile grid (instead of 3000,1050)
  startTileX: tileSize * charStartX,
  startTileY: tileSize * charStartY,
  velocityX: 0,
  velocityY: 0,
  //the first skin of the character when no keys have been pressed 
  facingDirection: FACING_DIRECTION_SOUTH,


  /* This is where I am having trouble I believe as the character currently walks on any tile, I have a feeling it may have something to do with the starting co-ordinates we gave our character as I understand were using pixels rather than a grid*/ 
  checkTargetTile(){


    // TOM FIX: use correct position variables (was xPos/yPos which do not exist)
    let tileX = Math.floor(this.startTileX / tileSize);
    let tileY = Math.floor(this.startTileY / tileSize);

    // TOM FIX: derive direction from velocity (dirX/dirY did not exist)
    let nextTileX = tileX + Math.sign(this.velocityX);
    let nextTileY = tileY + Math.sign(this.velocityY);

    // bounds check
    if (
      nextTileX >= 0 && nextTileX < tilesX &&
      nextTileY >= 0 && nextTileY < tilesY
    ) {

      let tile = tileRules[nextTileY][nextTileX];

      // TOM FIX: level progression logic actually triggered
      if (tile === 2){
        currentLevel ++;
        loadLevel();

        drawStage2();
      } 
      /* TOM FIX: support phone tile (value 3) to skip two levels
      else if (tile === 3){
        currentLevel += 2;
        loadLevel();
      }*/

      // TOM FIX: only allow movement onto valid tiles (prevent walking through walls)
      else if (tile !== 0){
        // TOM FIX: move exactly one tile at a time (grid-based movement)
        this.startTileX = nextTileX * tileSize;
        this.startTileY = nextTileY * tileSize;
      }
    }

    // after moving
    this.velocityX = 0;
    this.velocityY = 0;

  }

}

//updates the characters position and velocity when no key is being pressed 
function characterUpdate (){

  // TOM FIX: call collision/tile checking before movement
  character.checkTargetTile();
}

//draws the character in the different positions
function characterDraw() {
  if (character.facingDirection == FACING_DIRECTION_NORTH) {
      image(SPRITE_CHARACTER_NORTH, character.startTileX, character.startTileY);
  } else if (character.facingDirection == FACING_DIRECTION_WEST) {
      image(SPRITE_CHARACTER_WEST, character.startTileX, character.startTileY);
  } else if (character.facingDirection == FACING_DIRECTION_EAST) {
      image(SPRITE_CHARACTER_EAST, character.startTileX, character.startTileY);
  } else if (character.facingDirection == FACING_DIRECTION_SOUTH) {
      image(SPRITE_CHARACTER_SOUTH, character.startTileX, character.startTileY);
  }
}

function Snake (){
  this.x = 0; 
  this.y = 0;
  character.velocityX ;
  character.velocityY ;
  this.total = 0;
  this.tail = []; 

/*this.dir = function (x,y){
 character.velocityX = x;
  character.velocityY = y;
}*/

// tells whether the snake has hit the food or not 
this.eat = function (pos){
   let d = dist(this.x, this.y,pos.x, pos.y );
   if (d < 1){
    this.total++;
    return true;
   }else{
    return false; 
   }
}

  this.update = function(){
    if (this.total===this.tail.length ){
for (let i = 0; i < this.tail.length-1; i++){
  this.tail[i] = this.tail[i+1];
}
    }

    this.tail[this.total-1] = createVector(this.x, this.y);

// creates the tail for the character
    for (let i = 0; i < this.total - 1; i++){
      this.tail[i]= this.tail [i+1];
    }

    this.tail[this.total-1] = createVector(this.x, this.y);

this.x = this.x + character.velocityX * scl; 
this.y = this.y + character.velocityY * scl;

this.x = constrain(this.x, 0, width-scl);
this.y = constrain(this.y, 0, height-scl);

  }
 // continues to show the different positions of the character within the snake class, the character becomes the snake  
  this.show = function (){
   for (let i = 0; i < this.tail.length-1; i++){

  image(game, this.tail[i].x, this.tail[i].y, scl, scl);
}
  image(game, this.x, this.y, scl, scl);
}
}
// ====== STAGE 1 ======
function drawMaze() {
CurrentBG = bg1;
 //tile map is drawn on the screen 
  /*for(let tileX = 0; tileX < tilesX; tileX++) {
    for (let tileY = 0; tileY < tilesY; tileY++){

      tileMap [tileX][tileY].display();
      tileMap[tileX] [tileY].debugGrid(); // dubug method run for each tile 
    }
  }*/
//loop finishes 

characterUpdate();
characterDraw();

Ds.display();
Phone.display(); 

fill("white");
textAlign(CENTER);
textSize(50);
text("Get to the DS to move onto the next stage", width/2, height/2);
}

/*if (character.col === DSPos.col && character.row === DSPos.row) { // if the player interacts with the ds in the column the level progressses by 1 
level1;
transitionStart = millis(); // the transition to the next level starts in milliseconds 
CurrentBG = bg2;// the background changes to the next level 

character.startTileX = 2; // the starting position for the player on the next level
character.startTileY = 5;
}

else if (character.col ===PhonePos.col && character.row === PhonePos.row) { // if the player interacts with the phone the sprite will go back to the start 
currentLevel++;
CurrentBG = bg1;
}*/

// ====== TRANSITION ======
/*function drawTransition() {
characterDraw();

let elapsed = millis() - transitionStart;

fill("white");
textAlign(CENTER);
textSize(24);

if (elapsed < 5000) {
text("Next Stage", width/2, height/2);
} else {
currentLevel++;
}
}
*/

// ====== STAGE 2 ======
function drawStage2() {

 CurrentBG=bg2;

characterUpdate();
characterDraw();

Ds2.display();

fill("white");
textAlign(CENTER);
textSize(18);
text("Avoid the phones and get to the DS", width/2, height/2);

// MORE PHONES (harder)

// affects how often the phones fall anf the speed of them
if (frameCount % 15 === 0) {
for (let i = 0; i < 2; i++) {
phones.push({
x: random(width),
y: -20,
speed: random(3,6) // some phones will fall faster than others
});
}
}

for (let p of phones) {
p.y += p.speed;
image(phoneImg, p.x, p.y);

let px = character.startTileX;
let py = character.startTileY;

if (
p.x < px + 40 &&
p.x + 30 > px &&
p.y < py + 40 &&
p.y + 30 > py
) {

// hit = reset
character.startTileX = 1;
character.startTileY = 1;
phones = [];
}
}
}

//picks a spot in the grid for the DS to appear 
function pickLocation(){
let cols = Math.floor(width/tileSize);
let rows = Math.floor (height/tileSize);

food = createVector (Math.floor(random(cols)) * scl, Math.floor(random(rows)) * scl);
food.mult(tileSize);
}



function drawStage3 (){
 // changes the current background for level 2  
CurrentBG = bg3;

if (s.eat (food)){
  score++;
  pickLocation();
}
image(game, food.x, food.y, scl, scl);

fill(255);
textSize(22);
textAlign(LEFT);
text("DS: " + score + " / 8", 10, 28);

if (score >= 8) {
textAlign(CENTER);
textSize(42);
text("YOU WIN!", screenW / 2, screenH / 2);
noLoop();
}
pop();

// character is drawn on the screen and starting position is changed 
characterUpdate();
characterDraw();


s.update();
s.show();

}

// reset game and score if game is failed by colliding with a phone or going out of bounds, and also resets the snake and phones
function resetGame() {
s = new Snake();
phones = [];
score = 0;
pickLocation();
}

// function for loading the levels 
function loadLevel() {
//Load graphics data
tileRules = levels [currentLevel].tileRules;

  let tileID = 0;//ID for each tile 

  for (let tileX = 0; tileX < tilesX; tileX++) { //loop for tile creation
    tileMap[tileX] = [];
    for (let tileY = 0; tileY < tilesY; tileY++) {


      tileMap[tileX][tileY] = new Tile(textures[texture], tileX, tileY, tileSize, tileID); // New Tile Creayed
      tileID++;
    }
  }
}


// when each key is pressed the character will move and face in different directions
// TOM FIXES
function keyPressed(event) {

  if (event.code == "ArrowLeft") {
    character.velocityX = -10;
    character.velocityY = 0; // FIX
    character.facingDirection = FACING_DIRECTION_WEST;

  } else if (event.code == "ArrowUp") {
    character.velocityX = 0; // FIX
    character.velocityY = -10;
    character.facingDirection = FACING_DIRECTION_NORTH;

  } else if (event.code == "ArrowRight") {
    character.velocityX = 10;
    character.velocityY = 0; // FIX
    character.facingDirection = FACING_DIRECTION_EAST;

  } else if (event.code == "ArrowDown") {
    character.velocityX = 0; // FIX
    character.velocityY = 10;
    character.facingDirection = FACING_DIRECTION_SOUTH;
  }

}


// draws all the variables onto the canvas, learning from previous code. 
function draw() {

image(CurrentBG, 0, 0, width, height);



if (currentLevel === 0) drawMaze(); // ESTABLISHES THE LEVEL PROGRESSION OF THE GAME 
else if (currentLevel === 1) drawStage2();
else if (currentLevel===2) drawStage3 ();

}


// In order to help me understand objects and classes I turned to moodle and used the class content 
class DS {
  constructor (sprite, xPos, yPos) { this.sprite = sprite;
      this.xPos = xPos; // x position
      this.yPos = yPos; // y position
  }
  
  display () {
    image(this.sprite, this.xPos,this.yPos);
  }
}

class phone {
  constructor (sprite,xPos, yPos) {this.sprite = sprite;
    this.xPos = xPos;
    this.yPos = yPos;
  }

  display(){
    image(this.sprite,this.xPos,this.yPos);
  }
}

class DS2 {
  constructor (sprite, xPos, yPos) { this.sprite = sprite;
      this.xPos = xPos; // x position
      this.yPos = yPos; // y position
  }
  
  display () {
    image(this.sprite, this.xPos,this.yPos);
  }
}


//the class for the tiles enbabling the textured to be displayed on screen when called in the drawing function
class Tile{
  constructor (texture, tileX , tileY, tileSize, tileID){
    this.texture = texture;
    this.tileX = tileX;
    this.tileY = tileY;
    this.xPos = tileX * tileSize;
    this.yPos = tileY * tileSize;
    this.tileSize = tileSize;
    this.tileID = tileID;
  }

display(){
  image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize)
}

debugGrid(){ 
}
}

/*It took a lot of trial and error to get the screen transitions to work so I had to google the best way to get objects to interact with each other to advance a level,
I learnt that in order to get obejects to intract there needs to be a sprite class so that the computer can understand the image as a sprite rather than an image. I first started
with simple shapes such as circles to try and get them to change the scene which did work when the shape was on the cursor but I couldn't figure out how to do it on arrow controls. 
I then realsied that there were help sheets on Moodle to help us do this which made sense of everything. 


/* Reference for collisions to change screen https://www.youtube.com/watch?v=l0HoJHc-63Q. */ 
/* Collisions with sprites example to help me understand collision interactions https://editor.p5js.org/mbardin/sketches/VwxMnvRx */


/* The coding train https://www.youtube.com/watch?v=AaGK-fj-BAM */ 
https://www.youtube.com/watch?v=AaGK-fj-BAM