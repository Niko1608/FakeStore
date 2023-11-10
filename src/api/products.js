import { API_HOST } from "../utils/constants";

export async function getProductsApi() {
    try {
        const url = `${API_HOST}/products?limit=20&offset=0`;   //Construimos la URL
        const response = await fetch(url);  //Ejetamos la Peticion HTTP
        const result = await response.json();   //Recuperamos los datos y formateamos a Json
        return result;  //retornamos los datos
    } catch (error) {
        throw error;
    }
}