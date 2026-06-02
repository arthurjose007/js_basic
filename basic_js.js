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
// functions as a function
var a = function (parameter1, parameter2) {// this are parameters
    console.log(parameter1);
}
function x(callback) {
    callback(10, 20);
}
console.log(x(a));
//or
var a = function (parameter1, parameter2) {// this are parameters
    console.log(parameter1);
    return parameter1 + parameter2;
}
function x(callback) {
    callback(10, 20);
}
console.log(x(a));
// Arrow function
var a = (parameter1, parameter2) => {
    console.log(parameter1);
    return parameter1 + parameter2;
}
//or
var a = (parameter1, parameter2) => parameter1 + parameter2;
console.log(a(10, 20));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//call back funcitonin js.event listeners
///What is a callback funciton in javascript?
//a function that call a funciton is callback function.

////////////////////////////////////////////////////////////////
//javascript is a synchronous and single-threaded language. ////
////
////////////////////////////////////////////////////////////////
setTimeout(function () {
    console.log("timer");
}, 5000);
function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("Y");
});
//A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. it is a way to ensure that a function is not executed until a certain event has occurred or a certain condition has been met. callback functions are commonly used in asynchronous programming, where they allow you to handle the results of an operation once it has completed without blocking the main thread of execution.



document.getElementById("myButton").addEventListener("click", function xyc() {
    console.log("Button clicked!", ++count);
});


//----------------------------------------------------------------------------------------
function attachEventListener() {

    let count = 0;
    document.getElementById("myButton").addEventListener("click", function xyc() {
        console.log("Button clicked!", ++count);
    });
}
attachEventListener();
//In this example, the function xyc is a callback function that is passed to the addEventListener method. it will be executed every time the button with the id "myButton" is clicked, and it will log the message "Button clicked!" along with the number of times the button has been clicked.

//javaScript is a synchronous and single-threaded language


// Power of Callbacks?

//Deep about Event listeners

//Closures Demo with Evernt Listeners

//scope demo with event listeners

//Garbage Collection and removeEVentListeners

/////////////////////////////////////////////////////////////////////////////////////////////////

//Event Loop
function a() {
    console.log("a");
}
a();
console.log("end");

//web API
//window
"1*----setTimeout()"
"2*----Dom Apis"
"3*----fetch()"
"4*----Local Storage"
"5*----Console --api "
"6*----Location"

// browser super power 

//it wrap up the all super power and give access  the the call stack or js engine.
console.log("start");

setTimeout(function cb() {
    console.log("callback function");
}, 5000);


console.log("end");

///////////////////////////////////////////////////////////////////////////////////////
console.log("start");
document.getElementById("btn").addEventListener("click", function cb() {
    console.log("Button clicked!");
});
console.log("end");


//the cb will save in hte callback queue
//event loop job it to continuously monitor the call stack and the callback queue. 
// if the call stack is empty then it will push the first function from the callback queue to the 
// call stack and execute it. if the call stack is not empty then it will wait until the
//  call stack is empty and then it will push the first function from the callback queue
// to the call stack and execute it.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//fetch
console.log("start");

