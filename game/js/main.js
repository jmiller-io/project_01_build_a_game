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

var currentPlayer = greenChecker;
var previousPlayer;
var desiredMovePoints = [];

// board
var board = [[{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false}],
             [{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false}],
             [{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false}],
             [{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false}],
             [{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false}],
             [{name: 'red', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false}],
             [{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false}],
             [{name: 'red', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'emptySpace', isSelected:false, isCrowned: false}]
];

// Create Game Board

var createGameBoard = function() {
  $table = document.createElement('table');
  $table.setAttribute('id', 'table');
  document.body.appendChild($table);

  // Create Table Rows 8 of them
  for (var i = 0; i < 8 ; i++) {
    $tableRow = document.createElement('tr');
    $tableRow.textContent = " ";
    $table.appendChild($tableRow);
  };

  // Get Table Rows
  $allTableRows = document.querySelectorAll('tr');

  // Create Table Cells
  for (var i = 0; i < $allTableRows.length ; i++) {
      for (var j = 0; j < 8; j++) {
        $tableCell = document.createElement('td');
        $tableCell.classList.add('tableCell');
        $allTableRows[i].appendChild($tableCell);
      };
  };


  // Color in tiles and also create the divs for the checker pieces
  for (var i = 0; i < $allTableRows.length; i++) {
    console.log('Table Row: ' + $allTableRows[i]);
    for (var j = 0; j < $allTableRows[i].children.length; j++){
          if (i % 2 === 0) {
            if (j % 2 === 0){
              $allTableRows[i].children[j].classList.add('white');
              $div = document.createElement('div');
              $div.dataset.row=i;
              $div.dataset.col=j;
              $allTableRows[i].children[j].appendChild($div);
            } else {
              $allTableRows[i].children[j].classList.add('black');
              $div = document.createElement('div');
              $div.dataset.row=i;
              $div.dataset.col=j;
              $allTableRows[i].children[j].appendChild($div);
              }
          };

          if (i % 2 === 1) {
            if (j % 2 === 0){
              $allTableRows[i].children[j].classList.add('black');
              $div = document.createElement('div');
              $div.dataset.row=i;
              $div.dataset.col=j;
              $allTableRows[i].children[j].appendChild($div);
            } else {
              $allTableRows[i].children[j].classList.add('white');
              $div = document.createElement('div');
              $div.dataset.row=i;
              $div.dataset.col=j;
              $allTableRows[i].children[j].appendChild($div);
              }
          };
    };
  };

renderGame();

// Add Event Listener to board
$table.addEventListener('click', moveChecker);
//$table.addEventListener('dblclick', moveChecker);

};



  // event Listener for board
var moveChecker = function (event) {
  console.log('clicked');
  console.log(event.target);
  $target = event.target;
  if (board[$target.dataset.row][$target.dataset.col].isSelected === false ) {
      console.log (" this item is not selected");
      console.log('selecting it')
      board[$target.dataset.row][$target.dataset.col].isSelected = true;
      if (desiredMovePoints.length <= 2) {
          desiredMovePoints.push($target);
      }
  }

  if (desiredMovePoints.length === 2) {
      console.log('origin:' + desiredMovePoints[0].name + 'destination: ' + desiredMovePoints[1].name);
      moveThaCheckaPieces();















    }

renderGame();
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
        };
       };
    };
  };
};

var moveThaCheckaPieces = function () {

  // get the coordinates
  destRow = desiredMovePoints[1].dataset.row;
  destCol = desiredMovePoints[1].dataset.col;

  if (board[destRow][destCol].name !== 'emptySpace') {
    console.log('You cant jump on opponent. you lost your turn');
    desiredMovePoints[0].style.border = '';
    desiredMovePoints = [];
    return true;
    } else {

    // The Origin
    desiredMovePoints[0]

    originRow = desiredMovePoints[0].dataset.row;
    originCol = desiredMovePoints[0].dataset.col;

    // remove the properties we don't want to move over
    board[originRow][originCol].isSelected = false;
    // create object for reference by destination
    originObject = board[originRow][originCol];
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
    }
};


createGameBoard();
