// const todos = [
//   { id: 1, text: "Study React", done: false },
//   { id: 2, text: "Work on Sharp Schedule", done: true },
//   { id: 3, text: "plan GCH", done: false },
// ];

// const notDoneTodos = todos.filter((todo) => !todo.done);
// const notDoneTexts = todos
//   .filter((todo) => !todo.done)
//   .map((todo) => todo.text);

// const doneTodos = todos.filter((todo) => todo.done);
// const todoTexts = todos.map((todo) => todo.text);

// console.log(doneTodos);
// console.log(todoTexts);
// console.log(notDoneTexts);
// console.log(notDoneTodos);

//2.

const movies = [
  { id: 1, title: "Inception", rating: 5, watched: true },
  {
    id: 2,
    title: "Spider-Man: Into the Spider-Verse",
    rating: 5,
    watched: false,
  },
  { id: 3, title: "Interstellar", rating: 4, watched: true },
  { id: 4, title: "The Matrix", rating: 5, watched: false },
  { id: 5, title: "Toy Story", rating: 3, watched: true },
];

const moviesWatched = movies.filter((movie) => movie.watched);
const moviesNotWatched = movies.filter((movie) => !movie.watched);
const movieTitle = movies.map((movie) => movie.title);
const movieTitlesRatings = movies.filter(
  (movie) => movie.title && movie.rating === 5,
);

const unwatchedFiveStar = movies
  .filter((movie) => !movie.watched)
  .filter((movie) => movie.rating === 5)
  .map((movie) => movie.title);

const unwatchedFiveStarB = movies
  .filter((movie) => !movie.watched)
  .filter((movie) => movie.rating === 5)
  .filter((movie) => movie.title);

// console.log("Movies Watched:", moviesWatched);
// console.log("Movies Unwatched: ", moviesNotWatched);
// console.log("Movie Titles: ", movieTitle);
// console.log("Movies with five star rating: ", movieTitlesRatings);
console.log("Unwatched 5 star movies: ", unwatchedFiveStar);
console.log(
  "Another version just to test the unwatched 5 star: ",
  unwatchedFiveStarB,
);
