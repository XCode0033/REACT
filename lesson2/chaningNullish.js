// node chaningNullish.js

// safely access nested object properties without having to check if the propery actually extists

//exxample without
//wont work cause address doesnt exist
// const user = {
//   name: "brad",
// };

// console.log(user.address.city);

//with. add an "?" so it knows it's fine it's undefined
// const user = {
//   name: "brad",
// };

// console.log(user.address?.city);

//nullish coelecent operator gives way to handle default,null, undefined values. Similar to "or" values.

let value = 0;
let result = value ?? "Default Value";
console.log(result);

const user = {
  name: "brad",
};

console.log(user.address?.city ?? "Unknown");
