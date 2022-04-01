import { useState, useEffect } from "react";
import { MainContainer, TitleContainer, TimelineContainer, NoPost, LoadingContainer, LeftWrapper, RightWrapper, SearchContainer, Reloader } from "./style";
import Post from "../../Components/Post";
import useAuth from "../../Hooks/useAuth";
import useInterval from '../../Hooks/useInterval'
import api from "../../Services/api";
import Publish from "../../Components/Publish";
import SearchUser from "../../Components/UserSearch";
import CircularLoading from "../../Assets/CircularLoading.js";
import Header from '../../Components/Header'
import Trends from '../../Components/Trends'
import { IoRepeatSharp as Icon } from 'react-icons/io5';

export default function Timeline() {
    const { user } = useAuth();

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [reload, setReload] = useState(false);
    const NotFollowingMessage = `You don't follow anyone yet. Search for new friends!`;
    const NoPostsYet = `No posts found from your friends`;
    const ServerErrorMessage = `An error occured while trying to fetch the posts, please refresh the page`;
    const [isFollowing, setFollowing] = useState(false);
    const [newPosts, setNewPosts] = useState([]);
    const [olderPosts, setOlderPosts] = useState([]);
    const [offset, setOffSet] = useState(0);
    const [loadNew, setLoadNew] = useState(false);
    const [lastPostTime, setLastPostTime] = useState();

    let repostCount = 0;

    function fetchPosts() {

        setLoading(true);

        api.isFollowing(user?.id, user?.token).then(res => {
            setFollowing(res.data);
        }
        ).catch(error => {
            console.log(error);
        });

        api.getPost(user?.token, offset).then(res => {

            setPosts(res.data);
            setLastPostTime(res.data.posts[0].time);
            setOffSet(offset+res.data.length);
            setLoading(false);
            

        }).catch(error => {

            setLoading(false);
            setError(true);

            console.log(error);
        });
    }

    function getNewPosts() {
        api.getPost(user?.token, 0)
            .then(res => verifyNewPosts(res.data.posts))
            .catch(error => console.log(error))
    }

    function verifyNewPosts(incomingPosts) {  
        const areAnyNew = incomingPosts.filter( post => post.time > lastPostTime);
        if(areAnyNew) {
            setNewPosts(areAnyNew);
            setLoadNew(true);
        }
        return
    }

    useInterval(getNewPosts, 15000);

    useEffect(() => setLoadNew(false), [loadNew]);
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
                        { newPosts.length !== 0 
                            && <Reloader onClick = {()=> setLoadNew(true)}>
                                   <span>{newPosts.length} new posts, load more! </span><Icon size="20px"/>
                                </Reloader>
                        }
                        { loadNew &&
                            newPosts?.map((post) => (
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
                                />))    
                        }
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