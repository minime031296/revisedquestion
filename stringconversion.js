function letter(char){
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0 ; i < uppercase.length ; i++){
        if(char === uppercase[i]){
           char = lowercase[i]
           break;
        }
        else if(char === lowercase[i]){
            char = uppercase[i]
        }
       
    }
    return char
}

//let ltr = letter("F")
//console.log(ltr)

function LetterToWord(word) {
    let char = ""
    for(let i=0 ; i<word.length ; i++){
        char += letter(word[i])
        }
        return char
}


//let wrd = LetterToWord("mahak")
//console.log(wrd)

function WordToString(str) {
    let string = []
    for(let i = 0 ; i < str.length ; i++){
        string.push(LetterToWord(str[i]))
    }
    return string
}

let answer = WordToString(["MA", "SA", "I", "SCH", "OOL"])
console.log(answer)















