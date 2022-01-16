const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    if (expr.includes('*')){
        let wordsArray = [];
        expr.split('**********').forEach(element => {
            wordsArray.push(element.split(''));
        });
        let charsInWords = [];
        for (let i of wordsArray){
            for (let j = 0; j < i.length; j += 10){
                charsInWords.push(i.slice(j, j + 10));
            }
        }
        let morseChars = []
        charsInWords.forEach(elem => {
            while (elem.join('').startsWith('0')){
                elem.shift();
            }
            while (elem.join('').startsWith('1')){
                if (elem.join('').startsWith('10')){
                elem.splice(0, 2);
                elem.push('.');
                }
                else if (elem.join('').startsWith('11')){
                elem.splice(0, 2);
                elem.push('-');
                }
            }
            morseChars.push(elem.join(''));
        });
    
        for (let i = 0; i < morseChars.length; i++){
            morseChars.splice(i, 1, MORSE_TABLE[morseChars[i]]);
        }
        
        let convertedWords = [];
        wordsArray.forEach(elem => {
            convertedWords.push(morseChars.splice(0, elem.length / 10).join(''));
        })
    
        return convertedWords.join(' ');
        }
        else{
            const array = [expr];
            console.log(array);
            let wordsArray = [];
            array.forEach(element => {
            wordsArray.push(element.split(''));
            });
            let charsInWords = [];
            for (let i of wordsArray){
            for (let j = 0; j < i.length; j += 10){
                charsInWords.push(i.slice(j, j + 10));
            }
            }
            let morseChars = []
            charsInWords.forEach(elem => {
            while (elem.join('').startsWith('0')){
                elem.shift();
            }
            while (elem.join('').startsWith('1')){
                if (elem.join('').startsWith('10')){
                elem.splice(0, 2);
                elem.push('.');
                }
                else if (elem.join('').startsWith('11')){
                elem.splice(0, 2);
                elem.push('-');
                }
            }
            morseChars.push(elem.join(''));
            });
        
            for (let i = 0; i < morseChars.length; i++){
            morseChars.splice(i, 1, MORSE_TABLE[morseChars[i]]);
            }
            
            let convertedWords = [];
            wordsArray.forEach(elem => {
            convertedWords.push(morseChars.splice(0, elem.length / 10).join(''));
            })
            return convertedWords.join(' ');
        }
}

module.exports = {
    decode
}