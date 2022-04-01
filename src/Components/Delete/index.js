import Modal from 'react-modal'
import { useState } from 'react'
import useAuth from '../../Hooks/useAuth';
import api from '../../Services/api';
import CircularLoading from '../../Assets/CircularLoading';
import { Buttons, LoadingContainer, ModalContainer, NoButton, Title, YesButton } from './style';
import Swal from 'sweetalert2';

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
        alignItems: 'center'
    },
    overlay: {
        zIndex: 1000
    }
};

Modal.setAppElement('.root');

export default function DeletePost({ isDeleting, setDeleting, postId }) {
    const { user } = useAuth();
    const [isLoading, setLoading] = useState(false);

    async function deletePost() {
        setLoading(true);

        try {
            await api.deletePost(postId, user?.token);
            setLoading(false);
            setDeleting(false);
            window.location.reload();
        } catch (error) {
            console.log(error);
            setLoading(false);
            setDeleting(false);
            Swal.fire({
                icon: 'error',
                title: "Couldn't delete post",
                text: "An error occured while deleting the post. Please, try again.",
            });
        }
    }

    return (
        <ModalContainer>
            <Modal isOpen={isDeleting} onRequestClose={() => { if (!isLoading) setDeleting(false) }} style={customStyles} zIndex={5}>
                {isLoading
                    ?
                    <LoadingContainer>
                        <CircularLoading />
                    </LoadingContainer>
                    :
                    <>
                        <Title>Are you sure you want <br /> to delete this post?</Title>
                        <Buttons>
                            <NoButton onClick={() => setDeleting(false)}>No, go back</NoButton>
                            <YesButton onClick={deletePost}>Yes, delete it</YesButton>
                        </Buttons>
                    </>
                }
            </Modal>
        </ModalContainer>
    );
}

