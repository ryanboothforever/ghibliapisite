//Make a way for when the user clicks a character's image, the name of that character is saved as a variable

document.querySelectorAll('.char').forEach(item => {
    item.addEventListener('click', event => {
        if (event.localName = "img")
            getInfo(event.target.alt);
    })
})

function getInfo(n){
const name = n
let url = 'https://ghibliapi.herokuapp.com/people/'

fetch(url)
    .then(res => res.json())
    .then(data => {
        for(let i =0;i<data.length;i++){
                if (name === data[i].name) {
                    //Once the character entered matches a charcter in the array, save the ID of the URL
                       url = url + data[i].id
                }            
            
    }   
    fetch(url) 
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            document.querySelector("#chName").innerText = data.name;
            document.querySelector("#chBio").innerText = `${data.name} has ${data.hair_color} hair and ${data.eye_color} colored eyed.`
        })
           
})  
   
    .catch(err=>{
        console.log(`error ${err}`);
    })
}




/*Asynchronis code below*/

// document.querySelector('#submit').addEventListener("click", getCharacter)

// function getCharacter() {
//     let character = document.querySelector('input').value
//     let url = 'https://ghibliapi.herokuapp.com/people/'
   
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             for (let i = 0; i < data.length; i++) {
//                 if (character === data[i].name) {
//                     //Once the character entered matches a charcter in the array, save the ID of the URL
//                     url = url + data[i].id
//                 }
//             }
//         })
          
//         .catch(err => {
//             console.log(`error ${err}`);
//         })
// }

// function getMovie(){
//     let films = 'https://ghibliapi.herokuapp.com/films'
//     fetch(films)
//         .then(res => res.json())
//         .then(data => {
//             return data.title
//         })
//         .catch(err => {
//             console.log(`error ${err}`);
//         })
// }


// fetch()
//     .then(res => res.json())
//     .then(data => {
//         document.querySelector("#chName").innerText = data.name;
//         document.querySelector("#chBio").innerText = `${data.name} has ${data.hair_color} hair and ${data.eye_color} eyes and is a` + movie
