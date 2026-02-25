// node immuteSpread.js

// const notes = ["Meeting Notes", "Grocery List"];
// const newNotes = [...notes, "Workout PLan"];
// console.log(newNotes);

//objects

const user = {
  name: "John Doe",
  age: 30,
};

const newUser = {
  ...user,
  age: 31,
};
console.log(user);
console.log(newUser);
