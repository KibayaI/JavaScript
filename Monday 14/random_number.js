random_num = Math.floor(Math.random() * 10) + 1;

guess = prompt("Enter a number between 1 and 10");

if (guess == random_num) {
  alert("Good Work");
} else {
  alert(`Not Matched, the number was ${random_num}`);
}
