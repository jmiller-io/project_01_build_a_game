console.log('Linked!');

// Checker identities
var whiteChecker = 1;
var blackChecker = 2;

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
            } else {
              $allTableRows[i].children[j].classList.add('black');
              }
          };

          if (i % 2 === 1) {
            if (j % 2 === 0){
              $allTableRows[i].children[j].classList.add('black');
            } else {
              $allTableRows[i].children[j].classList.add('white');
              }
          };
    };
  };



};

// // Create red checker pieces
// var createCheckerPieces = function() {
//   // Red first
//   for (var i = 0; i < 12 ; i++){
//     $newCheckerPiece = document.createElement('div');
//     $newCheckerPiece.classList.add('redChecker');
//   };
// }

//Get the red checkers
// $redCheckers = document.querySelectorAll('.redChecker');

//

$allTableRows = document.querySelectorAll('tr');

var createCheckerPieces = function () {
  // Red Pieces
  for ( var i = 0 ; i < 3 ; i++){
    $allTableRowCells = $allTableRows[i].children;
    for (var j = 0; j < $allTableRowCells.length; j++){

      if ($allTableRowCells[j].classList.contains('black')) {
        $div = document.createElement('div');
        $div.classList.add('redChecker');
        $allTableRowCells[j].appendChild($div);
      } else { console.log('its a white tile')}
    };
  };

  // White Pieces
for ( var i = 5 ; i < 8 ; i++){
    $allTableRowCells = $allTableRows[i].children;
    for (var j = 0; j < $allTableRowCells.length; j++){

      if ($allTableRowCells[j].classList.contains('black')) {
        $div = document.createElement('div');
        $div.classList.add('greenChecker');
        $allTableRowCells[j].appendChild($div);
      } else { console.log('its a white tile')}
    };
  };


}


createGameBoard();
