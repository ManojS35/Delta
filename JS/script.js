// let a = 23;
// let b = 10;
// // let op = "The total price is : " + (a + b) + "Rupees."
// let op = `The total price is : ${a+b}Rupees.`;
// if(a<b){
//     console.log(op);
// } else{
//     console.error('There is an error');
// }
// let uname = prompt("enter your name");
// alert("Welcome " + uname);
// // console.log(uname);

// let name = prompt("Enter your name");
// let age = prompt("Enter you age");

// alert(`${name} is ${age} years old.`)

// let guess = prompt("Guess my favourite footballer");
// while((guess != 'messi') && (guess != 'quit')) {
//     guess = prompt("wrong, please try again");
// }
// if(guess == 'messi') {
//     console.log('correct')
// }

// let todo = []

// let req = prompt("Please enter your request");

// while(true) {
//     if(req == 'quit') {
//         console.log("Quitting app");
//         break;
//     } else if(req == 'list') {
//         console.log("----------");
//         for(task of todo) {
//             console.log(task);
//         }
//         console.log("----------");
//     } else if(req == 'add') {
//         let task = prompt("Please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     } else if(req == 'delete') {
//         todo.pop();
//         console.log("task deleted");
//     } else {
//         console.log("Wrong request");
//     }

//     req = prompt("Please enter your request");
// }

// let length=4;
// function callback() {
//     console.log(this.length);
// }
// const object = {
//     length:5,
//     method(callback) {
//         callback();
//     },
// };
// object.method(callback,1,2);
// const object={message:'Hello,World!',logMessage(){console.log(this.message);}};
// setTimeout(object.logMessage,1000);

let arr = [4, 7, 3, 233, 3, 34, 20, 1];

// let maxm = arr.reduce((res, el) => (Math.min(res, el)));
// console.log(maxm);

// let all = arr.every((num) => (num % 10 == 0));
// console.log(all);

function func(a, b=2) {
    return a + b;
}
let word = 'manoj';
let newWord = word.toUpperCase();
console.log(newWord);
// console.log(func(2));

function doubleAndReturnArgs(arr, ...args) {
    let double = (args).map((el) => (el * 2));
    return [...arr, ...double];
}

console.log(doubleAndReturnArgs([1,2,3,4], 5, 6, 7, 8));