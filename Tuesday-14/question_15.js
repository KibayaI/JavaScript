let movie = {
  genre: "Horror",
  producer: "Ming Jing",
  starring: "Anabell",
  year_of_prod: 2014,
};

function pair(object) {
  arr = [Object.keys(object), Object.values(object)];
  for (let i = 0; i < 4; i++) {
    paired_array = [arr[[0]][i], arr[[1]][i]];
    console.log(paired_array);
  }
}

pair(movie);
