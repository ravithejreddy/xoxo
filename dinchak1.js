var turn = [0,1,2,3,4,5,6,7,8];

// players ? define players as seperate variables
var players = ['p1','p2'];
function selectedPlayer(){
  players[(Math.floor(Math.random()*players.length))];
  return selectedPlayer();
}
// player chooses input type or assign value
var oChoice = document.getElementById('o');
var xChoice = document.getElementById('x');

// var startGame = true;
// _each()

// display the player choices upon clicking the buttons
oChoice.addEventListener('click', function(){
  p1 = 'o';
  p2 = 'x';
  document.getElementById('p1-choice').innerHTML = "Player1 - o";
  document.getElementById('p2-choice').innerHTML = "Player2 - x";
});
xChoice.addEventListener('click', function(){
  p1 = 'x';
  p2 = 'o';
  document.getElementById('p1-choice').innerHTML = "Player1 - x";
  document.getElementById('p2-choice').innerHTML = "Player2 - o";
});

// get id's of boxes
var box0 = document.getElementById('box-0');

var box1 = document.getElementById('box-1');

var box2 = document.getElementById('box-2');

var box3 = document.getElementById('box-3');

var box4 = document.getElementById('box-4');

var box5 = document.getElementById('box-5');

var box6 = document.getElementById('box-6');

var box7 = document.getElementById('box-7');

var box8 = document.getElementById('box-8');

var nineBoxes = document.getElementsByClassName('nine-boxes');
var foundFlag = false;

// set the player and display the choice on click.
var playerOneTurn = true;
var horizontal = [];
var vertical = [];
var diagnol = [];
var winnerMode1 = ['','','','','','','','',''];
var winnerMode2 = ['','','','','','','','',''];
// var notawin = null;
//
var counter = 0;
var probabilityCaseOne = [['o','o','o','','','','','',''],['','','','o','o','o','','',''],['','','','','','','o','o','o'],
['o','','','o','','','o','',''],['','o','','','o','','','o',''],
['','','o','','','o','','','o'],['o','','','','o','','','','o'],['','','o','','o','','o','','']];

var probabilityCaseTwo =
[['x','x','x','','','','','',''],['','','','x','x','x','','',''],['','','','','','','x','x','x'],
['x','','','x','','','x','',''],['','x','','','x','','','x',''],
['','','x','','','x','','','x'],['x','','','','x','','','','x'],['','','x','','x','','x','','']];

$('.player-turn').on('click', function(){
  if(foundFlag) {
    return;
  }
  // whos turn is it?
  if (playerOneTurn) {
      // var $displayChoice = $('player-turn').append('<span>o</span>').html(this.html);
      $(this).html('o');
      // get the index of the box and put the value in winnerMode array.
      var id = $(this).attr('data-index');
      winnerMode1[id] = 'o';
      console.log(id);
      console.log(winnerMode1);


    for (var i=0;i<probabilityCaseOne.length;i++){
        // console.log(probabilityCaseOne[i]);
      var counter =0;
      for(var j=0;j<probabilityCaseOne[i].length;j++){
          /*console.log("probabilityCaseOne[i]");
          console.log("winnerMode1");
          console.log("probabilityCaseOne[i][j]");
          console.log("winnerMode1[k]");*/
        if(probabilityCaseOne[i][j] === 'o'){
          if(probabilityCaseOne[i][j]=== winnerMode1[j]){
              // console.log('found o');
            counter ++;
          }
          if (counter === 3 ){
              console.log(counter);
              console.log(probabilityCaseOne[i]+'Found a win match');
              foundFlag = true;
              break;
          }
        }
        if(foundFlag == true){
          // $('.nine-boxes').addClass('disable');
          break;
        }
      }
    }
  }
  else {
    $(this).html('x');
    // get the index of the box and put the value in winnerMode array.
    var id = $(this).attr('data-index');
      winnerMode1[id] = 'x';
    //console.log(id);
    //console.log(winnerMode2);var foundFlag = false;
    // var foundFlag = false;
    for (var i=0;i<probabilityCaseTwo.length;i++){
      // console.log(probabilityCaseOne[i]);
      var counter = 0;
      for(var j=0;j<probabilityCaseTwo[i].length;j++){
        /*console.log("probabilityCaseOne[i]");
        console.log("winnerMode1");
        console.log("probabilityCaseOne[i][j]");
        console.log("winnerMode1[k]");*/
        if(probabilityCaseTwo[i][j] === 'x'){
          if(probabilityCaseTwo[i][j]=== winnerMode1[j]){
            // console.log('found o');
            counter ++;
          }
          if (counter === 3 ){
            console.log(counter);
            console.log(probabilityCaseTwo[i]+'Found a win match');
            foundFlag = true;
            break;
          }
        }
        if(foundFlag == true){
          // $('.nine-boxes').addClass('disable');
          break;
        }
      }
    }
  }
    // set turn to other player
  playerOneTurn = !playerOneTurn;
});
