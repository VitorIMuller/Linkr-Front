import axios from "axios";

// const BASE_URL = "https://apilinkr.herokuapp.com";
const BASE_URL = "http://localhost:5000";

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

    const promise = await axios.post(`${BASE_URL}/posts`, body, auth);

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
    const promise = await axios.get(`${BASE_URL}/user/${userId}`, auth);

    return promise;
}

async function toggleLike(body, token) {
    const auth = createHeaders(token);

    const promise = await axios.post(`${BASE_URL}/likes/toggle`, body, auth);

    return promise;
}

async function getTotalLikes(postId, token) {
    const auth = createHeaders(token);

    const promise = await axios.get(`${BASE_URL}/likes/${postId}/total`, auth);

    return promise;
}

async function getUsernameLikes(postId, token) {
    const auth = createHeaders(token);

    const promise = await axios.get(`${BASE_URL}/likes/${postId}/usernames`, auth);

    return promise;
}

async function getUsersLikes(postId, token) {
    const auth = createHeaders(token);

    const promise = await axios.get(`${BASE_URL}/likes/${postId}`, auth);

    return promise;
}
async function getPostByHashtag(token, hashtag) {
    const auth = createHeaders(token);
    const promise = await axios.get(`${BASE_URL}/post/${hashtag}`, auth);

    return promise;
}

async function getUsers( characters, token){
    const auth = createHeaders(token);
    if (characters < 3 ) return [];

    const promise = await axios.get(`${BASE_URL}/users/search?characters=${characters}`, auth);
    console.log (`API: ${characters}`);

    return promise;
}
const api = {
    signUp,
    signIn,
    createPost,
    getPost,
    getPostByUserId,
    toggleLike,
    getTotalLikes,
    getUsersLikes,
    getPostByHashtag,
    getUsernameLikes,
    getUsers
}

export default api;
