var letter = prompt("Enter any letter : ")
letter = letter.toLowerCase();

switch(letter){
    case"a":
    case"E":
    case"i":
    case"o":
    case"u":
    document.write("Vowel")
    break;
   default:
   document.write("Consonant")


}