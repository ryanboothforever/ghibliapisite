//Make a way for when the user clicks a character's image, the name of that character is saved as a variable
document.querySelectorAll('.char').forEach(item => {
    item.addEventListener('click', event => {
        if (event.localName = "img")
            getInfo(event.target.alt);
    })
})
let characterArray=[];
let url = 'https://ghibliapi.herokuapp.com/people/'
function getCharacters(){
    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            characterArray=data
        })
}
function getInfo(n){
    const name = n
    for(let i =0;i<characterArray.length;i++){
            if (name === characterArray[i].name) {
                //Once the character entered matches a charcter in the array, save the ID of the URL
            const character = characterArray[i];
            document.querySelector("#chName").innerText = character.name;
            if(character.hair_color.includes("Bald")){
                let baldArray = character.hair_color.split(" ");
                baldArray.splice(2, 0, "his")        
                baldArray = baldArray.join(" ");
                document.querySelector("#chBio").innerText = `${character.name} is ${baldArray.toLowerCase()} and has ${character.eye_color.toLowerCase()} colored eyes.`;
            }else if 
            (character.hair_color.includes("None"))
                {
                    document.querySelector("#chBio").innerText = `${character.name} is bald and has ${character.eye_color.toLowerCase()} colored eyes.`;
            } else {
            document.querySelector("#chBio").innerText = `${character.name} has ${character.hair_color.toLowerCase()} hair and ${character.eye_color.toLowerCase()} colored eyes.`;
            }
        fetch(character.films[0]) 
        .then(res=>res.json())
        .then(data=>{
             document.querySelector("#chBio").innerText += ` This character appears in the movie "${data.title}".`
        })
        .catch(err=>{
            console.log(`error ${err}`);
            })
        }            
}   
}
getCharacters()