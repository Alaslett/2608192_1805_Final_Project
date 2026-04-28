
// establish the sprite group .. basically saying leave room for this name to be established 
let SPRITE_CHARACTER_EAST = null;
let SPRITE_CHARACTER_WEST = null;
let SPRITE_CHARACTER_SOUTH = null;
let SPRITE_CHARACTER_NORTH = null;


// this is the variables for the sprites which will impact the scene changes in the game 
let Ds;
let DSSprite;
let DSXPos = 450;
let DSYPos = 300;

let Phone;
let PhoneSprite;
let PhoneXPos = 425; 
let PhoneYPos = 1180;


//the start of the tile variables to 'map out the game' 
let tileMap = []; // creates a map for the game which will help the character interact with objects within the game 
let tilesX = 23; //23 tiles on the x-axis 
let tilesY = 13; // 13 tiles on the y-axis. // both of these values will fit the canvas 
let tileSize = 150; // the number of pixels across each tile. 

//the tiles being 150 pixels each helped us better understand the X and Y positions of the sprites 

//establishes the texture variable which displays the textures on screen
let textures = [];


//LEVEL DATA OBJECTS 

let level0 = {
 

 // each number represents a tile co-ordinate which displays a certain image on each tile, to create our maze for the first level we made the 1's the walkable tiles for our sprite  
graphicsMap :[

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
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //13
],

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
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //13
],


// affects the starting tile of the sprite on the next level 
startTileX: 1,
startTileY: 5
}
let level1 = {
 
graphicsMap :[

  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
  [0, 0, 0, 0,/*DS sprite*/   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], //2
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //4     //X Values 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //5
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //6
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //7
  [0, 0, 0, 0,/* PHONE SPRITE*/  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], //8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //13
],

tileRules : [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //0
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1], //1
  [0, 0, 0, 2,/*DS sprite*/  1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1], //2
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1], //3
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1], //4     //X Values 
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1], //5
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1], //6
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1], //7
  [0, 0, 1, 3,/* PHONE SPRITE*/  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //13
],

startTileX: 8,
startTileY: 2
}

let level2 = {
 
graphicsMap :[

  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
  [0, 0, 0, 0,/*DS sprite*/   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1], //2
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //4     //X Values 
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //5
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //6
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //7
  [0, 0, 0, 0,/* PHONE SPRITE*/  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], //8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //13
],

tileRules : [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //0
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1], //1
  [0, 0, 0, 2,/*DS sprite*/  1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1], //2
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1], //3
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1], //4     //X Values 
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1], //5
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1], //6
  [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1], //7
  [0, 0, 1, 3,/* PHONE SPRITE*/  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //13
],

startTileX: 8,
startTileY: 2
}

//LEVEL CONTROL VARIABLES 
let levels = [level0, level1,level2];

//the starting level for the sprite 
let currentLevel = 0;

let graphicsMap;
let tileRules;

//let scene = 0; 

function preload(){
// the images of each facing direction of the sprite are preloaded onto the canvas so that they are ready to use when called for 
  SPRITE_CHARACTER_EAST = loadImage('/images/East.png');
  SPRITE_CHARACTER_WEST = loadImage('/images/West.png');
  SPRITE_CHARACTER_SOUTH = loadImage('/images/South.png');
  SPRITE_CHARACTER_NORTH = loadImage('/images/North.png');

// these sprites will be the ones that the character interacts with to progress the game 
DSSprite = loadImage("/images/ds.png"); // loads the image for the DS sprite 
PhoneSprite = loadImage("/images/phone.png");


// refers to the tileMap from earlier ans establishes which images will be displayed in the tiles in the game 
textures[0] = loadImage("/images/Background1.png");
textures[1] = loadImage("/images/background2.png");
textures[2] = loadImage("/images/ds.png");
//textures[3] = loadImage("/images/phone.png");*/
}

