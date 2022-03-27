/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

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
    const [toolTip, setToolTip] = useState([]);

    async function handleLike() {
        setLike(!like);

        await api.toggleLike({ like, postId }, user?.token);

        setReload(!reload);
    }

    useEffect(() => {
        api.getTotalLikes(postId, user?.token).then(res => {
            setTotalLikes(res.data);
        });

        api.getUsernameLikes(postId, user?.token).then(res => {
            tooltipNaming(res.data);
        })

        api.getUsersLikes(postId, user.token).then(res => {
            setLike(res.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId, user?.token, setLike, reload]);

    function tooltipNaming(names) {
        const { ownUserLiked, likes } = names[names.length - 1];
        names.pop();

        let tooltipText = '';

        const LOGGED_USER_LIKED = ownUserLiked === true;
        const TOTAL = likes.total - 2;
        const CHECK_PLURAL = TOTAL > 1 ? 's' : '';

        if (names.length > 1) {
            LOGGED_USER_LIKED
                ? tooltipText += `Você, ${names[0].name}`
                : (TOTAL === 0
                    ? tooltipText += `${names[0].name} e ${names[1].name}`
                    : tooltipText += `${names[0].name}, ${names[1].name}`
                );

            TOTAL === 1
                ? tooltipText += ` e outra${CHECK_PLURAL} ${TOTAL} pessoa${CHECK_PLURAL} curtiram`
                : (TOTAL > 1
                    ? tooltipText += ` e outra${CHECK_PLURAL} ${TOTAL} pessoa${CHECK_PLURAL} curtiram`
                    : tooltipText += ` curtiram`);

        } else if (names.length === 1) {
            LOGGED_USER_LIKED
                ? tooltipText += `Você e ${names[0].name} curtiram`
                : tooltipText += `${names[0].name} curtiu`;

        } else {
            LOGGED_USER_LIKED
                ? tooltipText += `Você curtiu`
                : tooltipText += `Seja o primeiro a curtir!`
        }
        setToolTip(tooltipText);
    }

    return (
        <>
            <Heart>
                {like ? <IoHeart className="liked" onClick={handleLike} /> : <IoHeartOutline className="not-liked" onClick={handleLike} />}
            </Heart>
            <a data-tip={toolTip}>
                <LikesQuantity>{totalLikes}  {totalLikes !== 1 ? 'likes' : 'like'}</LikesQuantity>
            </a>
            <ReactTooltip place="bottom" type="light" effect="solid" />
        </>
    );
}