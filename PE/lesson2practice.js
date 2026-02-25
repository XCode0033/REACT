
// //1. create 2 arrays. One that shows only tasks that are done and one that shows the title of whats not done
// const tasks = [
//   { id: 1, title: "Study React", done: false, category: "learning" },
//   { id: 2, title: "Work on Sharp Schedule", done: true, category: "product" },
//   { id: 3, title: "Plan GCH features", done: false, category: "product" },
//   { id: 4, title: "Walk", done: true, category: "health" },
// ];


// const doneTasks = tasks.filter((task) => task.done)
// console.log(doneTasks)


// //1A. Identify the task array, filter the not done tasks, then map it to the title so it shows titles that arent done yet
// const notDoneTitles = tasks
// .filter(task => !task.done)
// .map(task => task.title)




//2.
// const barbers = [
//   { id: 1, name: "Alex", rating: 4.8, city: "Cleveland" },
//   { id: 2, name: "Jordan", rating: 3.9, city: "Cleveland" },
//   { id: 3, name: "Taylor", rating: 4.5, city: "Euclid" },
//   { id: 4, name: "Sam", rating: 5.0, city: "Cleveland" },
// ];

// //Get topBarbers = all barbers with rating >= 4.5
// const topBarbers = barbers
// .filter(barber => barber.rating >= 4.5)
// .map (barber => barber.name)

// //get clevelandBarberNames = names of barbers in cleveland only

// const clevelandBarberNames = barbers
// .filter(barber => barber.city === 'Cleveland')
// .map(barber => barber.name)

// console.log(`Barbers greater than or equal to a rating of 4.5 ${topBarbers}`)
// console.log(`Barbers in Cleveland only: ${clevelandBarberNames}`)




// //3. Destructuring + rest with a user
// const profile = {
//   id: 7,
//   name: "Xavier",
//   city: "South Euclid",
//   role: "student",
//   favoriteStack: "TypeScript + React + Express",
// };

// const { name: fullName, city, ...profileMeta } = profile
// console.log(`${fullName} lives in ${city}.`)
// console.log('Profile meta: ', profileMeta)


// //4. Function params with destructioning (todos)
// const todos = [
//   { id: 1, text: "Study React", done: false },
//   { id: 2, text: "Work on Sharp Schedule", done: true },
//   { id: 3, text: "Plan GCH", done: false },
// ];

// function printTodo({id, text, done}) {
//   const box = done ? "[x]" : "[]";
//   console.log(`#${id} ${box} ${text}`)
// }

// todos.forEach(printTodo)


// //5. Template literals + chaining filter/map

// const tasks = [
//   { id: 1, title: "Study React", done: false, category: "learning" },
//   { id: 2, title: "Work on Sharp Schedule", done: true, category: "product" },
//   { id: 3, title: "Plan GCH features", done: false, category: "product" },
//   { id: 4, title: "Walk", done: true, category: "health" },
// ];

// const productTaskSummary = tasks
// .filter(task => task.category === "product")
// .map(task => task.title)
// .join(", ");
// //turn array of titles into a string

// console.log(`Product tasks: ${productTaskSummary}`)

const events = [
  { id: 1, title: "Study React", day: "Monday", done: false },
  { id: 2, title: "Work on Sharp Schedule", day: "Monday", done: true },
  { id: 3, title: "Gym", day: "Tuesday", done: false },
  { id: 4, title: "Plan GCH", day: "Tuesday", done: false },
];

// 1) Make an array of titles for all events on "Tuesday" that are NOT done.
//    Call it tuesdayNotDoneTitles.
const tuesdayNotDoneTitles = events
  .filter(event => event.day === "Tuesday" && !event.done)
  .map(event => event.title);



// 2) Log a summary string like:
//    "Tuesday pending: Gym, Plan GCH"
console.log(`Tuesday pending: ${tuesdayNotDoneTitles.join(", ")}`)



const schedule = [
  { id: 1, title: "Study React", durationMinutes: 60, done: false },
  { id: 2, title: "Work on Sharp Schedule", durationMinutes: 90, done: true },
  { id: 3, title: "Plan GCH", durationMinutes: 45, done: false },
  { id: 4, title: "Walk", durationMinutes: 30, done: false },
];

// 1) Make an array `shortPendingTitles` with titles of tasks
//    that are NOT done AND have durationMinutes <= 45.
  const shortPendingTitles = schedule
  .filter(schedule => !schedule.done && schedule.durationMinutes <= 45)
  .map(schedule => schedule.title)



// 2) Log a string like:
//    "Short pending tasks: Plan GCH, Walk"
console.log(`Short Pending tasks: ${shortPendingTitles.join(", ")} `)


//---------------------
const todayTasks = [
  { id: 1, title: "Study React", durationMinutes: 60, done: false },
  { id: 2, title: "Work on Sharp Schedule", durationMinutes: 90, done: true },
  { id: 3, title: "Plan GCH", durationMinutes: 45, done: false },
];

// 1) Make an array `pendingTodayTitles` of titles where done is false.

const pendingTodayTitles = todayTasks
  .filter(task => !task.done)
  .map(task => task.title)

// 2) Make a number `totalPendingMinutes` with the sum of durationMinutes

const totalPendingMinutes = parseInt(todayTasks.durationMinutes + todayTasks.durationMinutes)

console.log(totalPendingMinutes)
//    for tasks where done is false (hint: start with 0 and += inside a loop,
//    or if you want a stretch, try .reduce).
// 3) Log: "Pending today (105 min): Study React, Plan GCH"

//node lesson2practice.js