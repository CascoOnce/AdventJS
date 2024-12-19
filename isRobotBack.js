/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    // Code here
    let x = 0, y = 0;
    let count = {
        'L': 0,
        'R': 0,
        'U': 0,
        'D': 0
    };
    let instruccions = moves.split("");
    for(let i = 0; i < moves.length; i++){
        if(instruccions[i] == 'R') count['R']++, x ++;
        else if(instruccions[i] == 'L') count['L']++, x--;
        else if(instruccions[i] == 'D') count['D']++, y--; 
        else if(instruccions[i] == 'U') count['U']++, y++;
        if(instruccions[i] == '*') {
            instruccions[i] = instruccions[i+1];
            i--;
        }
        if(instruccions[i] == '!'){
            if(instruccions[i+1] == 'R') instruccions[i+1] = 'L'
            else if(instruccions[i+1] == 'L') instruccions[i+1] = 'R'
            else if(instruccions[i+1] == 'U') instruccions[i+1] = 'D'
            else if(instruccions[i+1] == 'D') instruccions[i+1] = 'U'
        }
        if(instruccions[i] == '?'){
            let insSig = instruccions[i+1];
            if(count[insSig] != 0){
                i++;
            }
        }
    }
    if(x == 0 && y == 0) return true;
    else return [x, y];
}

isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'