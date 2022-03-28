import { useState, useEffect } from "react";
import { LoadingContainer, MainContainer, NoPost } from "../Timeline/style";
import { TitleContainer } from "../Hashtag/style";
import Post from "../../Components/Post";
import useAuth from "../../Hooks/useAuth";
import Header from "../../Components/Header";
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import CircularLoading from "../../Assets/CircularLoading";
import { UserContainer } from "./style";

export default function UserPage() {
    const { user } = useAuth();
    const { userId } = useParams();

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const NoPostYetMessage = "There are no posts yet";
    const ServerErrorMessage = `An error occured while trying to fetch the posts, please refresh the page`;

    function fetchPosts() {
        window.scrollTo(0, 0);
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
    useEffect(fetchPosts, [userId, user?.token]);

    return (
        <>
            <Header />
            <MainContainer>
                <UserContainer>
                    {isLoading ? "" :
                        <TitleContainer>
                            <div><img src={posts[0]?.profilePic}></img></div>
                            <span>{`${posts[0]?.username}'s posts`}</span>
                        </TitleContainer>
                    }
                    {
                        isLoading
                            ?
                            <LoadingContainer>
                                <CircularLoading />
                            </LoadingContainer>
                            : posts?.length === 0
                                ? <NoPost>{NoPostYetMessage}</NoPost>
                                : error === true
                                    ? <NoPost>{ServerErrorMessage}</NoPost>
                                    :
                                    (
                                        posts?.map((post) =>
                                            <Post
                                                key={post.id}
                                                postId={post.id}
                                                url={post.url}
                                                title={post.urlTitle}
                                                description={post.urlDescription}
                                                image={post.urlImage}
                                                message={post.userMessage}
                                                name={post?.username}
                                                profilePic={post?.profilePic}
                                            />
                                        )
                                    )
                    }
                </UserContainer>
            </MainContainer >
        </>
    );
}


