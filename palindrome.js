let word = prompt("Enter your word");
let is_palindrome = "";

for (let i = word.length - 1; i >= 0; i--) {
  is_palindrome = is_palindrome.concat(word.charAt(i));
}
console.log(is_palindrome);
if (word === is_palindrome) {
  alert(`${word} is a palindrome`);
} else {
  alert(`${word} is not a palindrome`);
}