setTimeout(function cb() {
    console.log("CB SetTimeout");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function cb2(response) {
        console.log("CB Fetch");

    })
console.log("end");

//when you run it will send a call to hte jsonplaceholder API and then it will send  request to the server then it will give  response to to the cb2 will execute
// in this case the first start wil print first then the end will print because it is in the call stack and it will execute first then the the event loop will continue to monitor the call stack  and it also see there are some task in the microtask queue cb2 give the chance to call stack it will run pop then go to the cb to call  stack then execute and
//if the api is super fast like 50ms then the cb2 will execute  no this is where the microtask queue comes in to play. the microtask queue has higher priority than the callback queue. so if there is any function in the microtask queue then it will execute before
//  the callback queue. so in this case the cb2 will execute before the cb of setTimeout because the cb2 is in the microtask queue and the cb of setTimeout is in the callback queue. so the output will be "start", "end", "CB Fetch", "CB SetTimeout" because the cb2 is in the microtask queue and it will execute before the cb of setTimeout which is in the callback queue.
///////////////////////////////////////////////////////////////////////////////////////////
//javaScript RunTime Environment
//js Engine  --browser and node js
//1*----Call Stack
//2*----Web APIs
//3*----Callback Queue
//4*----Event Loop
//5*----Microtask Queue 
/////////////////////////////////////////////////////////////////////////////////
//ECMAScript is a standard for scripting languages like JavaScript. it defines the syntax, 
// semantics, and behavior of the language. ECMAScript is developed and maintained by the 
// ECMA International organization. the latest version of ECMAScript is ECMAScript 2021 (ES12)
//  which was released in June 2021. ECMAScript is the foundation of JavaScript and all modern
//  JavaScript engines implement the ECMAScript specification to ensure compatibility across different 
//platforms and browsers.

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//code -> parsing -> compiling -> execution
//tokens 
let a = 10;
//token -> a, =, 10, ;
//parsing -> it will check the syntax of the code and it will create an abstract syntax tree (AST) which is a tree representation of the code. it will also check for any syntax errors in the code and if there are any syntax errors then it will throw an error and stop the execution of the code.
//compiling -> it will convert the AST into bytecode which is a low-level representation of the code that can be executed by the JavaScript engine. it will also optimize the code for better performance.
//execution -> it will execute the bytecode and produce the output.

//abstract syntax tree (AST) is a tree representation of the code that is generated by the parser. it is a hierarchical structure that represents the syntax of the code. each node in the tree represents a construct in the code such as a variable declaration, a function declaration, a loop, etc. the AST is used by the compiler to generate bytecode and optimize the code for better performance.
//jit compilation

//interpretter :- it will execute the code line by line and it will not optimize the code for better performance. it is slower than the compiler because it does not optimize the code.

//compiler :- it will convert the code into bytecode and optimize the code for better performan ce. it is faster than the interpretter because it optimizes the code.

//memory heap :- it is a region of memory that is used for dynamic memory allocation. it is used to store objects, arrays, and other data structures that are created at runtime. the memory heap is managed by the JavaScript engine and it is automatically garbage collected when it is no longer needed.

//garbage collection :- it is the process of automatically freeing up memory that is no longer being used by the program. in JavaScript, garbage collection is done automatically by the JavaScript engine, which uses a technique called reference counting to keep track of which objects are still being used and which can be safely removed from memory. when an object is no longer referenced by any part of the program, it becomes eligible for garbage collection and the memory it occupies can be reclaimed by the system. however, if there are circular references or if closures are not handled properly, it can lead to memory leaks where memory is not freed up even though it is no longer needed.

//mark and sweep algorithm :- it is a garbage collection algorithm that is used by the JavaScript engine to free up memory that is no longer being used. it works by marking all the objects that are still being used and then sweeping through the memory heap to free up the memory occupied by the unmarked objects. this algorithm is efficient and it helps to prevent memory leaks in JavaScript applications.

//inlining
//copy elision
//inline cashing
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//v8 engine is a JavaScript engine developed by Google for the Chrome browser. it is designed to improve the performance of JavaScript code by using a combination of just-in-time (JIT) compilation and optimization techniques. v8 uses a technique called inline caching to optimize property access and method calls, which can significantly improve the performance of JavaScript code. it also uses a technique called copy elision to optimize the creation of objects and arrays, which can further improve performance. overall, v8 is a powerful JavaScript engine that helps to make web applications faster and more responsive.

//terbo fan is a JavaScript engine developed by Google for the Chrome browser. it is designed to improve the performance of JavaScript code by using a combination of just-in-time (JIT) compilation and optimization techniques. terbo fan uses a technique called inline caching to optimize property access and method calls, which can significantly improve the performance of JavaScript code. it also uses a technique called copy elision to optimize the creation of objects and arrays, which can further improve performance. overall, terbo fan is a powerful JavaScript engine that helps to make web applications faster and more responsive.


//orinoco is a JavaScript engine developed by Mozilla for the Firefox browser. it is designed to improve the performance of JavaScript code by using a combination of just-in-time (JIT) compilation and optimization techniques. orinoco uses a technique called inline caching to optimize property access and method calls, which can significantly improve the performance of JavaScript code. it also uses a technique called copy elision to optimize the creation of objects and arrays, which can further improve performance. overall, orinoco is a powerful JavaScript engine that helps to make web applications faster and more responsive.

//both the browser and the node js have the runtime environment for javascript
// and it constitute the hart of the javascript  environmetnt it have access to the api , call back queue, event loop, microtask queue and the call stack. it also have access to the memory heap and garbage collection. it also have access to the ECMAScript specification which defines the syntax, semantics, and behavior of the language. the runtime environment is responsible for executing the JavaScript code and providing access to the various features of the language.

//javascript engine it have many phases the code it go through the parsing phase then the compilation phase and then the execution phase. in the parsing phase it will token are generated and it will create an abstract syntax tree (AST) which is a tree representation of the code.  then it pass to the interpretter then the compilation phase it will convert the AST into bytecode which is a low-level representation of the code that can be executed by the JavaScript engine. in the execution phase it will execute the bytecode and produce the output. the JavaScript engine also uses a technique called just-in-time (JIT) compilation to optimize the code for better performance. it also uses a technique called inline caching to optimize property access and method calls, which can significantly improve the performance of JavaScript code.it uses the memory heap and the call stack to manage memory and execute the code. it also uses garbage collection to free up memory that is no longer being used by the program. overall, the JavaScript engine is a powerful tool that helps to make web applications faster and more responsive by optimizing the execution of JavaScript code.
// so many optimization techniques are used by the JavaScript engine to improve the performance of JavaScript code, such as inlining, copy elision, and inline caching. these techniques help to reduce the overhead of function calls and property access, which can significantly improve the performance of JavaScript code. overall, the JavaScript engine is a complex and powerful tool that helps to make web applications faster and more responsive by optimizing the execution of JavaScript code.
//inlining is a technique used by the JavaScript engine to optimize function calls by replacing the function call with the actual code of the function. this can help to reduce the overhead of function calls and improve performance, especially for small functions that are called frequently.
//copy elision is a technique used by the JavaScript engine to optimize the creation of objects and arrays by eliminating unnecessary copying of data. this can help to reduce memory usage and improve performance, especially for large objects and arrays.
//inline caching is a technique used by the JavaScript engine to optimize property access and method calls by caching the results of previous property lookups and method calls. this can help to reduce the overhead of property access and method calls and improve performance, especially for frequently accessed properties and methods.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//trust issues with setTimeout and setInterval

//setTimeout and setInterval are not always reliable because they are based on the event loop and the callback queue, which can be affected by other tasks that are running in the call stack. if there are other tasks that are running in the call stack, it can delay the execution of the callback function and cause it to run later than expected. this can lead to unexpected behavior in your code, especially if you are relying on setTimeout or setInterval to perform time-sensitive tasks. it is important to be aware of these potential issues and to use setTimeout and setInterval with caution, especially in situations where timing is critical.
//eg:

console.log("start");

setTimeout(function cb() {
    console.log("callback function");
}, 5000);

console.log("end");

//in this example, the callback function will be executed after 5 seconds, but if there are other tasks that are running in the call stack, it can delay the execution of the callback function and cause it to run later than expected. this can lead to unexpected behavior in your code, especially if you are relying on setTimeout to perform time-sensitive tasks. it is important to be aware of these potential issues and to use setTimeout with caution, especially in situations where timing is critical.

//concurency model

// set a timeout for 5 seconds
console.log("start");
setTimeout(function cb() {
    console.log("callback function");
}, 5000);

console.log("end");

//million code for eg take one eg

console.log("start");
setTimeout(function cb() {
    console.log("callback function");
}, 5000);

console.log("end");

//million code for eg take one eg

let start = Date.now();
let enddate = start;
while (enddate < start + 10000) {
    enddate = Date.now();
}
console.log("while loop finished");


//////////////////////////////////////////////////////////////////////////////////////////////////


