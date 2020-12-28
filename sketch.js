var canvas, backgroundImage;

var gamestate = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(800,400);
  database = firebase.database();
  game = new gs();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gamestate === 1){
    clear();
    game.play();
  }
}