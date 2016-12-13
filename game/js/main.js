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
  name: 'null',
  isSelected: false,
  isCrowned: false
};

var currentPlayer = greenChecker;
var previousPlayer;
var desiredMovePoints = [];

// board
var board = [[{name: 'null', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false}],
             [{name: 'green', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false}],
             [{name: 'null', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'green', isSelected:false, isCrowned: false}],
             [{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false}],
             [{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false}],
             [{name: 'red', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false}],
             [{name: 'null', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false}],
             [{name: 'red', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false},{name: 'red', isSelected:false, isCrowned: false},{name: 'null', isSelected:false, isCrowned: false}]
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
  if (board[$target.dataset.row][$target.dataset.col].isSelected === false && board[$target.dataset.row][$target.dataset.col].name !== null) {
      console.log (" this checker is not selected");
      console.log('selecting it')
      board[$target.dataset.row][$target.dataset.col].isSelected = true;
      if (desiredMovePoints.length <= 2) {
          desiredMovePoints.push($target);
      }
  }

  if (board[$target.dataset.row][$target.dataset.col].isSelected === false && board[$target.dataset.row][$target.dataset.col].name === null) {
      console.log ('destination is a free space');
      desiredMovePoints.push($target);
      console.log('origin:' + desiredMovePoints[0] + 'destination: ' + desiredMovePoints[2]);

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
            $allDivs[k].classList.add('greenChecker');
          };
          if (board[i][j].name === 'red') {
            $allDivs[k].classList.add('redChecker');
          }
          if (board[i][j].isSelected === true) {
            $allDivs[k].classList.add('selected');
          }
        };
       };
    };
  };
};




createGameBoard();
