import { useState, useEffect } from "react";
import { MainContainer, TitleContainer, TimelineContainer, NoPost, LoadingContainer, LeftWrapper, RightWrapper, SearchContainer, Reloader } from "./style";
import { useAuth, useInterval } from '../../Hooks'
import { Publish, SearchUser, Header, Trends } from '../../Components'
import Post from "../../Components/Post";
import api from "../../Services/api";
import CircularLoading from "../../Assets/CircularLoading.js";
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
    const [offset, setOffSet] = useState(0);
    const [lastPostTime, setLastPostTime] = useState();


    function fetchPosts() {

        setLoading(true);

        api.isFollowing(user?.id, user?.token).then(res => {
            setFollowing(res.data);
        }
        ).catch(error => {
            console.log(error);
        });

        api.getPost(user?.token, offset).then(res => {
            console.log(res.data);
            setPosts(res.data);
            res.data && setLastPostTime(res.data[0]?.time);
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
            .then(res => verifyNewPosts(res.data))
            .catch(error => console.log(error))
    }

    function verifyNewPosts(incomingPosts) {  
        const areAnyNew = incomingPosts.filter( post => post.time > lastPostTime);
        if(areAnyNew) {
            setLastPostTime(areAnyNew[areAnyNew.length-1]?.time);
            setNewPosts(newPosts.concat(areAnyNew));
        }
        return
    }

    function loadNewPosts() {
        setPosts(posts.concat(newPosts));
    }

    useInterval(getNewPosts, 15000);
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
                        { newPosts?.length !== 0 
                            && <Reloader onClick = {()=> loadNewPosts()}>
                                   <span>{newPosts?.length} new posts, load more! </span><Icon size="20px"/>
                                </Reloader>
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
                                                posts?.map((post, index) =>
                                                    <Post
                                                        key={index}
                                                        postId={post?.id}
                                                        url={post?.url}
                                                        title={post?.urlTitle}
                                                        description={post?.urlDescription}
                                                        image={post?.urlImage}
                                                        message={post?.userMessage}
                                                        name={post?.name}
                                                        profilePic={post?.profilePic}
                                                        userId={post?.userId}
                                                        repostCount={post?.repostCount}
                                                        repostedBy={post?.repostedBy}
                                                        reload={reload}
                                                        setReload={setReload}
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