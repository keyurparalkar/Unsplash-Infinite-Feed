import { $axiosPublic } from "../utils/axios";
import { invokeApi } from "../utils/api";

export const getRandomPhotos = () =>
    invokeApi($axiosPublic, '/photos/random', { "client_id": '6c446b49b72a4c559d9b9d67183d5c1de1981d16f309063c3b994086e6ce1a26', "cound": 10 }, 'GET')