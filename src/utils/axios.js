import Axios from 'axios';

export const $axiosPublic = Axios.create({
    baseURL:'https://api.unsplash.com/',
    timeout:10000   
});