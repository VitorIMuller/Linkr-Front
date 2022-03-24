import React, { useState } from "react";
import { PostBody } from "./style";
import { IoHeartOutline } from 'react-icons/io5'
import Metadata from "./Metadata";

export default function Post({ url, postId, title, description, image, message, name, profilePic }) {
    const [like, setLike] = useState();
    return (
        <PostBody>
            <div className="left-side-post">
                <img src={profilePic} alt="profile_pic" />
                <div className="heart">
                    <IoHeartOutline></IoHeartOutline>
                </div>
                <span className="likes-quantity">1 like</span>
            </div>
            <div className="right-side-post">
                <span className="username-post">{name}</span>
                <span className="user-message-post">
                    {message}
                </span>
                <Metadata
                    url={url}
                    postId={postId}
                    title={title}
                    description={description}
                    image={image}
                />
            </div>
        </PostBody>
    );
}