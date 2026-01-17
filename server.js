import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

const NASA_API_KEY = process.env.API_KEY;
// Does API key exist in the .env file
if (!NASA_API_KEY){
    console.error("Missing NASA_API_KEY in .env");
    process.exit(1);
}

// Serve you frontend files
app.use(express("public"));

// Proxy endpoint: browswer -> your server -> NASA
app.get("/api/apod", async (req, res) => {
    try{
        // const APOD_ULR = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
        const url = new URL("https://api.nasa.gov/planetary/apod");
        url.searchParams.set("api_key", NASA_API_KEY)


        // Optional: allow date passthrough like /api/apod?date=2026-01-01
        if (req.query.date) url.searchParams.set("date", req.query.date);

        const nasaRes = await fetch(url);
        const text = await nasaRes.text();  // read as text first, then forward

        res.status(nasaRes.status)
        res.type(nasaRes.headers.get("content-type") || "application/json");
        res.send(text)
    
    } catch (err) {
        console.error(err)
        res.status(500).json({error: "Server error fetching APOD"});
    } 
});

app.listen(PORT, () => {
    console.log("Server running at https:/localhost:${POST}");
});