/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { PostBody } from "./style";
import { IoHeartOutline, IoHeart } from 'react-icons/io5'
import Metadata from "./Metadata";
import default_profile_pic from "../../Assets/img/blank-profile-picture.png"
import ReactHashtag from "@mdnm/react-hashtag";
import useAuth from '../../Hooks/useAuth';

export default function Post({ url, postId, title, description, image, message, name, profilePic }) {
    // eslint-disable-next-line no-unused-vars
    const [like, setLike] = useState(false);
    const { hashtagRedirect } = useAuth();

    function handleLike() {
        setLike(!like);
    }

    return (
        <PostBody>
            <div className="left-side-post">
                <img src={image ? profilePic : default_profile_pic} />
                <div className="heart">
                    {like ? <IoHeart className="liked" onClick={handleLike} /> : <IoHeartOutline className="not-liked" onClick={handleLike} />}
                </div>
                <span className="likes-quantity">1 like</span>
            </div>
            <div className="right-side-post">
                <span className="username-post">{name}</span>
                <span className="user-message-post">
                    {
                        <ReactHashtag onHashtagClick={value => hashtagRedirect(value)}>
                            {message}
                        </ReactHashtag>
                    }
                </span>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <Metadata
                        url={url}
                        postId={postId}
                        title={title}
                        description={description}
                        image={image}
                    />
                </a>
            </div>
        </PostBody>
    );
}