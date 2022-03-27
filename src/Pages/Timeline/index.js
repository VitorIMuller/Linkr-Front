import { useState, useEffect } from "react";
import { MainContainer, TitleContainer, TimelineContainer } from "./style";
import Post from "../../Components/Post";
import useAuth from "../../Hooks/useAuth";
import api from "../../Services/api";
import Publish from "../../Components/Publish";
import Trends from '../../Components/Trends'

export default function Timeline() {
    const { user } = useAuth();

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function fetchPosts() {

        setLoading(true);

        api.getPost(user?.token).then(res => {

            setPosts(res.data);
            setLoading(false);

        }).catch(error => {

            setLoading(false);
            setError(true);

            console.log(error);
        });
    }

    useEffect(fetchPosts, [user]);

    return (
        <MainContainer>
            <Trends />
            <TimelineContainer>
                <TitleContainer>
                    timeline
                </TitleContainer>
                <Publish />
                {isLoading
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
                                        name={post.name}
                                        profilePic={post.profilePic}
                                        userId={post.userId}
                                    />
                                )
                            )}
            </TimelineContainer>
        </MainContainer>
    );
}