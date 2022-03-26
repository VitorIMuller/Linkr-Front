import { useState, useEffect } from "react";
import { MainContainer } from "../Timeline/style";
import { TitleContainer } from "../Hashtag/style";
import Post from "../../Components/Post";
import useAuth from "../../Hooks/useAuth";
import Header from "../../Components/Header";
import api from "../../Services/api";
import { useParams } from "react-router-dom";

export default function HashtagPage() {
    const { user } = useAuth();
    const { hashtag } = useParams();

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function fetchPosts() {
        setLoading(true);
        api.getPostByHashtag(user?.token, hashtag).then(res => {
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
            <Header />
            <TitleContainer>
                <img src={posts[0]?.image}></img>
                <span>{`${posts[0]?.name}'s posts`}</span>
            </TitleContainer>
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
                                    name={post?.name}
                                    profilePic={post?.image}
                                />
                            )
                        )}
        </MainContainer>
    );
}