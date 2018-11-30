import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 11fbfb1a6756f562c482b731e9466127a90d147e7affd726605056fbb7828643'
    }
});