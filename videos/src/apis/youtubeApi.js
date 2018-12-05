import axios from "axios";

const KEY = "AIzaSyCc8l-yphd16hVtPIt57Xtqf7GQCdDpg7o";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params : {
        maxResults: 5,
        part: 'snippet',
        key: KEY
    }
});