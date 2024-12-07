/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    let size = box.length;
    if(box[0].indexOf("*") != -1 || box[size-1].indexOf("*") != -1)
        return false;
    for(let i = 1; i < size - 1; i++){
        let posicion = box[i].indexOf("*");
        let max = box[i].length;
        if(posicion > 0 && posicion < max-1){
            return true;
        }
    }
    return false
}

inBox([
    "###",
    "#*#",
    "###"
  ]) // ➞ true

inBox([
    "####",
    "#* #",
    "#  #",
    "####"
  ]) // ➞ true

inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
  ]) // ➞ false

inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ]) // ➞ false