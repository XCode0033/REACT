const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
};

const note = {
  title: "Discuss Project",
  timestamp: Date.now(),
};

console.log(`Last Edited: ${formatDate(note.timestamp)}`);
