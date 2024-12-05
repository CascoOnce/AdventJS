/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    let array = [];
    for(let value of shoes){
        let type = value.type, number = value.size;
        let pass = false;
        for(let i = 0; i < array.length; i++){
            if(array[i].number == number){
                if(type === 'I' && array[i].left === 0){
                    array[i].left = 1;
                    pass = true;
                    break;
                }
                else if(type === 'R' && array[i].right === 0){
                    array[i].right = 1;
                    pass = true;
                    break;
                }
            }
        }
        if(pass === false){
            let left = 0, right = 0;
            if(type === 'I') left = 1;
            if(type === 'R') right = 1;
            array.push({number: number, left: left, right: right})
        }
    }
    let pairs = [];
    for(let i = 0; i < array.length; i++){
        if (array[i].left === 1 && array[i].right === 1)
            pairs.push(array[i].number);
    }
    return pairs;
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes))
// [38, 42]

const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]
console.log(organizeShoes(shoes2))
// [38, 38]

const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3))
  // []