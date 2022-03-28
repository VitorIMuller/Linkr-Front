/* eslint-disable jsx-a11y/alt-text */
import { IconContainer, MetadataContainer, PostBody, TextContainer, UserContainer, UserMessage, UserName, UserPicture } from "./style";
import React, { useState } from "react";
import useAuth from '../../Hooks/useAuth';
import ReactHashtag from "@mdnm/react-hashtag";
import LikeHeart from "./LikeHeart";
import Metadata from "./Metadata";
import default_profile_pic from "../../Assets/img/blank-profile-picture.png"
import { GoPencil, GoTrashcan } from "react-icons/go";

export default function Post({ url, postId, title, description, image, message, name, profilePic, userId }) {
    const { hashtagRedirect } = useAuth();

    function handleDelete() {

    }

    return (
        <PostBody>
            <UserContainer>
                <UserPicture>
                    <img src={profilePic ? profilePic : default_profile_pic} />
                </UserPicture>
                <LikeHeart postId={postId} />
            </UserContainer>
            <TextContainer>
                <IconContainer>
                    <GoPencil className="edit" />
                    <GoTrashcan className="trashcan" onClick={handleDelete} />
                </IconContainer>
                <UserName to={`/user/${userId}`} className="username-post">{name}</UserName>
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