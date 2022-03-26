import React, { useState, useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import api from "../../../Services/api";

import { IoHeartOutline, IoHeart } from 'react-icons/io5'
import { Heart, LikesQuantity } from "./style";

export default function LikeHeart({ postId }) {
    // eslint-disable-next-line no-unused-vars
    const { user } = useAuth();
    const [like, setLike] = useState(false);
    const [reload, setReload] = useState(false);
    const [totalLikes, setTotalLikes] = useState(0);

    async function handleLike() {
        setLike(!like);

        await api.toggleLike({ like, postId }, user?.token);

        setReload(!reload);
    }

    useEffect(() => {
        api.getTotalLikes(postId, user?.token).then(res => {
            setTotalLikes(res.data);
        });
    }, [postId, user?.token, reload]);

    useEffect(() => {
        api.getUsersLikes(postId, user.token).then(res => {
            setLike(res.data);
        });
    }, [postId, user?.token, setLike]);

    return (
        <>
            <Heart>
                {like ? <IoHeart className="liked" onClick={handleLike} /> : <IoHeartOutline className="not-liked" onClick={handleLike} />}
            </Heart>
            <LikesQuantity>{totalLikes}  {totalLikes !== 1 ? 'likes' : 'like'}</LikesQuantity>
        </>
    );
}