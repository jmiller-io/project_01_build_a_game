console.log('Linked!');

// Checker identities
var players = [
  {
    name: 'red'
  },
  {
    name: 'blue'
  }
];

var currentPlayer = players[0];
var selectedChecker;

// board
var board = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
];



















// // Create Game Board

// var createGameBoard = function() {
//   $table = document.createElement('table');
//   $table.setAttribute('id', 'table');
//   document.body.appendChild($table);

//   // Create Table Rows 8 of them
//   for (var i = 0; i < 6 ; i++) {
//     $tableRow = document.createElement('tr');
//     $tableRow.textContent = " ";
//     $table.appendChild($tableRow);
//   };

//   // Get Table Rows
//   $allTableRows = document.querySelectorAll('tr');

//   // Create Table Cells
//   for (var i = 0; i < $allTableRows.length ; i++) {
//       for (var j = 0; j < 7; j++) {
//         $tableCell = document.createElement('td');
//         $tableCell.classList.add('tableCell');
//         $allTableRows[i].appendChild($tableCell);
//       };
//   };


//   // Color in tiles
//   for (var i = 0; i < $allTableRows.length; i++) {
//     console.log('Table Row: ' + $allTableRows[i]);
//     for (var j = 0; j < $allTableRows[i].children.length; j++){
//           if (i % 2 === 0) {
//             if (j % 2 === 0){
//               $allTableRows[i].children[j].classList.add('white');
//               $div = document.createElement('div');
//               $allTableRows[i].children[j].appendChild($div);
//             } else {
//               $allTableRows[i].children[j].classList.add('black');
//               $div = document.createElement('div');
//               $allTableRows[i].children[j].appendChild($div);
//               }
//           };

//           if (i % 2 === 1) {
//             if (j % 2 === 0){
//               $allTableRows[i].children[j].classList.add('black');
//               $div = document.createElement('div');
//               $allTableRows[i].children[j].appendChild($div);
//             } else {
//               $allTableRows[i].children[j].classList.add('white');
//               $div = document.createElement('div');
//               $allTableRows[i].children[j].appendChild($div);
//               }
//           };
//     };
//   };

// renderGame();





// // // Render Game
// // var renderGame = function () {
// // };


// //createGameBoard();
