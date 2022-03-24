import axios from "axios";
<<<<<<< HEAD
const BASE_URL = "http://localhost:4000";
=======
const BASE_URL = "https://apilinkr.herokuapp.com/";
>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c

function signIn(formData) {
    const promise = axios.post(`${BASE_URL}/sign-in`, formData)
    return promise;
}

export default signIn