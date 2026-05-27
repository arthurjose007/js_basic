// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// let moviename=["Jailer","kithi","Vijay","cm"];
// moviename.push("james");
// moviename.unshift("boby");
// moviename.pop();
// moviename.shift("kithi");
// moviename.splice(2,0, "Jebin");
// console.log(moviename);
// //JavaScript program to swap two variables

// //take input from the users
// let a = parseInt(prompt('Enter the first variable: '));
// let b = parseInt(prompt('Enter the second variable: '));

// // addition and subtraction operator
// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);



// let a = 5;
// console.log(a);

// // constants are block-scoped
// {
//     let a = 50;
//     console.log(a);
// }
// console.log(a);





// function movie(hero,heroine){
//     console.log(`ayan movie hero${hero},heroine ${heroine}`);
// }
// movie("suriya","Thirisha")


//setTimeout(function ,delay);
//function-> The function to execute after the delay
//delay ->Time in milliseconds (1 second=1000ms);
//     console.log("Yout biriyani ordered");
// setTimeout(function biriyani()=>{
//     console.log("Yout biriyani is ready");
//  },3000);
// setTimeout(()=>{
//     console.log("Yout biriyani is ready");
// },3000);

function movie(hero, heroine) {
    console.log(`ayan movie hero${hero},heroine ${heroine}`);
}
function movienew(callback) {
    //console.log(`ayan movie hero${hero},heroine ${heroine}`);
    callback();
}
movienew(User);
movienew(() => movie("suriya", "Thirisha"));

function User() {
    console.log("Hello all");
}
//set interva
//  const water=setInterval(()=>{
//     console.log("Repeat between interval");
// },5000);


// setTimeout(()=>clearInterval(water),16000);
let intervalId = setInterval(() => {
    console.log("Repeat between interval");
}, 5000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped!");
}, 16000);




let number = [10, 20, 30, 40, 50];
function multiplyByTwo(num) {
    return num * 2;
}
let doubledNumbers = number.map(multiplyByTwo);
console.log(doubledNumbers);

let doubledNumbers = number.map(num => num * 2);

let doubledNumbers = number.map(num => num ** 2);
console.log(doubledNumbers);
//the filter () method creates a new array with all elements that pass the test implemented by the provided specified condition.
let evenNumbers = number.filter(num => num % 2 === 0);
console.log(evenNumbers);

//json



let tv = {
    brandname: "Sony",
    size: "72 inch"

};
let convertedstring = JSON.stringify(tv);

console.log(convertedstring);

let tv1 = `{
    "brandname":"Sony",
    "size":"72 inch"
    
}`;
let convertedstring1 = JSON.parse(tv1);

console.log(convertedstring1);


//shallow copy and deep copy
let original = {
    name: "John",
    age: 30
};
//shallow copy
let shallowCopy = Object.assign({}, original);
shallowCopy.name = "Alice";
console.log(original.name); // Output: John
console.log(shallowCopy.name); // Output: Alice
//


let food = {
    name: "Mandi",
    price: 30,
    flavour: {
        one: "Peri peri",
        two: "Honey Garlic",
    }
};
let shallowCopy = Object.assign({}, food);
shallowCopy.name = "Alice";
shallowCopy.flavour.one = "Alfaham";
console.log(shallowCopy);
console.log(food);


let food = {
    name: "Mandi",
    price: 30,
    flavour: {
        one: "Peri peri",
        two: "Honey Garlic",
    }
};

let shallowCopy = Object.assign({}, food);
shallowCopy.name = "Alice";
shallowCopy.flavour.one = "Alfaham";
//shallow copy merge 
let icecream = {
    icename: "Arun ice cream",
    flavour1: "choclate"
}
let merge = Object.assign({}, food, icecream);

//if name is same it will override the value
console.log(merge);
//deep copy

