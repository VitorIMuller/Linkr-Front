import { useState, useEffect } from "react";
import { TitleContainer, MainContainer, LeftWrapper, RightWrapper } from "../Hashtag/style";
import Post from "../../Components/Post";
import useAuth from "../../Hooks/useAuth";
import Header from "../../Components/Header";
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import { LoadingContainer, NoPost } from "../Timeline/style";
import CircularLoading from "../../Assets/CircularLoading";
import Trends from '../../Components/Trends';
import { useLocation } from "react-router-dom";

export default function HashtagPage() {
    const { user } = useAuth();
    const { hashtag } = useParams();

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [reload, setReload] = useState(false);

    const NoPostYetMessage = "There are no posts yet";
    const ServerErrorMessage = `An error occured while trying to fetch the posts, please refresh the page`;

    const location = useLocation();

    function fetchPosts() {
        setLoading(true);
        api.getPostByHashtag(user?.token, hashtag).then(res => {
            setPosts(res.data);
            console.log(res.data);
            setLoading(false);

        }).catch(error => {

            setLoading(false);
            setError(true);

            console.log(error);
        });
    }
    window.scrollTo(0, 0);

    useEffect(fetchPosts, [user, location.pathname, reload]);

    return (
        <>
            <Header />
            <MainContainer>
                <LeftWrapper>
                    <TitleContainer>
                        {`# ${hashtag}`}
                    </TitleContainer>
                    {isLoading
                        ?
                        <LoadingContainer>
                            <CircularLoading />
                        </LoadingContainer>
                        : posts?.length === 0
                            ? <NoPost>{NoPostYetMessage}</NoPost>
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
                                            profilePic={post?.image}
                                            userId={post?.userId}
                                            repostCount={post?.repostCount}
                                            repostedBy={post?.repostedBy}
                                            reload={reload}
                                            setReload={setReload}
                                        />
                                    )
                                )}
                </LeftWrapper>
                <RightWrapper>
                    <Trends />
                </RightWrapper>
            </MainContainer>
        </>
    );
}