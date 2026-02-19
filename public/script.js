async function fetchApod (){
  
    const grid = document.getElementById("grid");
    grid.textContent = "Loading...";
    
    try{
        const res = await fetch("/api/apod?count=10");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        console.log(data);
        const apods = Array.isArray(data) ? data: [data];
        console.log('apods[0]: ',apods[0]);
        
        grid.innerHTML = apods.map(apod => {
            const media = 
                apod.media_type === "image"
                ? `<img src="${apod.url}" alt="${apod.title}" style="max-width:600px;">`
                : `<a href="${apod.url}" target="_blank" rel="noreferrer">Open media</a>`; 

                return `
                    <div class="items">
                        <h2>${apod.title}</h2>
                        <p>${apod.date}</p>
                        ${media}
                    </div>
                `;
        }).join("");
    }
    catch(error){
        console.error(error);
        grid.textContent = "Faild to load APOD!"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchApod();
});