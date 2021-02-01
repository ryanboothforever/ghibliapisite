document.querySelector('#submit').addEventListener("click", findData)

function findData(){
let character = document.querySelector('input').value
let url = 'https://ghibliapi.herokuapp.com/people/'

fetch(url)
    .then(res => res.json())
    .then(data => {
        for(let i =0;i<data.length;i++){
                if (character === data[i].name) {
                    //Once the character entered matches a charcter in the array, save the ID of the URL
                       url = url + data[i].id
                }            
            
    }   
    fetch(url) 
        .then(res=>res.json())
        .then(data=>{
            document.querySelector("#chName").innerText = data.name;
            document.querySelector("#chBio").innerText = `${data.name} has ${data.hair_color} hair and ${data.eye_color} eyes and is a`
        })
           
})  
   
    .catch(err=>{
        console.log(`error ${err}`);
    })
    // fetch(charUrl)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
}