function setup() {
  createCanvas(3500,2000);

//loads Graphic data
   loadLevel();

//the sprite is loaded onto the canvas 
Ds = new DS (DSSprite, DSXPos, DSYPos);
Phone = new phone (PhoneSprite,PhoneXPos, PhoneYPos);

// resizes the character as the file size is small
  SPRITE_CHARACTER_EAST.resize(200,200);
  SPRITE_CHARACTER_WEST.resize(200,200);
  SPRITE_CHARACTER_SOUTH.resize(200,200);
  SPRITE_CHARACTER_NORTH.resize(200,200);


}

const FACING_DIRECTION_SOUTH = 0;
const FACING_DIRECTION_EAST = 1;
const FACING_DIRECTION_WEST = 2;
const FACING_DIRECTION_NORTH = 3;


/* establishes the character class - when no keys are being pressed the player will not be moving and start in the bottom right corner. The characters starting
position will be facing south towards the screen*/

let character = {
//affects the starting position and speed of the character 
  startTileX: 3000,
  startTileY: 1050,
  velocityX: 0,
  velocityY: 0,
  //the first skin of the character when no keys have been pressed 
  facingDirection: FACING_DIRECTION_SOUTH,


  /* This is where I am having trouble I believe as the character currently walks on any tile, I have a feeling it may have something to do with the starting co-ordinates we gave our character as I understand were using pixels rather than a grid*/ 
checkTargetTile(){
// calculate the position of the current Tile
this.tileX = Math.floor (this.xPos / this.tileSize);
this.tileY = Math.floor (this.yPos / this.tileSize);

// calcuate the tile co-ordinates of the next tile 
let nextTileX = this.tileX + this.dirX;
let nextTileY = this.tileY +this.dirY;

//checks if nextTileX and nextTileY are inbounds 
if (nextTileX >= 0 && //left side of the map
  nextTileX < tilesX && //right side of the map
  nextTileY >= 0 && //top of the map
  nextTileY < tilesY) //bottom of the map
{

 // if the player interacts with the ds image / sprite the level changes, this is also currently not working and I have tried to do this with both a sprite and tile but I still can't figure out what the problem is.
 // I would also like to make it so when the player interacts with the phone the player progresses two levels  
 if (tileRules[nextTileY][nextTileX] ===2){

  currentLevel++;

  loadLevel();
 } 

// if the tile is not equal to 2 the scene does not change
 else if( tileRules[nextTileY][nextTileX]!=2){
  this.tx = nextTileX * tileSize;
  this.ty =nextTileY * tileSize;
      }
    }
  }
}

