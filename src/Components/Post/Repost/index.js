/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Modal from 'react-modal'
import { AiOutlineRetweet } from "react-icons/ai";
import { Repeat, RepostsQuantity } from "./style";
import { Buttons, LoadingContainer, NoButton, Title, YesButton } from '../../Delete/style';
import CircularLoading from '../../../Assets/CircularLoading';
import api from "../../../Services/api";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

export default function Repost({ postId, reload, setReload }) {

    const { user } = useAuth();

    const [repostCount, setRepostCount] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isReposting, setReposting] = useState(false);

    async function handleRepost() {

        try {
            await api.reposts(postId, user?.token);
            setReposting(false);
            setReload(!reload);
            Swal.fire({
                icon: 'success',
                title: "Successfully reposted!",
                text: "Wait a few seconds or reload the page",
            });
        } catch (error) {
            setLoading(false);
            setReposting(false);
            Swal.fire({
                icon: 'error',
                title: "Repost failed",
                text: `${error.response.data}`,
            });
        }
    }

    useEffect(() => {
        api.getTotalReposts(postId, user?.token).then(res => {
            setRepostCount(res.data);
        });
    }, [postId, user?.token, repostCount, reload]);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#333333',
            borderRadius: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        overlay: {
            zIndex: 1000
        }
    };

    Modal.setAppElement('.root');

    return (
        <>
            <Modal isOpen={isReposting} onRequestClose={() => { if (!isLoading) setReposting(false) }} style={customStyles}>
                {isLoading
                    ?
                    <LoadingContainer>
                        <CircularLoading />
                    </LoadingContainer>
                    :
                    <>
                        <Title>Do you want to <br /> re-post this link?</Title>
                        <Buttons>
                            <NoButton onClick={() => setReposting(false)}>No, cancel</NoButton>
                            <YesButton onClick={handleRepost}>Yes, share!</YesButton>
                        </Buttons>
                    </>
                }
            </Modal>
            <Repeat>
                <AiOutlineRetweet onClick={() => { setReposting(true) }} />
            </Repeat>
            <RepostsQuantity>{repostCount}  {repostCount !== 1 ? 'reposts' : 'repost'}</RepostsQuantity>

            <ReactTooltip place="bottom" type="light" effect="solid" />
        </>
    );
}