import { useState, useEffect } from 'react';
import axios from 'axios';

import { getRandomPhotos } from "../services/api.services";

//Create axios cancel tokens:
const cToken = axios.CancelToken;
const call1 = cToken.source();


const usePhotos = (pageNumber) => {
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [photoData, setPhotoData] = useState([]);

    useEffect(async ()=>{
        setLoading(true);
        setError(false);
        
        await getRandomPhotos(pageNumber, call1)
            .then(res => {
                setPhotoData(prevPhotos => [...prevPhotos, ...res.data]);
                setLoading(false);
            }).catch(err => {
                if(axios.isCancel(err)) return
                setError(true);
            })

        return () => call1.cancel()

    },[pageNumber])

    return {Loading, error, photoData}
}

export default usePhotos;
