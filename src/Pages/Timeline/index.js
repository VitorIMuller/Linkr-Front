import { useState, useEffect } from "react";
import { MainContainer, TitleContainer, TimelineContainer, NoPost, LoadingContainer, LeftWrapper, RightWrapper, SearchContainer, Reloader } from "./style";
import { useAuth, useInterval } from '../../Hooks'
import { Publish, SearchUser, Header, Trends } from '../../Components'
import Post from "../../Components/Post";
import api from "../../Services/api";
import CircularLoading from "../../Assets/CircularLoading.js";
import { IoRepeatSharp as Icon } from 'react-icons/io5';
import InfiniteScroll from 'react-infinite-scroller';


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
    const [offsetScroll, setOffsetScroll] = useState(10);
    const [hasMore, setHasMore] = useState(true);


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
            setLastPostTime(res.data[0]?.time);
            setOffSet(offset+res.data.length);
            setLoading(false);
            

        }).catch(error => {

            setLoading(false);
            setError(true);

            console.log(error);
        });
    }

    function getNewPosts() {
        console.log('console 02: getting more posts')
        api.getPost(user?.token, 0)
            .then(res => verifyNewPosts(res))
            .catch(error => console.log(error))
    }

    function verifyNewPosts(res) { 
        const incomingPosts = res.data; 

        const areAnyNew = incomingPosts.filter( post => post.time > lastPostTime);
        
        if(areAnyNew) {
            areAnyNew.length > 0 && setLastPostTime(areAnyNew[areAnyNew.length-1]?.time);
            setNewPosts((newPosts.concat(areAnyNew).reverse()));
        }
        return
    }

    function loadNewPosts() {
        setPosts((posts.reverse().concat(newPosts)).reverse());
        setNewPosts([]);
    }

    useInterval(getNewPosts, 15000);
    useEffect(fetchPosts, [user, reload]);

    const loadPosts = async () => {
        const loadMorePosts = await api.getPost(user?.token, offsetScroll);
        
        return loadMorePosts;
    }
    
    const loadFunc = async () => {
        const {data: morePosts} = await loadPosts();

        if (morePosts.length < 10) {
          return setHasMore(false)
        }
       
        setPosts(posts.concat(morePosts));
        setOffsetScroll(offsetScroll + 10);
    }

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
                                            : 
                                            ( 
                                                <InfiniteScroll
                                                    className='infinite-scroll'
                                                    pageStart={0}
                                                    loadMore={loadFunc}
                                                    hasMore={hasMore}
                                                    loader={<div className="loader" key={0}>Loading ...</div>}
                                                >
                                                    {posts?.map((post, index) =>
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
                                                    )}
                                                </InfiniteScroll>
                                            )
                                            }
                    </TimelineContainer>
                </LeftWrapper>
                <RightWrapper>
                    <Trends />
                </RightWrapper>
            </MainContainer>
        </>
    );
}