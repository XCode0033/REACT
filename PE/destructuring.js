// node destructuring.js
//1.

const coords = [41.5, -81.6, 300];

const [lat, lng] = coords;

console.log(`Lat (${lat}), lng (${lng})`);

//2. with rest
const ratings = [5, 4, 3, 5, 2];

const [firstRating, secondRating, ...otherRatings] = ratings;
console.log(firstRating, secondRating, otherRatings);

//3. Object Destructuring With Renaming
const user = {
  id: 123,
  name: "Xavier",
  city: "South Euclid",
  role: "student",
};

const { name: fullName, city } = user;
console.log(`${fullName} lives in ${city}`);

//4. Object destructuring with rest

const movie = {
  id: 1,
  title: "Inception",
  rating: 5,
  watched: true,
  year: 2010,
};

const { title, rating, ...movieMeta } = movie;
console.log(title);
console.log(rating);
console.log(movieMeta);
//5. function params with descturcturing + rest

const todos = [
  { id: 1, text: "Study React", done: false },
  { id: 2, text: "Work on Sharp Schedule", done: true },
];

function printTodo({ id, text }) {
  console.log(`#${id}: ${text}`);
}
