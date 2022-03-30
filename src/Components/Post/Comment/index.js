/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { AiOutlineComment } from "react-icons/ai";
import { CommentContainer, CommentsQuantity } from "./style";

export default function Comment({ postId, userId, setComments, comments }) {

    const [reload, setReload] = useState(false);
    const [totalComments, setTotalComments] = useState(0);
    const [toolTip, setToolTip] = useState([]);

    function handleComment() {
        setTotalComments(totalComments + 1);
        setComments(!comments)

        setReload(!reload);
    }

    useEffect(() => {
        setToolTip("Você comentou");
    }, [postId, totalComments])

    return (
        <>
            <CommentContainer>
                <AiOutlineComment onClick={() => { handleComment() }} />
            </CommentContainer>
            <a data-tip={toolTip}>
                <CommentsQuantity>{totalComments}  {totalComments !== 1 ? 'comments' : 'comment'}</CommentsQuantity>
            </a>
            <ReactTooltip place="bottom" type="light" effect="solid" />
        </>
    );
}