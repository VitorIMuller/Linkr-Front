import axios from "axios";
const BASE_URL = "http://localhost:4000";

function signIn(formData) {
    const promise = axios.post(`${BASE_URL}/sign-in`, formData)
    return promise;
}

export default signIn