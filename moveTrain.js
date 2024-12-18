/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    let row, column, maxrow = board.length, maxcol = board[0].length;

    const concatenado = board.join("");
    let pos = concatenado.indexOf('@');

    column = pos%maxcol;
    row = Math.floor(pos / maxcol);

    if(mov === 'U') row -= 1;
    else if(mov === 'D') row += 1;
    else if(mov === 'L') column -= 1;
    else if(mov === 'R') column += 1;

    if(row < 0 || row >= maxrow) return 'crash';

    let array = board[row].split("");
    if(column < 0 || column >= maxcol) return 'crash';
    if(array[column] == '·') return 'none';
    if(array[column] == '*') return 'eat';
    if(array[column] == 'o') return 'crash';
    return 'none'
}


const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right