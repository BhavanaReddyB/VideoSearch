import axios from 'axios';

const KEY = "Your_Client_API_KEY";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults:6,
        type:'video',
        key:KEY
    }
});

