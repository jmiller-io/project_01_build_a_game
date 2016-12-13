console.log('Linked!');

// Checker identities
//var greenChecker = 1;
var greenChecker = {
  name: 'green',
  isSelected: true,
  isCrowned: false
};
//var redChecker = 2;
var redChecker = {
  name: 'red',
  isSelected: true,
  isCrowned: false
};

var currentPlayer = greenChecker;
var previousPlayer;
var selectedChecker;

// board
var board = [[null,'green',null,'green',null,'green',null,'green'],
             ['green',null,'green',null,'green',null,'green',null],
             [null,'green',null,'green',null,'green',null,'green'],
             [null,null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null,null],
             ['red',null,'red',null,'red',null,'red',null],
             [null,'red',null,'red',null,'red',null,'red'],
             ['red',null,'red',null,'red',null,'red',null]
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


  // Color in tiles
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
$table.addEventListener('click', selectChecker);
//$table.addEventListener('dblclick', moveChecker);

};



  // event Listener for board
var selectChecker = function (event) {
  console.log('clicked');
  console.log(event.target);
  if (event.target.classList.contains())
  event.target.classList.add('selected');
  //selectedChecker  = document.getElementById(event.target);
  //console.log(selectedChecker);
  //selectedChecker.classList.add('selected');
  //console.log(event.currentTarget);

};

// Render Game
var renderGame = function () {
  //Get all divs to set element Id

  $allDivs = document.querySelectorAll('div');
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      console.log('going through rows')
       var row = i;
       //'[data-row="' + i + '"]';
       var col = j;
       //'[data-col="' + j + '"]';
       for (var k = 0; k < $allDivs.length; k++) {
        if ($allDivs[k].dataset.row == i && $allDivs[k].dataset.col == j) {
            console.log('matches')
          if (board[i][j] === 'green') {
            $allDivs[k].classList.add('greenChecker');
          };
          if (board[i][j] === 'red') {
            $allDivs[k].classList.add('redChecker');
          }
        };
       };
    };
  };
};

// Move function
var moveChecker = function () {

}




createGameBoard();
