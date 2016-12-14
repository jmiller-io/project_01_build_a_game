console.log('Linked!');

// Checker identities
//var greenChecker = 1;
var greenChecker = {
  name: 'green',
  isSelected: false,
  isCrowned: false
};
//var redChecker = 2;
var redChecker = {
  name: 'red',
  isSelected: true,
  isCrowned: false
};

var emptyCheckerSpace = {
  name: 'emptySpace',
  isSelected: false,
  isCrowned: false
};

var players = [
  {
    name: 'red'
  },
  {
    name: 'green'
  }
];

var currentPlayer = players[0].name; // starting player is red
document.getElementById('playerUp').textContent = currentPlayer;
var nextPlayer;
var desiredMovePoints = [];

// board
var board = [[{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false}],
             [{name: 'green', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false}],
             [{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false}],
             [{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false}],
             [{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false}],
             [{name: 'red', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false}],
             [{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false}],
             [{name: 'red', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'whiteSpace', isSelected:false, isCrowned: false}]
];

// Create Game Board
var createGameBoard = function() {
  var $table = document.createElement('table');
  $table.setAttribute('id', 'table');
  document.body.appendChild($table);

  // Create Table Rows 8 of them
  for (var i = 0; i < 8 ; i++) {
    var $tableRow = document.createElement('tr');
    $tableRow.textContent = " ";
    $table.appendChild($tableRow);
  };

  // Get Table Rows
  $allTableRows = document.querySelectorAll('tr');

  // Create Table Cells
  for (var i = 0; i < $allTableRows.length ; i++) {
      for (var j = 0; j < 8; j++) {
        var $tableCell = document.createElement('td');
        $tableCell.classList.add('tableCell');
        $allTableRows[i].appendChild($tableCell);
      };
  };

  colorTiles();
  renderGame();

  // Add Event Listener to board
  $table.addEventListener('click', moveChecker);
  //$table.addEventListener('dblclick', moveChecker);
};

// event Listener for board
var moveChecker = function (event) {
  $target = event.target;
  if (board[$target.dataset.row][$target.dataset.col].name === 'whiteSpace') {
    console.log('dont click me');
    return false;
  };
  if (board[$target.dataset.row][$target.dataset.col].name === currentPlayer) {
    if (board[$target.dataset.row][$target.dataset.col].isSelected === false && board[$target.dataset.row][$target.dataset.col].name !== 'whiteSpace' ) {
      console.log (" this item has not been previously selected");
      console.log('selecting it');
      board[$target.dataset.row][$target.dataset.col].isSelected = true;
      if (desiredMovePoints.length <= 2) {
          desiredMovePoints.push($target);
      };
    };


    if (desiredMovePoints.length === 2) {
        console.log('origin: ' + desiredMovePoints[0].name + 'destination: ' + desiredMovePoints[1].name);
        moveThaCheckaPieces();
    };
  } else if (board[$target.dataset.row][$target.dataset.col].name === 'emptySpace' && desiredMovePoints.length === 1) {
      console.log('selecting the emptySpace');
      board[$target.dataset.row][$target.dataset.col].isSelected = true;
      desiredMovePoints.push($target);
      moveThaCheckaPieces();
  } else {
    console.log(currentPlayer + " didnt select their color checker" );
  };

renderGame();
};


// Color in Tiles

