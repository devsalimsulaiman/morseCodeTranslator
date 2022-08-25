/* 
            MORSE CODE EQUIVALENTS
    a = .-      b = -...    c = -.-.    d = -..
    e = .    f = ..-.    g = --.    h = ....
    i = ..    j = .---    k = -.-    l = .-..
    m = --    n = -.    o = ---    p = .--.
    q = --.-    r = .-.    s = ...    t = -
    u = ..-    v = ...-    w = .--    x = -..-
    y = -.--    z = --..
    
    1 = .----    2 = ..---  3 = ...--
    4 = ....-   5 = .....   6 = -....
    7 = --...   8 = ---..   9 = ----.
    0 = -----   
    question mark = ..--..  
    exclamation mark = -.-.--
    fullstop = .-.-.-     
    comma = --..--      
    semicolon = -.-.-.
    colon = ---...  
    plus sign = .-.-.   
    minus sign = -....-
    division sigh = -..-.   
    equality sign = -...-

    */

    //  DOM OBJECTS
const translateButton = document.querySelector('#translate');
const englishText = document.querySelector('#engText').value;
const morseCode = document.querySelector('#morseCode');
let morseArray = [];

//  EVENT LISTENER
translateButton.addEventListener('click', toMorse);

function toMorse(){
    
    if(englishText.length == 0){
        morseCode.innerHTML = `<p>You entered nothing.</p>`;
    }else{
        for (alphabet of englishText) {         
                switch(alphabet) {
                    case 'a':
                        morseArray.push('.-');
                        break;
                    case 'b':
                            morseArray.push('-...');
                            break;
                    case 'c':
                            morseArray.push('-.-.');
                            break;
                    case 'd':
                            morseArray.push('-..');
                            break;
                    case 'e':
                            morseArray.push('.');
                            break;
                    case 'f':
                            morseArray.push('..-.');
                            break;
                    case 'g':
                            morseArray.push('--.');
                            break;
                    case 'h':
                            morseArray.push('....');
                            break;
                    case 'i':
                            morseArray.push('.');
                            break;
                    case 'j':
                            morseArray.push('.---');
                            break;
                    case 'k':
                            morseArray.push('-.-');
                            break;
                    case 'l':
                            morseArray.push('.-..');
                            break;
                    case 'm':
                            morseArray.push('--');
                            break;
                    case 'n':
                            morseArray.push('-.');
                            break;
                    case 'o':
                            morseArray.push('---');
                            break;
                    case 'p':
                            morseArray.push('.--.');
                            break;
                    case 'q':
                            morseArray.push('--.-');
                            break;
                    case 'r':
                            morseArray.push('.-.');
                            break;
                    case 's':
                            morseArray.push('...');
                            break;
                    case 't':
                            morseArray.push('-');
                            break;
                    case 'u':
                            morseArray.push('..-');
                            break;
                    case 'v':
                            morseArray.push('...-');
                            break;
                    case 'w':
                            morseArray.push('.--');
                            break;
                    case 'x':
                            morseArray.push('-..-');
                            break;
                    case 'y':
                            morseArray.push('-.--');
                            break;
                    case 'z':
                            morseArray.push('--..');
                            break;
                    case '1':
                            morseArray.push('.----');
                            break; 
                    case '2':
                            morseArray.push('..---');
                            break;
                    case '3':
                            morseArray.push('...--');
                            break;
                    case '4':
                            morseArray.push('....-');
                            break;
                    case '5':
                            morseArray.push('.....');
                            break;
                    case '6':
                            morseArray.push('-....');
                            break;
                    case '7':
                            morseArray.push('--...');
                            break;
                    case '8':
                            morseArray.push('---..');
                            break;
                    case '9':
                            morseArray.push('----.');
                            break;
                    case '0':
                            morseArray.push('-----');
                            break;
                    case '?':
                            morseArray.push('..--..');
                            break;
                    case '!':
                            morseArray.push('-.-.--');
                            break;
                    case '.':
                            morseArray.push('.-.-.');
                            break;
                    case ',':
                            morseArray.push('--..--');
                            break;
                    case ';':
                            morseArray.push('-.-.-.');
                            break;
                    case ':':
                            morseArray.push('---...');
                            break;
                    case '+':
                            morseArray.push('.-.-.');
                            break;
                    case '-':
                            morseArray.push('-....-');
                            break;
                    case '/':
                            morseArray.push('-..-.');
                            break;
                    case '=':
                            morseArray.push('-...-');
                            break; 
                    case ' ':
                            morseArray.push('&nbsp');
                            break;
                    default:
                            morseArray.push(englishText.charAt(alphabet));
                }//end switch()                               
          }//end for...of()
          morseCode.innerHTML = `<p>${morseArray.join('  ')}</p>`; 
    } //end else    
} //end toMorse()