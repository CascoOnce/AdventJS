/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    // Code here
    let prices = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100
    }
    let ornament = ornaments.split('');
    let inicio = ornament[0], fin, precio = 0;
    for(let i = 1; i < ornament.length; i++){
        fin = ornament[i];
        if(prices[fin] > prices[inicio]) precio += (-prices[inicio]);
        else precio += prices[inicio];
        inicio = fin;
    }
    precio += prices[fin];
    if(precio) return precio;
    else return undefined;
}

calculatePrice('***')  // 3   (1 + 1 + 1)
calculatePrice('*o')   // 4   (5 - 1)
calculatePrice('o*')   // 6   (5 + 1)
calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
calculatePrice('o***') // 8   (5 + 3)
calculatePrice('*o@')  // 94  (-5 - 1 + 100)
calculatePrice('*#')   // 49  (-1 + 50)
calculatePrice('@@@')  // 300 (100 + 100 + 100)
calculatePrice('#@')   // 50  (-50 + 100)
calculatePrice('#@Z')  // undefined (Z es desconocido)