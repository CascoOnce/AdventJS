/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    // Code here
    let fin = '';
    let spaces = indices.length;
    for(let i = 0; i < spaces; i++){
        let cadena = " ".repeat(spaces - i - 1);
        let race = '~'.repeat(length);
        let meters = race.split("");
        if(indices[i] > 0){
            meters[indices[i]] = 'r'; 
        }else if(indices[i] < 0){
            meters[length + indices[i]] = 'r';
        }
        meters = meters.join("");
        cadena += meters;
        cadena += ' /' + (i + 1);
        if(i != spaces - 1) cadena += '\n';
        fin += cadena;
    }
    return fin;
}

drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12)
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/