const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';
    let arrWords = [];
    const word_length = 10;
    arrWords = expr.split("**********");
    if (arrWords.length == 0) {
        arrWords.push(expr);
    }
    for (let word of arrWords) {
        let kol = word.length / word_length;
        for (let iteration = 0; iteration < kol; iteration++) {
            let chWord = word.substr(iteration * word_length, word_length);
            let i = 0;
            let codedChar = '';
            while (i < word_length/2) {
                let symb = '';
                let twoChar = chWord[i * 2] + chWord[i * 2 + 1];
                if (twoChar == '10') {
                    codedChar = codedChar + '.';
                }
                else if (twoChar == '11') {
                    codedChar = codedChar + '-';
                }
                i++;
            }
            let decodedChar = MORSE_TABLE[codedChar];
            result = result + decodedChar;
        }
        result = result + " ";
    }
    return result.trim();
}

module.exports = {
    decode
}