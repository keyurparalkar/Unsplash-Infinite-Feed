export const invokeApi = (axiosInstance, path, params={}, method = 'GET') => {
        switch(method){
            case 'POST':
                return axiosInstance.post(path, {
                    "params":params
                }).then(resp => resp).catch(err => {throw err});

            default: 
                return axiosInstance.get(path, {
                    "params":params
                }).then(resp => resp).catch(err => {throw err});
        }
        
    }

        