let mandinew = {
    name: "Mandi",
    price: 30,
    flavour: {
        one: "Peri peri",
        two: "Honey Garlic",
    }
};
let deepCopy = JSON.parse(JSON.stringify(mandinew));
deepCopy.flavour.one = "Alfaham";
console.log(deepCopy);
console.log(mandinew);
//same like deep copy structured clone and lodash library
let deepCopy1 = structuredClone(mandinew);
deepCopy1.flavour.one = "Alfaham";
console.log(deepCopy1);
console.log(mandinew);
//spread operator
let originalarray = [1, 2, 3, 4, 5];
let copyArray = [...originalarray];
copyArray.push(6);
console.log(originalarray);
console.log(copyArray);

//...spread oprator
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let str = "Hello";
let chars = [...str];
let mergeArray = [...arr1, ...arr2];
console.log(mergeArray);
console.log(chars);

//rest parameter arguments passing as function
//send multiple parameter

function phonepe(first, ...balance) {
    console.log(`your balance is ${first},your loans are ${balance}`);
}
phonepe(10000, 200, 2000, 4000, 8134);

//promise
ticket = false;
function queue() {
    return new Promise((resolve, reject) => {
        if (ticket) {
            resolve('fdfs ');
        }
        else {
            reject('no ticket');
        }
    });

}
function buytickets() {
    queue().then((message) => {
        console.log(message);
    }).catch((error) => {
        console.log(error);
    });
}
buytickets();

///async await

//promise
let ticket = false;

function queue() {
    return new Promise((resolve, reject) => {
        if (ticket) {
            resolve('Ticket booked');
        } else {
            reject('No ticket available');
        }
    });
}

async function buytickets() {
    try {
        let result = await queue();
        console.log(result);
    } catch (e) {
        console.log(`Error: ${e}`);
    }
}

buytickets();

//Dom manipulation
// mean document object model


//bloc scope
let b = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);
//shadowing
let x = 50;
function shadowing() {
    let x = 100; // This variable shadows the outer variable 'x'
    console.log(x); // Output: 100
}
shadowing();
console.log(x); // Output: 100

//illigal shadowing
let a = 20;
{
    var a = 30;
}
console.log(a);//show error 
//but this is passible if we first use var 
var a = 20;
{
    let a = 30;

}
console.log(a); //show 20 because of block scope

///
let a = 20;
{
    let a = 30;
}
console.log(a) //show 20 because of block scope
/// this is also possible  in funciton scope
let a = 20;
function x() {
    var a = 30;

}
x();
console.log(a);//show 20
// this also possible
let a = 20;
{
    const a = 30;

}

console.log(a);

//lexical scope
//same in the scop also in the nested scope
const a = 20;
{
    const a = 30;
    {
        const a = 100;
        console.log(a);


    }
    console.log(a);

}

console.log(a);
//100
//30
//20


//closure
//

function x() {
    var a = 7;
    function y() {
        console.log(a);

    }
    return y;
}
var z = x()
console.log(z)
//''the function will have z know the source
//that closures the funciton along with the lexical scop that will return in the z . so if you execute the z it still have remember the reference to the a and it try to find out the value of a

z();
//if you call the function like this it will print the 6 every time because it takes the reference of a and it will print the value of a which is 6. if you change the value of a to 
function x() {
    for (var i = 1; i <= 5; i++) {

        setTimeout(function () {
            console.log(i);

        }, 1000);

    }
    console.log("HI all")

}
x();
// in this it will print 6 every time
///////////////////////////////////////////////////////////////////////
// if your use let thin it will use the block scope and it will print the value of i from 1 to 5 because of block scope
function x() {
    for (let i = 1; i <= 5; i++) {

        setTimeout(function () {
            console.log(i);

        }, 1000);

    }
    console.log("HI all")

}
x();
// if you want to print it in the var then you need to use the closure to create a new scope for each iteration
//every time you call the i it will create a new scope or stored i a seperate memory every time you call for that i and it will print the value of i in that scope
//closure
function x() {
    for (var i = 1; i <= 5; i++) {
        (function (j) {
            setTimeout(function () {
                console.log(j);
            }, 1000);
        })(i);
    }
    console.log("HI all")
}
x();
// or 
function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);

            }, x * 1000);
        }
        close(i);
    }
    console.log("HI all");
}
x();
////////////////////////////////////////////////////////////////////////
//closure is a function along with the reference to it outer environment which is lexical scope. 
// it allows the function to access the variables from the outer scope even after the outer function has finished executing.
//  it is used to create private variables and functions and to implement data encapsulation in JavaScript. closures are created 
// every time a function is created, at function creation time. they are also used in callback functions and event handlers to maintain
//  state and access variables from the outer scope.
/////////
//eg
function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}
var closureFunction = outer();
closureFunction(); // Output: 10
//or
outer()();

