/**
 * @param {string} packages - String containing packages with parentheses.
 * @returns {string} Fixed and sorted packages.
 */
function fixPackages(packages) {
    const stack = [];
    let string = "";
    for (const char of packages) {
        if (char === "(") {
            stack.push(string);
            string = "";
        } else if (char === ")") {
            string = stack.pop() + string.split("").reverse().join("");
        } else {
            string += char;
        }
    }
    return string;
}

fixPackages('a(cb)de')
// ➞ "abcde"
// We reverse "cb" inside the parentheses

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"