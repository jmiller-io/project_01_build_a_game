console.log('Linked!');

// Checker identities
var whiteChecker = 1;
var blackChecker = 2;

// Create Game Board

var gboardArr = [];

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

        // console.log('hi')
        // if ( i % 2 === 0 && j % 2 === 0 ){
        //   console.log('Even row. even cell');
        //   $allTableRows[i].children[j].classList.add('evenTableCell');
        //   $allTableRows[i].children[j].classList.add('white');
        // };
        // if ( i % 2 === 0 && j % 2 === 1 ){
        //   console.log ($allTableRows[i] +  " row even cell odd");
        //   $allTableRows[i].children[j].classList.add('oddTableCell');
        //   $allTableRows[i].children[j].classList.add('black');
        // };
        // if (i % 2 === 1 && j % 2 === 0) {
        //   console.log ($allTableRows[i] + " row odd cell even")
        //   $allTableRows[i].children[j].classList.add('oddTableCell');
        //   $allTableRows[i].children[j].classList.add('black');
        // };
        //  if ( i % 2 === 1 && j % 2 === 1 ) {
        //    console.log ('odd row odd cell');
        //    $allTableRows[i].children[j].classList.add('oddTableCell');
        //    $allTableRows[i].children[j].classList.add('white');
        //  }
    };
  };

  // Create the checkers


};

// Add the checkers to the board

firstTwoRows =









createGameBoard();
