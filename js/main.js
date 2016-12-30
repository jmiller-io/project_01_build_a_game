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

var players = [{
    name: 'red'
}, {
    name: 'green'
}];

var currentPlayer = players[1].name; // starting player is green
$('#playerUp').text(currentPlayer);
var desiredMovePoints = [];

// board
var board = [
             [{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1}],
             [{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null}],
             [{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'green', isSelected:false, isCrowned: false, direction: 1}],
             [{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null}],
             [{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'emptySpace', isSelected:false, isCrowned: false, direction: null}],
             [{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null}],
             [{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1}],
             [{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null},{name: 'red', isSelected:false, isCrowned: false, direction: -1},{name: 'whiteSpace', isSelected:false, isCrowned: false, direction: null}]
];

// Create Game Board
var createGameBoard = function() {
    var $table = jQuery('<table>');
    jQuery($table).attr('id', 'table')
    jQuery($table).appendTo('body')

    // Create Table Rows 8 of them
    for (var i = 0; i < 8; i++) {
        var $tableRow = $('<tr>');
        jQuery($tableRow).text('');
        jQuery($tableRow).appendTo($table)
    }

    // Get Table Rows
    $allTableRows = jQuery('tr');

    // Create Table Cells
    for (var n = 0; n < $allTableRows.length; n++) {
        for (var j = 0; j < 8; j++) {
            var $tableCell = $('<td>');
            jQuery($tableCell).addClass('tableCell');
            jQuery($allTableRows[n]).append($tableCell);
        }
    }

    colorTiles();
    renderGame();

    // Add Event Listener to board
    jQuery($table).on('click', selectMove);
};


// event Listener for board
var selectMove = function(event) {
    if (event.target.nodeName === "TD") {
        return false;
    }

    $target = event.target;
    if (board[$target.dataset.row][$target.dataset.col].name === 'whiteSpace') {
        return false;
    }
    if (board[$target.dataset.row][$target.dataset.col].name === currentPlayer) {
        if (board[$target.dataset.row][$target.dataset.col].isSelected === false) {
            board[$target.dataset.row][$target.dataset.col].isSelected = true;
            if (desiredMovePoints.length <= 2) {
                desiredMovePoints.push($target);
            }
        }
        if (desiredMovePoints.length === 2) {
            moveThaCheckaPieces();
        }
    } else if (board[$target.dataset.row][$target.dataset.col].name === 'emptySpace' && desiredMovePoints.length === 1) {
        board[$target.dataset.row][$target.dataset.col].isSelected = true;
        desiredMovePoints.push($target);
        moveThaCheckaPieces();
    }

    renderGame();
};


// Color in Tiles
var colorTiles = function() {
    // Color in tiles and also create the divs for the checker pieces
    for (var i = 0; i < $allTableRows.length; i++) {
        for (var j = 0; j < $allTableRows[i].children.length; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    $($allTableRows[i].children[j]).addClass('white')
                    var $div = $('<div>')
                    $div.attr({
                      'data-row': i,
                      'data-col': j
                    });
                    $($allTableRows[i].children[j]).append($div)
                } else {
                    $($allTableRows[i].children[j]).addClass('black')
                    var $div = $('<div>')
                    $div.attr({
                      'data-row': i,
                      'data-col': j
                    });
                    $($allTableRows[i].children[j]).append($div)
                }
            }

            if (i % 2 === 1) {
                if (j % 2 === 0) {
                    $($allTableRows[i].children[j]).addClass('black')
                    var $div = $('<div>')
                    $div.attr({
                      'data-row': i,
                      'data-col': j
                    });
                    $($allTableRows[i].children[j]).append($div)
                } else {
                    $($allTableRows[i].children[j]).addClass('white')
                    var $div = $('<div>')
                    $div.attr({
                      'data-row': i,
                      'data-col': j
                    });
                    $($allTableRows[i].children[j]).append($div)
                }
            }
        }
    }
};

// Render Game
var renderGame = function() {
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
                    }
                    if (board[i][j].name === 'red') {
                        $allDivs[k].classList.add('checker');
                        $allDivs[k].style.background = "red";
                    }
                    if (board[i][j].name === 'emptySpace') {
                        $allDivs[k].classList.add('checker');
                    }
                    if (board[i][j].isSelected === true) {
                        $allDivs[k].style.border = "2px solid yellow";
                    }
                    if (board[i][j].name === 'whiteSpace') {
                        $allDivs[k].classList.add('checker');
                    }
                    if (board[i][j].isCrowned === true) {
                        $allDivs[k].style.backgroundImage = "url('images/crown.png')";
                    }
                }
            }
        }
    }
};

