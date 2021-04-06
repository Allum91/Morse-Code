//  export const translateMorseToEnglish = (input) => {
//      // Stub
//     const morseToEnglish = {
//         '.- ': 'a',
//         '.- ': 'b',
//         '-.-. ': 'c',
//         '-.. ': 'd',
//         '. ': 'e',
//         '..-. ': 'f',
//         '--. ': 'g',
//         '.... ': 'h',
//         '.. ': 'i',
//         '.--- ': 'j',
//         '-.- ': 'k',
//         '.-.. ': 'l',
//         '-- ': 'm',
//         '-. ': 'n',
//         '--- ': 'o',
//         '.--. ': 'p',
//         '--.- ': 'q',
//         '.-. ': 'r',
//         '... ': 's',
//         '- ': 't',
//         '..- ': 'u',
//         '...- ': 'v',
//         '.-- ': 'w',
//         '-..- ': 'x',
//         '-.-- ': 'y',
//         '--.. ': 'z',
//         '/ ': ' ',

//         '.---- ': 1,
//         '..--- ': 2,
//         '...-- ': 3,
//         '....- ': 4,
//         '..... ': 5,
//         '-.... ': 6,
//         '--... ': 7,
//         '---.. ': 8,
//         '----. ': 9,
//         '----- ': 0
//     }
//    const convertToEnglish = (str) => {
//         return str.split('').map((word) => {
//             return morseToEnglish[word]
//         }).join('');
//     };
//     console.log(convertToEnglish('morse'));
//     return convertToEnglish(input);
// }
 
// Alex I just "exported" this function. This means that other files can now "import" it :) ok
 export const translateEnglishToMorse = (input) => {
    // translateEnglishToMorse Starts here...
    const englishToMorse = {
        'A': '.- ',
        'B': '.- ',
        'C': '-.-. ',
        'D': '-.. ',
        'E': '. ',
        'F': '..-. ',
        'G': '--. ',
        'H': '.... ',
        'I': '.. ',
        'J': '.--- ',
        'K': '-.- ',
        'L': '.-.. ',
        'M': '-- ',
        'N': '-. ',
        'O': '--- ',
        'P': '.--. ',
        'Q': '--.- ',
        'R': '.-. ',
        'S': '... ',
        'T': '- ',
        'U': '..- ',
        'V': '...- ',
        'W': '.-- ',
        'X': '-..- ',
        'Y': '-.-- ',
        'Z': '--.. ',
        ' ': '/ ',

        1: '.---- ',
        2: '..--- ',
        3: '...-- ',
        4: '....- ',
        5: '..... ',
        6: '-.... ',
        7: '--... ',
        8: '---.. ',
        9: '----. ',
        0: '----- '
    }
 
 const convertToMorse = (str) => {
        return str.toUpperCase().split('').map((word) => {
            return englishToMorse[word]
        }).join('');
    };
    return convertToMorse(input);
}

