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
    // const output = document.getElementById("output");
    // output.textContent = "Loading...";

    const item_content_1 = document.getElementById("item_content_1");
    const item_content_2 = document.getElementById("item_content_2");
    const item_content_3 = document.getElementById("item_content_3");
    const item_content_4 = document.getElementById("item_content_4");
    const item_content_5 = document.getElementById("item_content_5");
    const item_content_6 = document.getElementById("item_content_6");
    const item_content_7 = document.getElementById("item_content_7");
    const item_content_8 = document.getElementById("item_content_8");
    const item_content_9 = document.getElementById("item_content_9");
    const item_content_10 = document.getElementById("item_content_10");
    

    try{
        const res = await fetch("/api/apod?count=10");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        console.log(data);
        const apods = Array.isArray(data) ? data: [data];
        console.log('apods[0]: ',apods[0]);
        
        /* Comment out for now 
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
        */

        
        item_content_1.innerHTML = (
            `<h2> ${apods[0].title};</h2>
            ${ 
                apods[0].media_type === "image"
                    ? `<img src="${apods[0].url}" alt="${apods[0].title}" style="max-width:600px;">`
                    : `<a href="${apods[0].url}" target="_blank" rel="noreferrer">Open media</a>`     
            }`
        )
        item_content_2.innerHTML = (
            `<h2> ${apods[1].title};</h2>
            ${ 
                apods[1].media_type === "image"
                    ? `<img src="${apods[1].url}" alt="${apods[1].title}" style="max-width:600px;">`
                    : `<a href="${apods[1].url}" target="_blank" rel="noreferrer">Open media</a>`     
            }`
        )
        item_content_3.innerHTML = (
            `<h2> ${apods[2].title};</h2>
            ${ 
                apods[2].media_type === "image"
                    ? `<img src="${apods[2].url}" alt="${apods[2].title}" style="max-width:600px;">`
                    : `<a href="${apods[2].url}" target="_blank" rel="noreferrer">Open media</a>`     
            }`
        )
        item_content_4.innerHTML = (
            `<h2> ${apods[3].title};</h2>
            ${ 
                apods[3].media_type === "image"
                    ? `<img src="${apods[3].url}" alt="${apods[3].title}" style="max-width:600px;">`
                    : `<a href="${apods[3].url}" target="_blank" rel="noreferrer">Open media</a>`     
            }`
        )
        item_content_5.innerHTML = (
            `<h2> ${apods[4].title};</h2>
            ${ 
                apods[4].media_type === "image"
                    ? `<img src="${apods[4].url}" alt="${apods[4].title}" style="max-width:600px;">`
                    : `<a href="${apods[4].url}" target="_blank" rel="noreferrer">Open media</a>`     
            }`
        )

        item_content_6.innerHTML = (
            `<h2> ${apods[5].title};</h2>
            ${ 
                apods[5].media_type === "image"
                    ? `<img src="${apods[5].url}" alt="${apods[5].title}" style="max-width:600px;">`
                    : `<a href="${apods[5].url}" target="_blank" rel="noreferrer">Open media</a>`     
            }`
        )
        item_content_7.innerHTML = (
            `<h2> ${apods[6].title};</h2>
            ${ 
                apods[6].media_type === "image"
                    ? `<img src="${apods[6].url}" alt="${apods[6].title}" style="max-width:600px;">`
                    : `<a href="${apods[6].url}" target="_blank" rel="noreferrer">Open media</a>`     
            }`
        )
        item_content_8.innerHTML = (
            `<h2> ${apods[7].title};</h2>
            ${ 
                apods[7].media_type === "image"
                    ? `<img src="${apods[7].url}" alt="${apods[7].title}" style="max-width:600px;">`
                    : `<a href="${apods[7].url}" target="_blank" rel="noreferrer">Open media</a>`     
            }`
        )
        item_content_9.innerHTML = (
            `<h2> ${apods[8].title};</h2>
            ${ 
                apods[8].media_type === "image"
                    ? `<img src="${apods[8].url}" alt="${apods[8].title}" style="max-width:600px;">`
                    : `<a href="${apods[8].url}" target="_blank" rel="noreferrer">Open media</a>`     
            }`
        )
        item_content_10.innerHTML = (
            `<h2> ${apods[9].title};</h2>
            ${ 
                apods[9].media_type === "image"
                    ? `<img src="${apods[9].url}" alt="${apods[9].title}" style="max-width:600px;">`
                    : `<a href="${apods[9].url}" target="_blank" rel="noreferrer">Open media</a>`     
            }`
        )
    }
    catch(error){
        console.error(error)
        // document.getElementById("output").textContent = "Failed to load APOD.";
        document.getElementById("item_content_1").textContent = "Failed to load APOD.";
        document.getElementById("item_content_2").textContent = "Failed to load APOD.";
        document.getElementById("item_content_3").textContent = "Failed to load APOD.";
        document.getElementById("item_content_4").textContent = "Failed to load APOD.";
        document.getElementById("item_content_5").textContent = "Failed to load APOD.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchApod();
});