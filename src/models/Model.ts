import { Model as BaseModel } from "vue-api-query";
 
export default class Model extends BaseModel {
    baseURL() {
        return "http://localhost:3000"; //configura a url
    }
 
    request(config: any) {
        return this.$http.request(config);
    } 
}