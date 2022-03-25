import React, { useState } from "react";
import { PostBody } from "./style";
import { IoHeartOutline } from 'react-icons/io5'
import Metadata from "./Metadata";
import default_profile_pic from "../../Assets/img/blank-profile-picture.png"
import { Link } from "react-router-dom";

export default function Post({ url, postId, title, description, image, message, name, profilePic, userId }) {
    const [like, setLike] = useState();

    return (
        <PostBody>
            <div className="left-side-post">
                <img src={image ? default_profile_pic : profilePic} alt="profile_pic" />
                <div className="heart">
                    <IoHeartOutline></IoHeartOutline>
                </div>
                <span className="likes-quantity">1 like</span>
            </div>
            <div className="right-side-post">
                <div><Link to={`/user/${userId}`} className="username-post">{name}</Link></div>
                <span className="user-message-post">
                    {message}
                </span>
                <a href={url}>
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