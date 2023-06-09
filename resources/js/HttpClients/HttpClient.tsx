
import axios from 'axios';

export class HttpClient{


    static get(url){
        return axios.get(`${url}`);
    }

    static post(url, data){
        return axios.post(`${url}`, data);
    }

    
}

