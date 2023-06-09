import {HttpClient} from "./HttpClient";

export class AffiliateHttpClient extends HttpClient{

    static getAll(){
        return HttpClient.get(`api/affiliate/getAll`);
    }

}