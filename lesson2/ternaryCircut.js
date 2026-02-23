// const numberA = 2;

// let messageA;

// if (numberA % 2 === 0) {
//   messageA = "Even Number";
// } else {
//   messageA = "odd number";
// }

// console.log(messageA);

// const number = 2;
// // " ? " = "then" and " : " = else
// const message = number % 2 === 0 ? "Even Number" : "Odd Number";
// console.log(message);

const note = {
  title: "Meeting Notes",
  content: "Discuss roadmap project ",
  timestamp: Date.now(),
  isPinned: false,
};

//another way 'Short circut rendering'. is shorter
const noteText = `
Title: ${note.title}
Status: ${note.isPinned ? "Pinned Note!" : "Regular Note"}
Last Edited: ${new Date(note.timestamp).toLocaleString()}`;

console.log(false && "Hello");

const isLoggedIn = false;

function showWelcome() {
  return isLoggedIn && "Welcome User";
}

console.log(showWelcome());
