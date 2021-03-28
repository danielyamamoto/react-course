import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactjs-myburgerapp-default-rtdb.firebaseio.com/',
});

export default instance;