import { useState, useEffect } from "react";
import { MainContainer, TitleContainer, TimelineContainer, NoPost, LoadingContainer, LeftWrapper, RightWrapper, SearchContainer } from "./style";
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
    const [isFollowing, setFollowing] = useState(false);
    const [reload, setReload] = useState(false);

    const NotFollowingMessage = `You don't follow anyone yet. Search for new friends!`;
    const NoPostsYet = `No posts found from your friends`;
    const ServerErrorMessage = `An error occured while trying to fetch the posts, please refresh the page`;

    let repostCount = 0;

    function fetchPosts() {

        setLoading(true);

        api.isFollowing(user?.id, user?.token).then(res => {
            setFollowing(res.data);
        }
        ).catch(error => {
            console.log(error);
        });

        api.getPost(user?.token).then(res => {
            setPosts(res.data);
            console.log(res.data)
            setLoading(false);

        }).catch(error => {

            setLoading(false);
            setError(true);

            console.log(error);
        });
    }

    useEffect(fetchPosts, [user, reload]);

    return (
        <>
            <Header />
            <MainContainer>
                <LeftWrapper>
                    <TimelineContainer>
                        <TitleContainer>
                            timeline
                        </TitleContainer>
                        <Publish />
                        {
                            isLoading
                                ? <LoadingContainer><CircularLoading /></LoadingContainer>
                                : isFollowing && posts?.length === 0
                                    ? <NoPost>{NoPostsYet}</NoPost>
                                    : !isFollowing && posts?.length === 0
                                        ? <NoPost>{NotFollowingMessage}</NoPost>
                                        : error === true
                                            ? <NoPost>{ServerErrorMessage}</NoPost>
                                            : (
                                                posts?.posts?.map((post, index) =>
                                                    <Post
                                                        key={index}
                                                        postId={post.id}
                                                        url={post.url}
                                                        title={post.urlTitle}
                                                        description={post.urlDescription}
                                                        image={post.urlImage}
                                                        message={post.userMessage}
                                                        name={post.name}
                                                        profilePic={post.profilePic}
                                                        userId={post.userId}
                                                        repostCount={posts.repostsCount.map(repost =>
                                                            repost.postId === post.id ? repostCount = repost.count : false
                                                        ) ? repostCount : 0}
                                                        reload={reload}
                                                        setReload={setReload}
                                                        repostedBy={post?.repostedBy}
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