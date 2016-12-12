console.log('Linked!');


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
        console.log('hi')
        if ( i % 2 === 0 && j % 2 === 0 ){
          $allTableRows[i].children[j].classList.add('evenTableCell');
        }
        else if ( i % 2 === 0 && j % 2 === 1 ){
          $allTableRows[i].children[j].classList.add('oddTableCell');
        };
        if (i % 2 === 1 && j % 2 === 0) {
          $allTableRows[i].children[j].classList.add('oddTableCell');
        } else {$allTableRows[i].children[j].classList.add('evenTableCell');}
    };
  };
};

createGameBoard();
