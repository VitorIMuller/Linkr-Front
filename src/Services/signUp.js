import axios from "axios";
const BASE_URL = "https://apilinkr.herokuapp.com";

function signUp(formData) {
    const promise = axios.post(`${BASE_URL}/sign-up`, formData)
    return promise;
}

export default signUp