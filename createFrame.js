function createFrame(names) {
    // Code here
    let maxLength = 0;
    for(let i = 0; i < names.length; i++){
        if(names[i].length > maxLength) 
            maxLength = names[i].length;
    }
    let frame = "";
    let cadena = '*'.repeat(maxLength+4);
    frame += cadena + '\n';
    for(let i = 0; i < names.length; i++){
        let nameL = names[i].length, nameP = "* ";
        nameP += names[i] + ' '.repeat(maxLength - nameL);
        nameP += " *";
        frame += nameP + '\n';
    }
    frame += cadena;
    return frame;
}

createFrame(['midu', 'madeval', 'educalvolpz'])

// Expected result:
/*
***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/
createFrame(['midu'])

// Expected result:
/*
********
* midu *
********
*/
createFrame(['a', 'bb', 'ccc'])

// Expected result:
/*
*******
* a   *
* bb  *
* ccc *
*******
*/
createFrame(['a', 'bb', 'ccc', 'dddd'])