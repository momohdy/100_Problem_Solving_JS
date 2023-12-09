// Earlier this year I was in a contest on HackerRank which included a code golf-style challenge to write a regular expression of 50 or fewer characters that could determine whether or not a tic tac toe (also known as noughts and crosses or Xs and Os) board had a winner.

// I'm not going to force you to keep your regex at or under 50 characters here, or even force you to use a regex if you really don't want to (though if you really don't want to write a regex, why don't you do one of the other tic tac toe katas here instead?), but why not challenge yourself, maybe learn something, and perhaps earn some Best Practices/Clever honor points for yourself as well?

// Your function will receive a string of nine "X", "O", and/or "-" characters representing the state of a tic tac toe board, for example the string

// "X-OXXXO-O"
// would represent the board

// X-O
// XXX
// O-O
// where player X has won by getting three in a row horizontally on the middle row.

// Your function needs to return True/true/TRUE 
//(depending on the language you're using) 
// if either the X or the O player has won the game by getting three in a row vertically,
//  horizontally, or diagonally; or False/false/FALSE if there is no winner.


// A few more examples:

// "---------" - False - no one has even made a move yet!

// "XOOOXXXXO" - False - no one got three in a row here.

// "OXO-XOX-O" - True - player O won by getting three in a row vertically in the third column.

// Note: Occasionally one of the random boards in the Test Suite
//  will have two three-in-a-rows instead of one or none,
//  and this still counts as a winning board.
//  If the two three-in-a-rows belong to the same player, 
// this just means that the second player played so badly that the first player's fifth 
// and final move created two three-in-a-rows.
//  If the two three-in-a-rows belong to different players, 
// this just means that although one player won the game,
//  afterward (as sometimes happens in real life) 
// the other player made their mark in another square anyway, 
// just because even though they already lost, they feel better doing that. :-)

// Have fun!

function regexTicTacToeWinChecker(board) {
    board = board.split("")
    let arr = [] , k = 0 
    for (let i = 0; i < 3; i++) {
        arr[i] = []
        for (let j = 0; j < 3; j++) {
            arr[i][j] = board[k]
            k++
        }
    }

    // row check
    for (let i = 0; i < 3; i++) {
        if(arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2] && arr[i][0] != '-'){
            console.log("from row");    
            return true}
    }

    // col check 
    for (let j = 0; j < 3; j++) {
        if(arr[0][j] === arr[1][j] && arr[1][j] === arr[2][j] && arr[0][j] != '-'){
            console.log("from col");
            return true
        } 
    }

    // diagonal check
    if( arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[0][0] != '-'){
        console.log("from daigonal");
        return true
    }  

    // rev-diagonal check
    if( arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0] && arr[0][2] != '-'){
        console.log("from rev-daigonal");
        return true
    }
    
    return false
}

console.log(regexTicTacToeWinChecker("XO-------"));