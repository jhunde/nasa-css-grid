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
    const output = document.getElementById("output");
    output.textContent = "Loading...";

    // const item = document.getElementById("item");
    // const item_content_1 = document.getElementById("item_content_1");
    // const item_content_2 = document.getElementById("item_content_2");
    // const item_content_3 = document.getElementById("item_content_3");
    // const item_content_4 = document.getElementById("item_content_4");
    // const item_content_5 = document.getElementById("item_content_5");

    try{
        const res = await fetch("/api/apod?count=5");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        console.log(data);
        const apods = Array.isArray(data) ? data: [data];
        console.log('apods[0]: ',apods[0]);
        
        // Comment out for now 
        output.innerHTML = apods.map(apod => `
            <article style="margin-bottom: 2rem;">
                <h2>${apod.title}</h2>
                <p>${apod.date}</p>
                ${ 
                    apod.media_type === "image"
                        ? `<img src="${apod.url}" alt="${apod.title}" style="max-width:600px;">`
                        : `<a href="${apod.url}" target="_blank" rel="noreferrer">Open media</a>`     
                }
            </article>
        `).join("");

        
        // item_content_1.innerHTML = apods[0];
        // item_content_2.innerHTML = apods[1];
        // item_content_3.innerHTML = apods[2];
        // item_content_4.innerHTML = apods[3];
        // item_content_5.innerHTML = apods[4];

    }
    catch(error){
        console.error(error)
        document.getElementById("output").textContent = "Failed to load APOD.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchApod();
});