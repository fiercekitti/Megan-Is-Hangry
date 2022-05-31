import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SjIQY_I4cueBel_5E48RA2uCRRskfDuIbfLCz1RkBsBEiiuTWwQuc3okNEzJ77CAMbqQ7s1jvepXPJPj7CosG-opUibuya2WagD2yZqBVUt1zzc8TosHkqzJHMliYnYx'
    }
});