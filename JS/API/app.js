let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res) => {
//     // console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log(data2.fact);
// })
// .catch((err) => {
//     console.log('Error -', err);
// });

// console.log('hi');

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2);
//     }catch(e) {
//         console.log('error', e);
//     }
//     console.log('bye');
// }

// async function getFacts() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.fact;
//     }catch(e) {
//         console.log('Error', e);
//         return "No fact found!";
//     }
//     // console.log('bye');
// }
// btn.addEventListener('click', async () => {
//     let fact = await getFacts();
//     let res = document.querySelector('#res');
//     res.innerText = fact;
// })

// let url2 = 'https://dog.ceo/api/breeds/image/random';
// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         console.log(res);
//         return res.data.message;
//     }catch(e) {
//         console.log('Error', e);
//         return "No image found!";
//     }
// }
// let btn = document.querySelector('button');

// btn.addEventListener('click', async () => {
//     let dogImg = await getImage();
//     let res = document.querySelector('img');
//     // res.src = dog;
//     res.setAttribute('src', dogImg);
//     // console.log(fact);
// })

// let url3 = 'https://icanhazdadjoke.com/';
// async function getJokes() {
//     try {
//         let config = {headers : {Accept : 'application/json'}}
//         let res = await axios.get(url3, config);
//         console.log(res.data);
//     } catch(e) {
//         console.log('error - ', e);
//     }
// }

let url4 = 'http://universities.hipolabs.com/search?country=India';

async function getCollege(province) {
    try {
        let res = await axios.get(url4);
        let colleges = res.data;

        colleges = colleges.filter(college => 
            college['state-province'] && 
            college['state-province'].toLowerCase() === province.toLowerCase()
        );
        console.log(colleges);
        return colleges;
    } catch(e) {
        console.log('Error - ', e);
        return 'No colleges found!';
    }
}

let btn = document.querySelector('button');
btn.addEventListener('click', async() => {
    let inp = document.querySelector('input');
    let colleges = await getCollege(inp.value);
    
    showCol(colleges);
});

showCol = (colleges) => {
    let list = document.querySelector('ol');
    list.innerText = '';
    for(college of colleges) {
        let newCol = document.createElement('li');
        newCol.innerText = college.name;
        list.append(newCol);
        // console.log(college.name);
    }
}