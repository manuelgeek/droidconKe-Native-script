export function initialize(store) {

    // ? before a request is made start the nprogress
    axios.interceptors.request.use(config => {
        // config.headers['Access-Control-Allow-Origin']=  '*';
        config.headers['Content-Type']=  'application/json';
        config.headers['Api-Authorization-Key']=  process.env.API_KEY;
        console.log('Starting Request', config)
        // config.headers['Authorization'] = `Bearer ${decrypted}`
        return config
    })

// ? before a response is returned stop nprogress
    axios.interceptors.response.use(response => {
        // console.log(response)
        return response
    });

    axios.interceptors.response.use(null, (error) => {
        if (error.response) {
            /*
            * The request was made and the server responded with a
            * status code that falls out of the range of 2xx
            */
            if (error.response.status == 401) {
              //
            }
            if (error.response.status == 500 || error.response.status == 502) {
                //
            }
            if (error.response.status == 404) {
                //
            }
            // console.log(error.response)
        } else if (error.request) {
            /*
            * The request was made but no response was received, `error.request`
            * is an instance of XMLHttpRequest in the browser and an instance
            * of http.ClientRequest in Node.js
            */
            // console.log(error.request);
            // ? No Internet
        } else {
            // * Something happened in setting up the request and triggered an Error
            // console.log('Error', error.message);
            // router.push({name: 'no-internet'});
        }
        // console.log(error);
        return Promise.reject(error);
    });

    axios.defaults.baseURL = process.env.API_BASE_URL;

}
