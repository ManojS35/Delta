let task = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click',
    (event) => {
        newLi = document.createElement('li');
        if (task.value != "") {
            newLi.innerHTML = `${task.value} <button class="delete">Delete</button>`;
            ul.append(newLi);
        }
    },
);

// let delBtns = document.querySelectorAll('.delete');
// for (delBtn of delBtns) {
//     delBtn.addEventListener('click',
//         function(){
//             let par = this.parentElement;
//             console.log(par);
//             par.remove();                   //but is does not gets applied for newly created elements
//         });
// }

ul.addEventListener('click',
    function(event) {
        if(event.target.nodeName == "BUTTON") {     //nodeName -> what triggered event
            let par = event.target.parentElement;
            console.log(event.target.parentElement.innerText);
            par.remove();
        }
    }
);