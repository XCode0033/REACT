// const notes = [
//   {
//     title: "Study React",
//     content: "Finish Section 2 and start components.",
//     isPinned: true,
//   },
//   {
//     title: "Sharp Schedule idea",
//     content: "Daily summary of pending minutes and tasks.",
//     isPinned: true,
//   },
//   {
//     title: "GCH feature",
//     content: "Filter barbers by rating and city.",
//     isPinned: false,
//   },
//   {
//     title: "Random thought",
//     content: "Try React Native for Sharp Schedule mobile.",
//     isPinned: false,
//   },
// ];

// //what I said
// // const titles = notes.map((note) => note.title === note.title);

// //correct answer (index just to keep things numbered. otherwise remove the === when mapping)
// const noteTitles = notes.map((note, index) => `${index + 1}. ${note.title}`);
// console.log(noteTitles);

// //filter. Creates new array but runs it through a condition. Transforms array based on said condition

// const notes = [
//   {
//     title: "Study React",
//     content: "Finish Section 2 and start components.",
//     isPinned: true,
//   },
//   {
//     title: "Sharp Schedule idea",
//     content: "Daily summary of pending minutes and tasks.",
//     isPinned: true,
//   },
//   {
//     title: "GCH feature",
//     content: "Filter barbers by rating and city.",
//     isPinned: false,
//   },
//   {
//     title: "Random thought",
//     content: "Try React Native for Sharp Schedule mobile.",
//     isPinned: false,
//   },
// ];

// const pinnedNotes = notes
//   .filter((note) => note.isPinned)
//   .map((note) => note.title);
// console.log(pinnedNotes);
//node arrayMethods.js

//reduce

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((total, number) => total + number, 0);

// console.log(sum);

// const notes = [
//   {
//     title: "Study React",
//     content: "Finish Section 2 and start components.",
//     isPinned: true,
//   },
//   {
//     title: "Sharp Schedule idea",
//     content: "Daily summary of pending minutes and tasks.",
//     isPinned: true,
//   },
//   {
//     title: "GCH feature",
//     content: "Filter barbers by rating and city.",
//     isPinned: false,
//   },
//   {
//     title: "Random thought",
//     content: "Try React Native for Sharp Schedule mobile.",
//     isPinned: false,
//   },
// ];

// //its counting the number of characters in the content fields
// const totalCharacters = notes.reduce(
//   (total, note) => total + note.content.length,
//   0,
// );
// console.log(totalCharacters);

//foreach

const notes = [
  {
    title: "Study React",
    content: "Finish Section 2 and start components.",
    isPinned: true,
  },
  {
    title: "Sharp Schedule idea",
    content: "Daily summary of pending minutes and tasks.",
    isPinned: true,
  },
  {
    title: "GCH feature",
    content: "Filter barbers by rating and city.",
    isPinned: false,
  },
  {
    title: "Random thought",
    content: "Try React Native for Sharp Schedule mobile.",
    isPinned: false,
  },
];

notes.forEach((note) => console.log(note.title));
