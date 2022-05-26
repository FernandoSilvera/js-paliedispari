// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.

let userWord = prompt("Inserisci una parola, il programma ti dirà se è PALINDROMA.");

function checkPalindrome(word) {
  const splitWord = word.split("");
  const reverseSplitWord = (word.split("")).reverse();
  let validPalindrome = false;

  console.log(splitWord);
  console.log(reverseSplitWord);
  
  if (splitWord === reverseSplitWord) {
    validPalindrome = true;
  } else {
    validPalindrome = false;
  }

  return validPalindrome;
}

const palindrome = checkPalindrome(userWord);
if (palindrome == true) {
  alert("PALINDROMA!");
} else {
  alert("NON PALINDROMA!");
}