var colorTiles = function () {
  // Color in tiles and also create the divs for the checker pieces
  for (var i = 0; i < $allTableRows.length; i++) {
    console.log('Table Row: ' + $allTableRows[i]);
    for (var j = 0; j < $allTableRows[i].children.length; j++){
          if (i % 2 === 0) {
            if (j % 2 === 0){
              $allTableRows[i].children[j].classList.add('white');
              var $div = document.createElement('div');
              $div.dataset.row=i;
              $div.dataset.col=j;
              $allTableRows[i].children[j].appendChild($div);
            } else {
              $allTableRows[i].children[j].classList.add('black');
              var $div = document.createElement('div');
              $div.dataset.row=i;
              $div.dataset.col=j;
              $allTableRows[i].children[j].appendChild($div);
              }
          };

          if (i % 2 === 1) {
            if (j % 2 === 0){
              $allTableRows[i].children[j].classList.add('black');
              var $div = document.createElement('div');
              $div.dataset.row=i;
              $div.dataset.col=j;
              $allTableRows[i].children[j].appendChild($div);
            } else {
              $allTableRows[i].children[j].classList.add('white');
              var $div = document.createElement('div');
              $div.dataset.row=i;
              $div.dataset.col=j;
              $allTableRows[i].children[j].appendChild($div);
              };
          };
    };
  };
};

// Render Game
var renderGame = function () {
  //Get all divs to set element Id
  $allDivs = document.querySelectorAll('div');
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
       var row = i;
       //'[data-row="' + i + '"]';
       var col = j;
       //'[data-col="' + j + '"]';
       for (var k = 0; k < $allDivs.length; k++) {
        if ($allDivs[k].dataset.row == i && $allDivs[k].dataset.col == j) {
          if (board[i][j].name === 'green') {
            $allDivs[k].classList.add('checker');
            $allDivs[k].style.background = "green";
          };
          if (board[i][j].name === 'red') {
            $allDivs[k].classList.add('checker');
            $allDivs[k].style.background = "red";
          };
          if (board[i][j].name === 'emptySpace') {
            $allDivs[k].classList.add('checker')
          }
          if (board[i][j].isSelected === true) {
            $allDivs[k].style.border = "2px solid yellow";
          }
          if (board[i][j].name === 'whiteSpace') {
            $allDivs[k].classList.add('checker')
          }
        };
       };
    };
  };
};

var moveThaCheckaPieces = function () {

  // The Origin
  desiredMovePoints[0];

  // coordinates of origin
  originRow = desiredMovePoints[0].dataset.row;
  originCol = desiredMovePoints[0].dataset.col;

  // get the coordinates for destination
  destRow = desiredMovePoints[1].dataset.row;
  destCol = desiredMovePoints[1].dataset.col;

  // create object for reference by destination
  originObject = board[originRow][originCol];

  if (originObject.isCrowned === false && originRow === destRow) {
    console.log('not permitted piece is not Crowned');
    desiredMovePoints[0].style.border = '';
    desiredMovePoints[1].style.border = '';
    board[originRow][originCol].isSelected = false;
    board[destRow][destCol].isSelected = false;
    desiredMovePoints = [];
    return false;
  }

  // remove the properties we don't want to move over
  board[originRow][originCol].isSelected = false;
  // Display Cleanup
  desiredMovePoints[0].style.border = '';
  desiredMovePoints[0].style.background = '';

  // The destination
  //desiredMovePoints[1]

  // Set object info to the origin properties
  board[destRow][destCol].name = originObject.name;
  board[destRow][destCol].isSelected = originObject.isSelected;
  board[destRow][destCol].isCrowned = originObject.isCrowned;

  // Programmatically this works but I need something in here to remove classes for green checker red checker etc
  // Remove the classes associated with div. since we're not rebuilding the divs.
  // The classes stick
  board[originRow][originCol].name = emptyCheckerSpace.name;
  board[originRow][originCol].isSelected = emptyCheckerSpace.isSelected;
  board[originRow][originCol].isCrowned = emptyCheckerSpace.isCrowned;
  // Display CleanUp
  desiredMovePoints[1].style.border = '';
  desiredMovePoints = [];
  switchPlayer();
};

// function to determine switch player
var switchPlayer = function () {
  if (currentPlayer === players[0].name) {
    currentPlayer = players[1].name;
  } else if (currentPlayer === players[1].name) {
    currentPlayer = players[0].name;
  };
  document.getElementById('playerUp').textContent = currentPlayer;
};


createGameBoard();
