/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    // Code here
    let cadenas = filename.split('_');
    let nuevo = "";
    for(let i = 1; i < cadenas.length; i++){
        nuevo += cadenas[i];
        if(i != cadenas.length - 1) nuevo += '_';
    }
    nuevo = nuevo.split('.');
    let ultimo = nuevo[0] + '.' + nuevo[1];
    return ultimo;
}

decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
// ➞ "sleighDesign.png"

decodeFilename('42_chimney_dimensions.pdf.hack2023')
// ➞ "chimney_dimensions.pdf"

decodeFilename('987654321_elf-roster.csv.tempfile')
// ➞ "elf-roster.csv"