import { useState, useEffect } from "react";
import { LoadingContainer, NoPost } from "../Timeline/style";
import { MainContainer, TitleContainer, LeftWrapper, RightWrapper } from "./style";
import Post from "../../Components/Post";
import useAuth from "../../Hooks/useAuth";
import Header from "../../Components/Header";
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import CircularLoading from "../../Assets/CircularLoading";
import Trends from '../../Components/Trends'
import FollowButton from "../../Components/FollowButton";

export default function UserPage() {
    const { user } = useAuth();
    const { userId } = useParams();

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const NoPostYetMessage = "There are no posts yet";
    const ServerErrorMessage = `An error occured while trying to fetch the posts, please refresh the page`;

    function fetchPosts() {

        setLoading(true);

        api.getPostByUserId(user?.token, userId).then(res => {
            setPosts(res.data);
            setLoading(false);

        }).catch(error => {

            setLoading(false);
            setError(true);

            console.log(error);
        });
    }
    window.scrollTo(0, 0);
    console.log(posts)
    useEffect(fetchPosts, [userId, user?.token]);

    return (
        <>
            <Header />
            <MainContainer>
                <LeftWrapper>
                    {isLoading ? "" :
                        <TitleContainer>
                            <div><img src={posts[0]?.profilePic}></img></div>
                            <span>{`${posts[0]?.username}'s posts`}</span>
                        </TitleContainer>
                    }
                    {
                        isLoading
                            ? <LoadingContainer> <CircularLoading /> </LoadingContainer>
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
                                                userId={post?.userId}
                                            />
                                        )
                                    )
                    }
                </LeftWrapper>
                <RightWrapper>
                    <FollowButton />
                    <Trends />
                </RightWrapper>
            </MainContainer >
        </>
    );
}


