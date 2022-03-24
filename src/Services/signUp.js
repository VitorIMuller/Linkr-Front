import axios from "axios";
const BASE_URL = "http://localhost:4000";

function signUp(formData) {
    const promise = axios.post(`${BASE_URL}/sign-up`, formData)
    return promise;
}

export default signUp