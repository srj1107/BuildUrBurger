import axios from 'axios';

const instance = axios.create({
    //baseURL for all the endpoints (database managment)
    baseURL: 'https://dynamic-burger-default-rtdb.firebaseio.com/'
});

export default instance;