import axios from 'axios';
const KEY = 'AIzaSyAFyfQjzrmbjg6TtepK9BJ2cmbit2r7Lh8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})