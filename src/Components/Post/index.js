/* eslint-disable jsx-a11y/alt-text */
import { IconContainer, MetadataContainer, PostBody, TextContainer, UserContainer, UserMessage, UserName, UserPicture, RepostedBy } from "./style";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import ReactHashtag from "@mdnm/react-hashtag";
import LikeHeart from "./LikeHeart";
import Metadata from "./Metadata";
import default_profile_pic from "../../Assets/img/blank-profile-picture.png"
import { GoPencil, GoTrashcan } from "react-icons/go";
import { AiOutlineRetweet } from "react-icons/ai";
import DeletePost from "../Delete";
import Repost from "./Repost";
import Comment from "./Comment";
import api from "../../Services/api";
import Comments from "../Comments";

export default function Post({ url, postId, title, description, image, message, name, profilePic, userId, repostCount, reload, setReload, repostedBy, repostedById }) {
    const { hashtagRedirect, user } = useAuth();
    const [isDeleting, setDeleting] = useState(false);

    const [isEditing, setIsEditing] = useState(false);
    const [textToEdit, setTextToEdit] = useState(message);
    const [comments, setComments] = useState(false);
    const [totalComments, setTotalComments] = useState(0)

    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing, reload, isDeleting]);

    function toggleEdit() {
        setTextToEdit(message);
        setIsEditing(!isEditing);
    }

    function counterComments() {
        api.commentsCounter(postId, user?.token)
            .then((res) => {
                setTotalComments(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        counterComments()
    }, [])

    function editPost(e) {
        e.preventDefault();
        const body = {
            url: url,
            userMessage: textToEdit
        };

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
        <>
            {repostedBy &&
                <RepostedBy >
                    <AiOutlineRetweet size={25} />
                    Re-posted by
                    <Link to={`/user/${repostedById}`}>
                        <strong>{repostedBy === user?.name ? 'you' : repostedBy}</strong>
                    </Link>
                </RepostedBy>
            }
            <PostBody repostedBy={repostedBy}>
                {isDeleting && <DeletePost isDeleting={isDeleting} setDeleting={setDeleting} postId={postId}></DeletePost>}
                <UserContainer>
                    <UserPicture>
                        <img src={profilePic ? profilePic : default_profile_pic} />
                    </UserPicture>
                    <LikeHeart postId={postId} reload={reload} setReload={setReload} />
                    <Comment setComments={setComments} comments={comments} postId={postId} userId={userId} token={user?.token} totalComments={totalComments} />
                    <Repost postId={postId} userId={userId} repostCount={repostCount} reload={reload} setReload={setReload} />
                </UserContainer>
                <TextContainer>
                    {userId === user?.id && (
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
            {
                comments &&
                <Comments postId={postId} userId={userId} />
            }
        </>
    );
}