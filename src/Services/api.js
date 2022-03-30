import axios from "axios";

//const BASE_URL = "https://apilinkr.herokuapp.com";
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

async function deletePost(postId, token) {
    const auth = createHeaders(token);

    const promise = await axios.delete(`${BASE_URL}/post/delete/${postId}`, auth);

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
    const promise = await axios.get(`${BASE_URL}/posts/hashtag/${hashtag}`, auth);

    return promise;
}

async function getUsers(infos, token) {
    const auth = createHeaders(token);

    const promise = await axios.get(`${BASE_URL}/users/search?characters=${infos}`, auth);
    console.log(`API: ${infos}`);


    return promise;
}
async function getTrendingHashtags(limit, token) {
    const auth = createHeaders(token);
    const promise = await axios.get(`${BASE_URL}/trending/${limit}`, auth);

    return promise;
}

async function editPost(body, postid, token) {
    const auth = createHeaders(token);

    const promise = await axios.put(`${BASE_URL}/posts/${postid}`, body, auth);
    return promise;
}

async function getFollowStatus(loggedUser, userToVerify, token) {
    const auth = createHeaders(token);
    const promise = await axios.get(`${BASE_URL}/follows/${loggedUser}/${userToVerify}`, auth);

    return promise;
}

async function handleFollow(loggedUser, userToHandle, token) {
    const auth = createHeaders(token);
    const promise = await axios.post(`${BASE_URL}/follows/${loggedUser}/${userToHandle}`, {}, auth);

    return promise;
}

async function createComment(token, text, postId, userId) {
    const auth = createHeaders(token)
    const body = { text, postId, userId }

    const promise = await axios.post(`${BASE_URL}/comments`, body, auth)
    return promise
}
async function getComments(token, postId) {
    const auth = createHeaders(token);
    const promise = await axios.get(`${BASE_URL}/comments/${postId}`, auth);
    return promise;
}
async function commentsCounter(postId, token) {
    const auth = createHeaders(token);
    const promise = await axios.get(`${BASE_URL}/comments/counter/${postId}`, auth);
    return promise;
}

const api = {
    signUp,
    signIn,
    createPost,
    getPost,
    deletePost,
    getPostByUserId,
    toggleLike,
    getTotalLikes,
    getUsersLikes,
    getPostByHashtag,
    getUsernameLikes,
    getUsers,
    getTrendingHashtags,
    editPost,
    getFollowStatus,
    handleFollow,
    createComment,
    getComments,
    commentsCounter
}

export default api;
