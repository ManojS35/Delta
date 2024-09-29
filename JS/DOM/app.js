// let para1 = document.createElement('p');
// para1.innerText = "Hi I'm Red";
// document.querySelector('body').append(para1);
// para1.classList.add('red');

// let h3 = document.createElement('h3');
// h3.innerText = "Hi I'm Blue h3";
// document.querySelector('body').append(h3);
// h3.classList.add('blue');

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');
// h1.innerText = "I'm a div";
// para2.innerText = "Me Too!";

// div.append(h1);
// div.append(para2);
// document.querySelector('body').append(div);
// div.classList.add('pinkbg');
// div.classList.add('blackborder');

// let inp = document.createElement('input');
// inp.placeholder = "username";
// let btn = document.createElement('button');
// btn.innerText = "Click me";
// btn.id = 'btn';
// console.dir(btn);
// document.querySelector('body').append(inp);
// document.querySelector('body').append(btn);

// let b = document.querySelector('#btn');
// b.classList.add('bluebg-whitecol');

// let h1 = document.createElement('h1');
// h1.innerText = "DOM Practice";
// document.querySelector('body').append(h1);
// h1.classList.add('h1-dec');

// let para = document.createElement('p');
// para.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector('body').append(para);

// let btn = document.querySelector('button');

// btn.addEventListener("click", function() {
//     let randomCol = getRandomCol();
//     let h3 = document.querySelector('h3');
//     h3.innerText = randomCol;
//     let div = document.querySelector('div');
//     div.style.backgroundColor = randomCol;

//     console.log("Color Updated");
// });

// function getRandomCol() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     return `rgb(${red},${green},${blue})`;
// }

// let div = document.getElementById('test');
// test.addEventListener('mouseleave',
//     (event) => {
//         event.target.style.color = 'purple';
//         setTimeout(() => {
//             event.target.style.color = '';
//         }, 1000);
//     },
//     false,
// );
// test.addEventListener("mouseout",
//     (event) => {
//         event.target.style.color = 'orange';
//         setTimeout(() => {
//             event.target.style.color = '';
//         }, 500);
//     },
//     false,
// );
// window.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
//   });

const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
    log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
    log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
    log.textContent += `DOMContentLoaded\n`;
});



