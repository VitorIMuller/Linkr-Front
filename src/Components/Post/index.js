import React, { useState } from "react";
import { PostBody } from "./style";
import { IoHeartOutline } from 'react-icons/io5'
import Metadata from "./Metadata";
import default_profile_pic from "../../Assets/img/blank-profile-picture.png"
import ReactHashtag from "@mdnm/react-hashtag";
import useAuth from '../../Hooks/useAuth';
import { Link } from "react-router-dom";

export default function Post({ url, postId, title, description, image, message, name, profilePic, userId }) {
    const [like, setLike] = useState();
    const { hashtagRedirect } = useAuth();
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
                <div><Link to={`/user/${userId}`} className="username-post">{name}</Link></div>
                <span className="user-message-post">
                    {
                        <ReactHashtag onHashtagClick={value => hashtagRedirect(value)}>
                            {message}
                        </ReactHashtag>
                    }
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