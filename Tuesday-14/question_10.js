var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

let sorted = library.map((new_library) => ({
  author: new_library.author,
  title: new_library.title,
  libraryID: new_library.libraryID,
}));

console.log(sorted);