//updates the characters position and velocity when no key is being pressed 
function characterUpdate (){

  character.startTileX += character.velocityX;
  character.startTileY += character.velocityY;
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

// function for loading the levels 
function loadLevel() {
//Load graphics data
graphicsMap = levels [currentLevel].graphicsMap;
tileRules = levels [currentLevel].tileRules;

  let tileID = 0;//ID for each tile 

  for (let tileX = 0; tileX < tilesX; tileX++) { //loop for tile creation
    tileMap[tileX] = [];
    for (let tileY = 0; tileY < tilesY; tileY++) {

      let texture = graphicsMap[tileY][tileX];

      tileMap[tileX][tileY] = new Tile(textures[texture], tileX, tileY, tileSize, tileID); // New Tile Creayed
      tileID++;
    }
  }
}


// when each key is pressed the character will move and face in different directions
function keyPressed(event) {

  //when the left arrow is pressed the character will face and move left, the character velocity also changes to move 10 pixels  
  if (event.code == "ArrowLeft") {
    character.velocityX = -10;
    character.facingDirection = FACING_DIRECTION_WEST;

  } else if (event.code == "ArrowUp") {
    character.velocityY = -10;
    character.facingDirection = FACING_DIRECTION_NORTH;

  } else if (event.code == "ArrowRight") {
    character.velocityX = 10;
    character.facingDirection = FACING_DIRECTION_EAST;

  } else if (event.code == "ArrowDown") {
    character.velocityY = 10;
    character.facingDirection = FACING_DIRECTION_SOUTH;
  }
}

// when the keys are released the character will stop and face in the same position of the last key pressed 
function keyReleased(event) {
  if (event.code == "ArrowLeft") {
    character.velocityX = 0;
  } else if (event.code == "ArrowUp") {
    character.velocityY = 0;
  } else if (event.code == "ArrowRight") {
    character.velocityX = 0;
  } else if (event.code == "ArrowDown") {
    character.velocityY = 0;
  }
}


// draws all the variables onto the canvas, learning from previous code. 
function draw() {

  background(80);

// tile map is drawn on the screen 
  for(let tileX = 0; tileX < tilesX; tileX++) {
    for (let tileY = 0; tileY < tilesY; tileY++){

      tileMap [tileX][tileY].display();
      tileMap[tileX] [tileY].debugGrid(); // dubug method run for each tile 
    }
  }
//loop finishes 
  tileMap[5] [6].displayMessage()
  
//updates the character throughout the drawing and draws the character onto the screen
 characterUpdate();
  characterDraw();

  //the DS sprite is displayed on the screen and the image is resized so its clear  
   Ds.display();
   DSSprite.resize (150,150);
  
   Phone.display();
   PhoneSprite.resize (200,200);


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

// this is to help understand the different numbers of the tiles and where they begin and end 
let xPadding = 2; 
let yCoordinatePadding = 8;
let yIDPadding = 18; 

strokeWeight (1)
stroke ("black")
fill ("yellow")

textSize (8)
text ("X: " + this.tileX + ", Y:" + this.tileY, this.xPos + xPadding, this.yPos + yCoordinatePadding)

textSize (10)
text("ID:"+ this.tileID, this.xPos+ xPadding, this.yPos + yIDPadding)

// the lines separating the tiles 
noFill();
stroke('white');
rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

}

displayMessage(){
  let xPadding = 2;
  let yPadding = 40;

strokeWeight (1)
stroke ("black")
fill ("white")

textSize (10)

text('Accessed!', this.xPos + xPadding, this.yPos + yPadding );
}


}




/*It took a lot of trial and error to get the screen transitions to work so I had to google the best way to get objects to interact with each other to advance a level,
I learnt that in order to get obejects to intract there needs to be a sprite class so that the computer can understand the image as a sprite rather than an image. I first started
with simple shapes such as circles to try and get them to change the scene which did work when the shape was on the cursor but I couldn't figure out how to do it on arrow controls. 
I then realsied that there were help sheets on Moodle to help us do this which made sense of everything. 


/* Reference for collisions to change screen https://www.youtube.com/watch?v=l0HoJHc-63Q. */ 

/* Collisions with sprites example to help me understand collision interactions https://editor.p5js.org/mbardin/sketches/VwxMnvRx 

/* https://editor.p5js.org/mbardin/sketches/VwxMnvRx */




/*checkTargetTile()
// calculate the position of the current Tile
this.tileX = Math.floor (this.xPos / this.tileSize);
this.tileY = Math.floor (this.yPos / this.tileSize);

// calcuate the tile co-ordinates of the next tile 
let nextTileX = this.tileX + this.dirX;
let nextTileY = this.tileY +this.dirY;

//checks if nextTileX and nextTileY are inbounds 
if (nextTileX >= 0 && //left side of the map
  nextTileX < tilesX && //right side of the map
  nextTileY >= 0 && //top of the map
  nextTileY < tilesY) //bottom of the map
{

  
 if (tileRules[nextTileY][nextTileX]===2 && [nextTileY][nextTileX]==3){
  currentLevel++;

  loadLevel();
 } 

 else if( tileRules[nextTileY][nextTileX]!==0){
  this.tx = nextTileX * tileSize;
  this.ty =nextTileY * tileSize;
}
} */