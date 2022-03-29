/* eslint-disable jsx-a11y/alt-text */
import { IconContainer, MetadataContainer, PostBody, TextContainer, UserContainer, UserMessage, UserName, UserPicture } from "./style";
import React, { useState, useEffect, useRef } from "react";
import useAuth from '../../Hooks/useAuth';
import ReactHashtag from "@mdnm/react-hashtag";
import LikeHeart from "./LikeHeart";
import Metadata from "./Metadata";
import default_profile_pic from "../../Assets/img/blank-profile-picture.png"
import { GoPencil, GoTrashcan } from "react-icons/go";
import { AiOutlineComment, AiOutlineRetweet } from "react-icons/ai";
import DeletePost from "../Delete";
import Repost from "./Repost";
import Comment from "./Comment";
import api from "../../Services/api";

export default function Post({ url, postId, title, description, image, message, name, profilePic, userId }) {
    const { hashtagRedirect, user } = useAuth();
    const [isDeleting, setDeleting] = useState(false);

    const [isEditing, setIsEditing] = useState(false);
    const [textToEdit, setTextToEdit] = useState(message);

    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    function toggleEdit() {
        setTextToEdit(message);
        setIsEditing(!isEditing);
    }

    function editPost(e) {
        e.preventDefault();
        const body = {
            url: url,
            userMessage: textToEdit
        };
        console.log(body);
        api.editPost(body, postId, user.token)
            .then(() => {
                setIsEditing(!isEditing);
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
                alert("Erro na tentativa de edição")
            });
    }

    function verifyEsc(e) {
        if (e.key === 'Escape')
            toggleEdit();
    }

    return (
        <PostBody>
            {isDeleting && <DeletePost isDeleting={isDeleting} setDeleting={setDeleting} postId={postId}></DeletePost>}
            <UserContainer>
                <UserPicture>
                    <img src={profilePic ? profilePic : default_profile_pic} />
                </UserPicture>
                <LikeHeart postId={postId} />
                <Comment postId={postId} userId={userId} />
                <Repost postId={postId} userId={userId} />
            </UserContainer>
            <TextContainer>
                {userId === user.id && (
                    <IconContainer>
                        <GoPencil className="edit" onClick={toggleEdit} />
                        <GoTrashcan className="trashcan" onClick={() => setDeleting(true)} />
                    </IconContainer>
                )}
                <UserName to={`/user/${userId}`} className="username-post">{name}</UserName>
                <UserMessage>
                    {<ReactHashtag onHashtagClick={value => hashtagRedirect(value)}>
                        {message}
                    </ReactHashtag>}
                </UserMessage>
                <span>{
                    isEditing &&
                    (
                        <form onSubmit={editPost} onKeyDown={verifyEsc}>
                            <input
                                ref={inputRef}
                                value={textToEdit}
                                onChange={e => setTextToEdit(e.target.value)}
                                className='edit-input'
                            >
                            </input>
                        </form>
                    )
                }
                </span>
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