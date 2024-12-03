function organizeInventory(inventory) {
    // Code here
    let objInventory = {};
    for(let i = 0; i < inventory.length; i++){
        let item =  inventory[i];
        let category = item.category;
        let name = item.name;
        let quantity = item.quantity;
        
        if(!objInventory[category]){
            objInventory[category] = {};
        }
        if(!objInventory[category][name]){
            objInventory[category][name] = 0;
        }
        objInventory[category][name] += quantity;
    }
    return objInventory;
}

const inventary = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventary)

  // Resultado esperado:
  // {
  //   toys: {
  //     doll: 5,
  //     car: 5
  //   },
  //   sports: {
  //     ball: 2,
  //     racket: 4
  //   }

const inventary2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]

organizeInventory(inventary2)

  // Resultado esperado:
  // {
  //   education: {
  //     book: 15
  //   },
  //   art: {
  //     paint: 3
  //   }
  // }