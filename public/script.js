require('dotenv').config()

const API_KEY = process.env.API_KEY;
const APOD_ULR = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

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

        
    }
    catch(error){
        console.error(error)
        document.getElementById("output").textContent = "Failed to load APOD.";
    }
}
fetchApod();