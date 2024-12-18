/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    // Code here
    let variables = {};
    for(let i = 0; i < instructions.length; i++){
        let instruccion = instructions[i].split(" ");
        let inst = instruccion[0];
        let x = instruccion[1];
        if(!Number(x) && variables[x] == undefined) variables[x] = 0;
        if(inst == 'MOV' || inst == 'JMP'){
            let y = instruccion[2];
            if(inst == 'JMP'){
                if(variables[x] == 0) i = Number(y)-1;
            }else{
                if(variables[y] == undefined) variables[y] = 0;
                if(Number(x)) variables[y] = Number(x);
                else{
                    variables[y] = variables[x];
                }
            }
        }
        else if(inst == 'INC') variables[x]++;
        else if(inst == 'DEC') variables[x]--;
    }
    return variables['A'];
}

const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions)) // -> 2

/**
Ejecución paso a paso:
0: MOV -1 C -> El registro C recibe el valor -1
1: INC C    -> El registro C pasa a ser 0
2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
1: INC C    -> El registro C pasa a ser 1
2: JMP C 1  -> C es 1, ignoramos la instrucción
3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
4: INC A    -> El registro A pasa a ser 2
*/