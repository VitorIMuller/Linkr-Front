/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { AiOutlineComment } from "react-icons/ai";
import { CommentContainer, CommentsQuantity } from "./style";
import api from "../../../Services/api";

export default function Comment({ setComments, comments, totalComments }) {


    function handleComment() {
        setComments(!comments)
    }

    return (
        <>
            <CommentContainer>
                <AiOutlineComment onClick={() => { handleComment() }} />
            </CommentContainer>
            <CommentsQuantity>{totalComments}  {totalComments !== 1 ? 'comments' : 'comment'}</CommentsQuantity>
            <ReactTooltip place="bottom" type="light" effect="solid" />
        </>
    );
}