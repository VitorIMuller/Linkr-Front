import { useState, useEffect } from "react";
import { MainContainer, TitleContainer, TimelineContainer, NoPost, LoadingContainer, LeftWrapper, RightWrapper } from "./style";
import Post from "../../Components/Post";
import useAuth from "../../Hooks/useAuth";
import api from "../../Services/api";
import Publish from "../../Components/Publish";
import SearchUser from "../../Components/UserSearch";
import CircularLoading from "../../Assets/CircularLoading.js";
import Header from '../../Components/Header'
import Trends from '../../Components/Trends'

export default function Timeline() {
    const { user } = useAuth();

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const NoPostYetMessage = "There are no posts yet";
    const ServerErrorMessage = `An error occured while trying to fetch the posts, please refresh the page`;

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
        <>
            <Header />
            {/* <SearchUser/> */}
            <MainContainer>
                <LeftWrapper>
                    <TimelineContainer>
                        <TitleContainer>
                            timeline
                        </TitleContainer>
                        <Publish />
                        {
                            isLoading
                                ? <LoadingContainer> <CircularLoading /> </LoadingContainer>
                                : posts?.length === 0
                                    ? <NoPost>{NoPostYetMessage}</NoPost>
                                    : error === true
                                        ? <NoPost>{ServerErrorMessage}</NoPost>
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
                </LeftWrapper>
                <RightWrapper>
                    <Trends />
                </RightWrapper>
            </MainContainer>
        </>
    );
}