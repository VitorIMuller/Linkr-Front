import axios from "axios";

const BASE_URL = "https://apilinkr.herokuapp.com";

function createHeaders(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

async function signUp(formData) {
    const promise = await axios.post(`${BASE_URL}/sign-up`, formData)

    return promise;
}

async function signIn(formData) {
    const promise = await axios.post(`${BASE_URL}/sign-in`, formData)

    return promise;
}

async function createPost(body, token) {
    const auth = createHeaders(token);

    const promise = await axios.post(`${BASE_URL}/posts`, auth);

    return promise;
}

async function getPost(token) {
    const auth = createHeaders(token);

    const render_limit = 20;
    const promise = await axios.get(`${BASE_URL}/posts/${render_limit}`, auth);

    return promise;
}
async function getPostByUserId(token, userId) {
    const auth = createHeaders(token);

    const promise = await axios.get(`${BASE_URL}/posts/${userId}`, auth);

    return promise;
}
async function getUser(userId) {
    const promise = await axios.get(`http://localhost:4000/users`, [userId])
    return promise;
}

const api = {
    signUp,
    signIn,
    createPost,
    getPost,
    getPostByUserId,
    getUser
}

export default api;