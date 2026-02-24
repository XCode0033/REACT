
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
const barbers = [
  { id: 1, name: "Alex", rating: 4.8, city: "Cleveland" },
  { id: 2, name: "Jordan", rating: 3.9, city: "Cleveland" },
  { id: 3, name: "Taylor", rating: 4.5, city: "Euclid" },
  { id: 4, name: "Sam", rating: 5.0, city: "Cleveland" },
];

//Get topBarbers = all barbers with rating >= 4.5
const topBarbers = barbers
.filter(barber => barber.rating >= 4.5)
.map (barber => barber.name)

//get clevelandBarberNames = names of barbers in cleveland only

const clevelandBarberNames = barbers
.filter(barber => barber.city === 'Cleveland')
.map(barber => barber.name)

console.log(`Barbers greater than or equal to a rating of 4.5 ${topBarbers}`)
console.log(`Barbers in Cleveland only: ${clevelandBarberNames}`)