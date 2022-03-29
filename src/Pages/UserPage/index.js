import { useState, useEffect } from "react";
import { MainContainer, TitleContainer, LeftWrapper, RightWrapper } from "./style";
import Post from "../../Components/Post";
import useAuth from "../../Hooks/useAuth";
import Header from "../../Components/Header";
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import default_profile_pic from "../../Assets/img/blank-profile-picture.png"
import Trends from '../../Components/Trends'

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
                            ? "Loading..."
                            : posts?.length === 0
                                ? "There are no posts yet"
                                : error === true
                                    ? "An error occured while trying to fetch the posts, please refresh the page"
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
                </LeftWrapper>
                <RightWrapper>
                    <Trends />
                </RightWrapper>
            </MainContainer >
        </>
    );
}


