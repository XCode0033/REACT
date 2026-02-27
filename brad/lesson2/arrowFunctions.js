const getRectangleArea = (width, height) => width * height;

const sayHello = () => console.log("Hello");

const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((number) => number * 2);
console.log(getRectangleArea(5, 10));
sayHello();
console.log(double);
//differences
//arrow cant be accessed before initialiiation. So moving it above the function won't work like usual
function regular() {
  console.log("Regular");
}

const arrow = () => console.log("Arrow");

regular();
arrow();

//------------------------------------------

//this

const person = {
  name: "Brad",
  sayHelloRegular: function () {
    console.log("Regular: ", this.name);
  },
  sayHelloArrow: () => console.log("Arrow: ", this.name),
};

person.sayHelloArrow();