//data encapsulation in closure
function counter() {
    var count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
let myCounter = counter();
myCounter();
myCounter();
// if we call hte function again it will print 1 as a new one
let myCounter2 = counter();
myCounter2();
myCounter2();
myCounter2();

// in this it will print 1 because it is a new counter function with a new count variable
/////////////////////////////////////////////////////////////
// if i need to add a decrement function also then i can return an object with both the functions and it will have access to the same count variable because of closure

function counter() {
    var count = 0;
    this.increment = function () {
        count++;
        console.log(count);
    };
    this.decrement = function () {
        count--;
        console.log(count);
    }
}
var Counter1 = new counter();
Counter1.increment();
Counter1.decrement();
//disadvantage of closure is that it can lead to memory leaks if not used properly because the inner function retains a
// reference to the outer function's variables, which can prevent them from being garbage collected.
//or  it use lot of memory and if it is not handled properly it can lead to performance issues in the application.it is is not handled proprly it can lead to frezeed the brouser if handle properly
////////////////////////////////////////////////////////
//garbage collection is the process of automatically freeing up memory that is no longer being used by the program. in JavaScript, garbage collection is done automatically by the JavaScript engine,
//  which uses a technique called reference counting to keep track of which objects are still being used and which
//  can be safely removed from memory. when an object is no longer referenced by any part of the program, it becomes 
// eligible for garbage collection and the memory it occupies can be reclaimed by the system. however, if there are circular 
// references or if closures are not handled properly, it can lead to memory leaks where memory is not freed up even though it is no longer needed.

function a() {
    var x = 0, z = 10;
    return function b() {
        console.log(x);
    }
}
var y = a(); // Output: 0
y(); // Output: 0
//the z variable is not used in the inner function b, so it will not be retained in memory and can be garbage collected. however, the x variable is used in the inner function b, so it will be retained in memory until the inner function b is no longer referenced.
// in this example, the inner function b retains a reference to the variable x from the outer function a, even after a has finished executing. 
// This means that x will not be garbage collected until b is no longer referenced, which can lead to memory leaks if not handled properly.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
a();
b();
// Function Statement
function a() {
    console.log("Hello all");
}
a();

// function expression
var b = function () {
    console.log("Hello all");
}
b();

//in both the function statement and function expression the main difference is the hosting  if we call a() before
//  the function declaration it will work because of hosting but if we call b() before the
// function expression it will show error because the variable b is not hoisted but the function declaration is hoisted.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciton Declaration

/////////////////////////funciton statement is also known as function declaration.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Anonymous function
function () {
    console.log("Hello all");
}
//use like this
var a = function () {
    console.log("Hello all");
}
// is used in a place function as used as values.anonymous function are used as values also. you can use it as assigin to a variable
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Named function expression
var b = function namedFunction() {
    console.log("Hello all");
}
b();
namedFunction();//show error because namedFunction is not defined in the global scope it is only defined in the scope of the function expression.

//Difference between parameters and arguments ?
//parameters are the variables that are defined in the function declaration or function expression and they are used to receive the values when the function is called. they are also known as formal parameters.
var a = function (parameter1, parameter2) {// this are parameters
    console.log("Hello all");
}
a(1, 2);//arguments
//arguments are the values that are passed to the function when it is called. they are also known as actual parameters. they are used to provide input to the function and they can be accessed using the arguments object inside the function.
//first class function

// Arrow function



