import axios from "axios";

const BASE_URL = "https://apilinkr.herokuapp.com";
//const BASE_URL = "http://localhost:5000";

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

async function getPost(token, offset) {
    const auth = createHeaders(token);

    const render_limit = 10;
    const promise = await axios.get(`${BASE_URL}/posts/get/${render_limit}/${offset}`, auth);

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

    return promise;
}
async function getTrendingHashtags(limit, token) {
    const auth = createHeaders(token);
    const promise = await axios.get(`${BASE_URL}/trending/${limit}`, auth);

    return promise;
}

async function editPost(body, postid, token) {
    const auth = createHeaders(token);

    const promise = await axios.put(`${BASE_URL}/posts/update/${postid}`, body, auth);
    return promise;
}

async function isFollowing(userId, token) {
    const auth = createHeaders(token);

    const promise = await axios.get(`${BASE_URL}/following/${userId}`, auth);

    return promise
}

async function getFollowStatus(userToVerify, token) {
    const auth = createHeaders(token);
    const promise = await axios.get(`${BASE_URL}/follows/${userToVerify}`, auth);

    return promise;
}

async function handleFollow(userToHandle, token) {
    const auth = createHeaders(token);
    const promise = await axios.post(`${BASE_URL}/follows/${userToHandle}`, {}, auth);

    return promise;
}

async function reposts(postId, token) {
    const auth = createHeaders(token);
    const promise = await axios.post(`${BASE_URL}/posts/reposts/${postId}`, null, auth);

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
async function getFollowed(name, token) {
    const auth = createHeaders(token);

    const promise = await axios.get(`${BASE_URL}/users/follows?characters=${name}`, auth);

    return promise;
}

async function getTotalReposts(postId, token) {
    const auth = createHeaders(token);

    const promise = await axios.get(`${BASE_URL}/posts/reposts/${postId}/total`, auth);

    return promise;
}

async function getUserInfo(userId, token) {
    const auth = createHeaders(token);

    const promise = await axios.get(`${BASE_URL}/users/userInfo/${userId}`, auth);

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
    isFollowing,
    getFollowStatus,
    handleFollow,
    reposts,
    createComment,
    getComments,
    commentsCounter,
    getFollowed,
    getTotalReposts,
    getUserInfo
}

export default api;
