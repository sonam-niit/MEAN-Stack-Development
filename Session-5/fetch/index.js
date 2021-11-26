const URL="https://ghibliapi.herokuapp.com/people";

const main= document.getElementById("main");

main.innerHTML="<p>loading data.....";

fetch(URL)
.then((response)=>response.json())
.then((peoples)=>main.innerHTML = getListofNames(peoples))
.catch((error)=>console.error(error));

const getListofNames = (list)=>{
    const names=list
    .map((person)=>`<li>${person.name} ${person.eye_color}</li>`)
    .join("\n");

    return `<ul>${names}</ul>`
}

