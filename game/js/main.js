console.log('Linked!');

// Checker identities
var greenChecker = 1;
var redChecker = 2;

var currentPlayer = greenChecker;
var previousPlayer;

// board
var board = [0,1,0,1,0,1,0,1,
             1,0,1,0,1,0,1,0,
             0,1,0,1,0,1,0,1,
             0,0,0,0,0,0,0,0,
             0,0,0,0,0,0,0,0,
             2,0,2,0,2,0,2,0,
             0,2,0,2,0,2,0,2,
             2,0,2,0,2,0,2,0];

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
              $allTableRows[i].children[j].appendChild($div);
            } else {
              $allTableRows[i].children[j].classList.add('black');
              $div = document.createElement('div');
              $allTableRows[i].children[j].appendChild($div);
              }
          };

          if (i % 2 === 1) {
            if (j % 2 === 0){
              $allTableRows[i].children[j].classList.add('black');
              $div = document.createElement('div');
              $allTableRows[i].children[j].appendChild($div);
            } else {
              $allTableRows[i].children[j].classList.add('white');
              $div = document.createElement('div');
              $allTableRows[i].children[j].appendChild($div);
              }
          };
    };
  };

renderGame();

// Add Event Listener to board
$table.addEventListener('click', selectChecker);

};



  // event Listener for board
var selectChecker = function (event) {
  console.log('clicked');
  console.log(event.target);
  var selectedChecker  = document.getElementById(event.target.id);
  selectedChecker.classList.add('selected');
  console.log(event.currentTarget);

};

// Adds checker pieces to game board using DOM
 var createCheckerPieces = function () {
   // Red Pieces
   for ( var i = 0 ; i < 3 ; i++){
     $allTableRowCells = $allTableRows[i].children;
     for (var j = 0; j < $allTableRowCells.length; j++){

       if ($allTableRowCells[j].classList.contains('black')) {
           $allTableRowCells[j].classList.add('redChecker')
       } else {
         console.log('its a white tile')
       };
     };
   };

   // green Pieces
   for ( var i = 5 ; i < 8 ; i++){
       $allTableRowCells = $allTableRows[i].children;
       for (var j = 0; j < $allTableRowCells.length; j++){

         if ($allTableRowCells[j].classList.contains('black')) {
          $allTableRowCells[j].classList.add('greenChecker');
         } else {
           console.log('its a white tile')
         };
       };
     };
 };


24-38



 // Render Game
var renderGame = function () {
  //Get all divs to set element Id
  $allDivs = document.querySelectorAll('div');
  for (var i = 0; i < $allDivs.length; i++) {
    $allDivs[i].setAttribute('id', i);
  };

// Red and Green Checker Placement
  for (var i = 0; i < board.length; i++) {
   if ( board[i] === 1 ) {
           console.log('it green')
           document.getElementById(i).classList.add('redChecker');
         } else if (board[i] === 2) {
      document.getElementById(i).classList.add('greenChecker');
    } else {
      document.getElementById(i).classList.add('emptyTileCells')
    }
  };
};


var addClasstoEmptyBlackTiles = function () {

}

createGameBoard();
