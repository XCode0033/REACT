// node promiseAsync.js

//Can be in one of 3 states.
//1. Pending, hasnt finished yet

//2. fulfulled, succedded or resolves

//3. rejected, didnt finish

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))

//^ same thing but as an async await
//"try catch" is what its called
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log(error);
  }
};

fetchData();
