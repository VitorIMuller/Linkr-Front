import axios from "axios";
const BASE_URL = "https://apilinkr.herokuapp.com/";

function signIn(formData) {
    const promise = axios.post(`${BASE_URL}/sign-in`, formData)
    return promise;
}

export default signIn