
export class App{
    static getApiURL(){
        return import.meta.env.VITE_APP_URL;
    }

    static getName(){
        return import.meta.env.VITE_APP_NAME;
    }

    static getApiURLWithPath(path){
        let url = App.getApiURL();
        while(url.endsWith("/")){
            url = url.substring(0, (url.length - 1));
        }
        while(path.startsWith("/")){
            path = path.substring(1);
        }
        return `${url}/${path}`;
    }
}