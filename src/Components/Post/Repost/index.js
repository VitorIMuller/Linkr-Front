/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import { AiOutlineRetweet } from "react-icons/ai";
import { Repeat, RepostsQuantity } from "./style";

export default function Repost({ postId, userId }) {

    const [reload, setReload] = useState(false);
    const [totalReposts, setTotalReposts] = useState(0);
    const [toolTip, setToolTip] = useState([]);

    async function handleRepost() {
        setTotalReposts(totalReposts + 1);
        setReload(!reload);
    }

    useEffect(() => {
        setToolTip("Você deu repost")
    }, [postId, totalReposts])

    return (
        <>
            <Repeat>
                <AiOutlineRetweet onClick={() => { handleRepost() }} />
            </Repeat>
            <a data-tip={toolTip}>
                <RepostsQuantity>{totalReposts}  {totalReposts !== 1 ? 'reposts' : 'repost'}</RepostsQuantity>
            </a>
            <ReactTooltip place="bottom" type="light" effect="solid" />
        </>
    );
}