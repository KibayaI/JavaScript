let test = "dog";

for (let i = 0; i < test.length; i++) {
  for (let j = i; j < test.length; j++) {
    console.log(test.substring(i, j + 1));
  }
}
