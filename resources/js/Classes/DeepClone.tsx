
export class DeepClone{
    static make(data){
        return JSON.parse(JSON.stringify(data));
    }
}