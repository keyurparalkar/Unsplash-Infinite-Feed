import { $axiosPublic } from "../utils/axios";
import { invokeApi } from "../utils/api";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

export const getRandomPhotos = (pageNumber, cancelToken) =>
    invokeApi($axiosPublic, '/photos/random', { 
        "client_id": CLIENT_ID, 
        "page": pageNumber,
        "count": 10   
    }, cancelToken, 'GET')