var moveThaCheckaPieces = function() {
    // coordinates of origin
    originRow = parseInt(desiredMovePoints[0].dataset.row);
    originCol = parseInt(desiredMovePoints[0].dataset.col);

    // get the coordinates for destination
    destRow = parseInt(desiredMovePoints[1].dataset.row);
    destCol = parseInt(desiredMovePoints[1].dataset.col);

    // create object for reference by destination
    originObject = board[originRow][originCol];

    if (destCol === originCol) {
        console.log('invalid move');
        resetPlay();
        return false;
    }

    // Crowned Checker movement
    if (originObject.isCrowned === true) {
        if (board[destRow][destCol].name === currentPlayer) {
            console.log('same piece');
            resetPlay();
            return false;
        }
        if (destRow - originRow === 1 || destRow - originRow === -1) {
            movePieceCleanUp();
            switchPlayer();
            return;
        }

        if (destRow - originRow === 2) {
            console.log('green jumping forward opponent red backwards');
            middlePieceRow = destRow - 1;
            if (destCol > originCol) {
                middlePieceCol = destCol - 1;
            } else if (destCol < originCol) {
                middlePieceCol = destCol + 1;
            }
            checkForOpponent();
        } else {
            console.log('green is jumping backwards over opponent red forwards');

            if (originRow - destRow === 2) {
                console.log('jumping opponent');
                middlePieceRow = originRow - 1;
                if (destCol > originCol) {
                    middlePieceCol = destCol - 1;
                } else if (destCol < originCol) {
                    middlePieceCol = destCol + 1;
                }
                checkForOpponent();
            }
        }

    } else if (!originObject.isCrowned && currentPlayer === 'green') {
        // if green and not king can't move more than one piece
        console.log('not crowned and green');
        if (board[destRow][destCol].name === currentPlayer) {
            console.log('same piece');
            resetPlay();
            return false;
        }
        if (destRow - originRow === originObject.direction && originCol - destCol === 1 || destRow - originRow === originObject.direction && originCol - destCol === -1) {
            console.log('Valid move. no jump');

            movePieceCleanUp();
            switchPlayer();
        } else if (destRow - originRow === 2) {
            console.log('jumping opponent');
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
        console.log('not crowned and red');
        if (board[destRow][destCol].name === currentPlayer) {
            console.log('same piece');
            resetPlay();
            return false;
        }
        if (destRow - originRow === originObject.direction && originCol - destCol === 1 || destRow - originRow === originObject.direction && originCol - destCol === -1 && board[destRow][destCol].name !== currentPlayer) {
            console.log('Valid move');

            movePieceCleanUp();
            switchPlayer();
        } else if (originRow - destRow === 2) {
            console.log('jumping opponent');
            middlePieceRow = originRow - 1;
            if (destCol > originCol) {
                middlePieceCol = destCol - 1;
            } else if (destCol < originCol) {
                middlePieceCol = destCol + 1;
            }
            checkForOpponent();
        } else {
            resetPlay();
        }
    } else {
        Console.log('you cant jump a white space');
        resetPlay();
    }
};

// function for checking for opponent
var checkForOpponent = function() {
    console.log('checking for opponent to jump');

    $opponent = document.querySelector('[data-row="' + middlePieceRow + '"][data-col="' + middlePieceCol + '"]');

    if (board[middlePieceRow][middlePieceCol].name === 'emptySpace' || board[middlePieceRow][middlePieceCol].name === currentPlayer || board[middlePieceRow][middlePieceCol].name === 'whiteSpace') {
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
        }

        crown();

        for (var l in emptyCheckerSpace) {
            board[originRow][originCol][l] = emptyCheckerSpace[l];
        }

        // Kill Opponent
        for (var m in emptyCheckerSpace) {
            board[middlePieceRow][middlePieceCol][m] = emptyCheckerSpace[m];
        }

        $opponent.style.background = '';
        // Display CleanUp
        desiredMovePoints[1].style.border = '';
        desiredMovePoints = [];
        determineWinner();
        switchPlayer();
    }
};


// function for setting selected object propertie values in array and cleaning up display to make a move
var movePieceCleanUp = function() {
    // remove the properties we don't want to move over
    board[originRow][originCol].isSelected = false;
    // Display Cleanup
    desiredMovePoints[0].style.border = '';
    desiredMovePoints[0].style.background = '';

    // Set object info to the origin properties
    // TODO can we just reassign the object's index in the array?
    // board[destRow][destCol] = originObject
    // couldn't get it to work with an object so i have a for object keys
    for (var k in originObject) {
        board[destRow][destCol][k] = originObject[k];
    }
    crown();
    for (var p in emptyCheckerSpace) {
        board[originRow][originCol][p] = emptyCheckerSpace[p];
    }

    // Display CleanUp
    desiredMovePoints[1].style.border = '';
    desiredMovePoints = [];
};


// function to switch players
var switchPlayer = function() {
    if (currentPlayer === players[0].name) {
        currentPlayer = players[1].name;
    } else if (currentPlayer === players[1].name) {
        currentPlayer = players[0].name;
    }
    document.getElementById('playerUp').textContent = currentPlayer;
};

// function for resetting play
var resetPlay = function() {
    console.log('resetting play');
    desiredMovePoints[0].style.border = '';
    desiredMovePoints[1].style.border = '';
    board[originRow][originCol].isSelected = false;
    board[destRow][destCol].isSelected = false;
    desiredMovePoints = [];
    return false;
};

// Function for determining if checker should be Crowned
var crown = function() {
    console.log('Crown it?');
    // for green checker if it reaches destination row of 7 crown it
    if (currentPlayer === "green" && destRow === 7 || currentPlayer === "red" && destRow === 0) {
        console.log('crown the checker');
        if(!board[destRow][destCol].isCrowned){
            board[destRow][destCol].isCrowned = true;
        }
    }
};


// function for determining winner
var determineWinner = function() {
    var red;
    var green;
    // TODO take a look at foreach, map or reduce
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j].name === "red") {
                red = 1;
            } else if (board[i][j].name === "green") {
                green = 1;
            }
        }
    }

    if (red !== 1) {
        alert('Green Wins!');
    } else if (green !== 1) {
        alert('Red Wins!');
    }
};


createGameBoard();
