let movie = {
  genre: "Horror",
  producer: "Ming Jing",
  starring: "Anabell",
  year_of_prod: 2014,
};

let key = Object.keys(movie);
let value = Object.values(movie);
let new_object = {};

function reversal(my_object) {
  for (let i = 0; i < Object.keys(my_object).length; i++) {
    new_object[value[i]] = key[i];
  }
  console.log(new_object);
}

reversal(movie);
