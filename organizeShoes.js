/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    let shoeMap = new Map();
    for(let {type, size} of shoes){
        if(!shoeMap.has(size)){
            shoeMap.set(size, {left:0, right: 0});
        }
        if(type == 'I') shoeMap.get(size).left++;
        if(type == 'R') shoeMap.get(size).right++;
    }
    let pairs = [];
    for(let [size, {left, right}] of shoeMap){
        let min = Math.min(left, right);
        for(let i = 0; i < min; i++) pairs.push(size);
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