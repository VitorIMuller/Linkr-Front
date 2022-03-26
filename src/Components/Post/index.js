/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import useAuth from '../../Hooks/useAuth';
import ReactHashtag from "@mdnm/react-hashtag";

import LikeHeart from "./LikeHeart";
import Metadata from "./Metadata";
import { MetadataContainer, PostBody, TextContainer, UserContainer, UserMessage, UserName, UserPicture } from "./style";
import default_profile_pic from "../../Assets/img/blank-profile-picture.png"

export default function Post({ url, postId, title, description, image, message, name, profilePic }) {
    const { hashtagRedirect, user } = useAuth();

    return (
        <PostBody>
            <UserContainer>
                <UserPicture>
                    <img src={profilePic ? profilePic : default_profile_pic} />
                </UserPicture>
                <LikeHeart postId={postId} />
            </UserContainer>
            <TextContainer>
                <UserName to={`/user/${user.id}`} className="username-post">{name}</UserName>
                <UserMessage>
                    {<ReactHashtag onHashtagClick={value => hashtagRedirect(value)}>
                        {message}
                    </ReactHashtag>}
                </UserMessage>
                <MetadataContainer>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <Metadata
                            url={url}
                            postId={postId}
                            title={title}
                            description={description}
                            image={image}
                        />
                    </a>
                </MetadataContainer>
            </TextContainer>
        </PostBody>
    );
}