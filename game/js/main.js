console.log('Linked!');

// Checker identities
var greenChecker = {
  name: 'green',
  isSelected: false,
  isCrowned: false,
  direction: 1
};

var redChecker = {
  name: 'red',
  isSelected: true,
  isCrowned: false,
  direction: -1
};

var emptyCheckerSpace = {
  name: 'emptySpace',
  isSelected: false,
  isCrowned: false,
  direction: null
};

var players = [
  {
    name: 'red'
  },
  {
    name: 'green'
  }
];

var currentPlayer = players[1].name; // starting player is green
document.getElementById('playerUp').textContent = currentPlayer;
var desiredMovePoints = [];

// board
var board = [[{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1}],
             [{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null}],
             [{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: true, direction: 1},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1}],
             [{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null}],
             [{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null}],
             [{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null}],
             [{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1}],
             [{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null}]
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
  $table.addEventListener('click', selectMove);
};

// event Listener for board
var selectMove = function (event) {
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
       var col = j;
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
          };
          if (board[i][j].isSelected === true) {
            $allDivs[k].style.border = "2px solid yellow";
          };
          if (board[i][j].name === 'whiteSpace') {
            $allDivs[k].classList.add('checker')
          };
          if (board[i][j].isCrowned === true){
            $allDivs[k].style.backgroundImage = "url('images/crown.png')"
          }
        };
       };
    };
  };
};

var moveThaCheckaPieces = function () {
  console.log('running move thachecka pieces')

  // coordinates of origin
  originRow = parseInt(desiredMovePoints[0].dataset.row);
  originCol = parseInt(desiredMovePoints[0].dataset.col);

  // get the coordinates for destination
  destRow = parseInt(desiredMovePoints[1].dataset.row);
  destCol = parseInt(desiredMovePoints[1].dataset.col);

  // create object for reference by destination
  originObject = board[originRow][originCol];


  // if green and not king can't move more than one piece
  if (!originObject.isCrowned && currentPlayer === 'green') {
    console.log('not crowned and green');
    if (destRow - originRow === originObject.direction && originCol - destCol === 1 || destRow - originRow === originObject.direction && originCol - destCol === -1) {
      console.log('Valid move. no jump');

      objManipulation();
      switchPlayer();
    } else if (destRow - originRow === 2) {
        console.log('jumping opponent')
        middlePieceRow = destRow - 1;
        if (destCol > originCol) {
          middlePieceCol = destCol - 1;
        } else if (destCol < originCol) {
          middlePieceCol = destCol + 1;
        }
        checkForOpponent();
      } else {
        resetPlay();
      }
  } else if (!originObject.isCrowned && currentPlayer === 'red') {
    // TODO can we use object.direction as -1 +1 or something?
    /// TODO DONE
    //red is -1
      console.log('not crowned and red')
      if (destRow - originRow === originObject.direction && originCol - destCol === 1 || destRow - originRow === originObject.direction && originCol - destCol === -1) {
      console.log('Valid move')

      objManipulation();
      switchPlayer();
    } else if (originRow - destRow === 2) {
       console.log('jumping opponent')
        middlePieceRow = originRow - 1;
        if (destCol > originCol) {
          middlePieceCol = destCol - 1;
        } else if (destCol < originCol) {
          middlePieceCol = destCol + 1;
        }
        checkForOpponent();
      } else {
        resetPlay();
      };
  } else {
    Console.log('you cant jump a white space');
    resetPlay();
  };
};

// function for crowned checker movement
var crownMove = function () {
  if (originObject.isCrowned === true){
    objManipulation();
    checkForOpponent();
  }
};

// function for checking for opponent
var checkForOpponent = function () {
  console.log ('checking for opponent to jump');

        $opponent = document.querySelector('[data-row="' + middlePieceRow + '"][data-col="' + middlePieceCol + '"]');

        if(board[middlePieceRow][middlePieceCol].name === 'emptySpace' || board[middlePieceRow][middlePieceCol].name === currentPlayer || board[middlePieceRow][middlePieceCol].name === 'whiteSpace') {
          console.log('no good');
          console.log('not a valid move');
          resetPlay();
        } else {
          console.log('opponent lives here');
          // remove the properties we don't want to move over
          board[originRow][originCol].isSelected = false;
          // Display Cleanup
          desiredMovePoints[0].style.border = '';
          desiredMovePoints[0].style.background = '';

          // Set object info to the origin properties
          for (var k in originObject) {
            board[destRow][destCol][k] = originObject[k];
          };

          crown();

          for (var k in emptyCheckerSpace) {
            board[originRow][originCol][k] = emptyCheckerSpace[k];
          };

          // Kill Opponent
          for (var k in emptyCheckerSpace) {
            board[middlePieceRow][middlePieceCol][k] = emptyCheckerSpace[k];
          };

          $opponent.style.background = '';
          // Display CleanUp
          desiredMovePoints[1].style.border = '';
          desiredMovePoints = [];
          determineWinner();
          switchPlayer();
        }
};


// function for origin and destination checker array object manipulation
var objManipulation = function () {
// remove the properties we don't want to move over
      board[originRow][originCol].isSelected = false;
      // Display Cleanup
      desiredMovePoints[0].style.border = '';
      desiredMovePoints[0].style.background = '';

      // The destination
      //desiredMovePoints[1]

      // Set object info to the origin properties
      // TODO can we just reassign the object's index in the array?
      // board[destRow][destCol] = originObject
      for (var k in originObject) {
            board[destRow][destCol][k] = originObject[k];
      };
      crown();
      for (var k in emptyCheckerSpace) {
            board[originRow][originCol][k] = emptyCheckerSpace[k];
      };

      // Display CleanUp
      desiredMovePoints[1].style.border = '';
      desiredMovePoints = [];
}


// function to determine switch player
var switchPlayer = function () {
  if (currentPlayer === players[0].name) {
    currentPlayer = players[1].name;
  } else if (currentPlayer === players[1].name) {
    currentPlayer = players[0].name;
  };
  document.getElementById('playerUp').textContent = currentPlayer;
};

// function for resetting play
var resetPlay = function () {
    console.log('resetting play')
      desiredMovePoints[0].style.border = '';
      desiredMovePoints[1].style.border = '';
      board[originRow][originCol].isSelected = false;
      board[destRow][destCol].isSelected = false;
      desiredMovePoints = [];
      return false;
}

// Function for determining if checker should be Crowned
var crown = function() {
  console.log('Crown it?');
  // for green checker if it reaches destination row of 7 crown it
  if (currentPlayer === "green" && destRow === 7 || currentPlayer === "red" && destRow === 0) {
    console.log('crown the checker');
    board[destRow][destCol].isCrowned = true;
  };
};


// function for determining winner
var determineWinner = function () {
  var red;
  var green;
  // TODO take a look at foreach, map or reduce
  for(var i = 0; i < board.length; i++){
    for (var j = 0; j <board[i].length; j++) {
      if (board[i][j].name === "red"){
        red = 1;
      } else if (board[i][j].name === "green") {
        green = 1;
      };
    };
  };

  if (red !== 1) {
    alert('Green Wins!');
  } else if (green !== 1) {
    alert('Red Wins!');
  };
};

createGameBoard();
