// destructuring arrays
const notes = [
  { title: "Meeting Notes", content: "Discuss project rodemap" },
  { title: "Grocery List", content: "buy milk, eggs, bread" },
  { title: "Workout Plan", content: "Push Day: Bench, shoulder Press" },
  { title: "Recipe Ideas", content: "Pasta,Salad, Tacos" },
];
//rest and spread operators (...) same thing, different purposes

//shows the rest of the nothes together but one and 2 individually
const [firstNote, secondNote, ...otherNotes] = notes;

console.log(firstNote);
console.log(secondNote.title);
console.log(otherNotes);
//-------------------------------
//destructuring objects

const note = {
  title: "Meeting Notes",
  content: "discuss  project roadmap",
  isPinned: true,
};

const { title, isPinned } = note;

console.log(title);

//nested destructureing
//1.
// const user = {
//   name: "Ben",
//   address: { city: "boston", state: "mass" },
// };

// //1A to get just the city
// const { name, address } = user;
// console.log(address);

//2 destructuring an array in an object, basically just making the object then doing the array destructring from earlier
const user = {
  name: "Ben",
  address: { city: "boston", state: "mass" },
  hobbies: ["movies", "sports", "music"],
};

const {
  name,
  hobbies: [firstHobby, ...otherHobbies],
} = user;
console.log(otherHobbies);
