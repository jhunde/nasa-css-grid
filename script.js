require('dotenv').config()

const API_KEY = process.env.API_KEY;
const APOD_ULR = 'https://api.nasa.gov/planetary/apod?api_key=${API_KEY}';
