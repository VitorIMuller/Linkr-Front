import { useState, useEffect } from "react";
import { MainContainer } from "../Timeline/style";
<<<<<<< HEAD
import { TitleContainer } from "../Hashtag/style";
=======
>>>>>>> 1b118848ade06dd4929d9d9ea2a196bea63a4aeb
import Post from "../../Components/Post";
import useAuth from "../../Hooks/useAuth";
import Header from "../../Components/Header";
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import default_profile_pic from "../../Assets/img/blank-profile-picture.png"
import styled from "styled-components";

export default function UserPage() {
    const { user } = useAuth();
    const { userId } = useParams();

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function fetchPosts() {
        setLoading(true);

        console.log(`userId userpage ${userId}`)
        api.getPostByUserId(user?.token, userId).then(res => {
            setPosts(res.data);
            setLoading(false);

        }).catch(error => {

            setLoading(false);
            setError(true);

            console.log(error);
        });
    }

    console.log(posts)
    useEffect(fetchPosts, [user]);

    return (
        <MainContainer>
            <Header />
            <TitleContainer>
<<<<<<< HEAD

                <div><img src={posts[0]?.profilePic}></img></div>
                <span>{`${posts[0]?.username}'s posts`}</span>
=======
                <div><img src={posts[0]?.profilePic}></img></div>
                <span>{`${posts[0]?.name}'s posts`}</span>
>>>>>>> 1b118848ade06dd4929d9d9ea2a196bea63a4aeb
            </TitleContainer>
            {
                isLoading
                    ? "Loading..."
                    : posts?.length === 0
                        ? "There are no posts yet"
                        : error === true
                            ? "An error occured while trying to fetch the posts, please refresh the page"
                            : (
                                posts?.map((post) =>
                                    <Post
                                        key={post.id}
                                        postId={post.id}
                                        url={post.url}
                                        title={post.urlTitle}
                                        description={post.urlDescription}
                                        image={post.urlImage}
                                        message={post.userMessage}
<<<<<<< HEAD
                                        name={post?.username}
                                        profilePic={post?.profilePic}
=======
                                        name={post?.name}
                                        profilePic={post?.image}
>>>>>>> 1b118848ade06dd4929d9d9ea2a196bea63a4aeb
                                    />
                                )
                            )
            }
        </MainContainer >
    );
}


<<<<<<< HEAD
=======
const TitleContainer = styled.div`
    min-height: 87px;
    min-width: 100vw;

    display: flex;
    justify-content: left;
    align-items: center;

    padding-left: 17px;

    span {
        font-size: 33px;
        font-weight: 700;
        color: #FFF;
        font-family: 'Oswald', sans-serif;
    }

`
>>>>>>> 1b118848ade06dd4929d9d9ea2a196bea63a4aeb
