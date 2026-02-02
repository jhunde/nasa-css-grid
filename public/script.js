// require('dotenv').config()

// const API_KEY = process.env.API_KEY;
// const APOD_ULR = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

/*
async function fetchApod() {
    try {
        const response = await fetch(APOD_ULR);
        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);  // for debugging

    } catch(error) {
        console.error('Error fetching data:', error);
    }
}
*/

async function fetchApod (){
    try{
        const res = await fetch("/api/apod");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        console.log(data);

        const output = document.getElementById("output");
        output.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.date}</p>
            <p>${data.explanation}</p>
        ${ 
            data.media_type === "image"
          ? `<img src="${data.url}" alt="${data.title}" style="max-width:600px;">`
          : `<a href="${data.url}" target="_blank" rel="noreferrer">Open media</a>`
    
            
        }`;
    }
    catch(error){
        console.error(error)
        document.getElementById("output").textContent = "Failed to load APOD.";
    }
}

async function fetchEpic(){
    try{
        const response = await fetch("/api/epic");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("EPIC: ", data);
    } 
    catch(error){
        console.error("fetchEpic error: ",error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    fetchApod();
    fetchEpic();
});