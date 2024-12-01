function prepareGifts(gifts) {
    // Code here
    let size = gifts.length;
    let array = [];
    for(let i = 0; i < size; i++){ // recorre el arreglo de regalos
        let value = gifts[i];
        let repeat = false;
        for(let j = 0; j < array.length; j++){
            if(value === array[j]) repeat = true;
        }
        if(!repeat) array.push(value);
    }
    for(let i = 0; i < array.length - 1; i++){ // Se puede reemplazar con: array.sort((a, b) => a - b);
        for(let j = i; j < array.length; j++){
            if(array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// There are no gifts, the list remains empty