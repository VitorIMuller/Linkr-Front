//import UserContext from "../../Contexts/userContext";
import React, { useState } from "react";
import profile_pic from "../../Assets/img/blank-profile-picture.png";
import { MainContainer, Title, TitleContainer, NewPostContainer, Post } from "./style";
import { IoHeartOutline } from 'react-icons/io5'
<<<<<<< HEAD

export default function Timeline() {
    // const { user, token } = useAuth()
=======
import useAuth from "../../Hooks/useAuth";
import Header from "../../Components/Header/index"

export default function Timeline() {
    const { user, token } = useAuth()
>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c

    const [loading, setLoading] = useState();
    const [error, setError] = useState();

<<<<<<< HEAD
    const user = {
        username: "Juvenaldo Juvenício",
        image: profile_pic
    }
=======
    // const user = {
    //     username: "Juvenaldo Juvenício",
    //     image: profile_pic
    // }
>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c

    const urlMetadata = require('url-metadata')
    urlMetadata('http://bit.ly/2ePIrDy').then(
        function (metadata) { // success handler
            console.log(metadata)
        },
        function (error) { // failure handler
            console.log(error)
        })

    return (
<<<<<<< HEAD
        // <Header />
        <MainContainer>
            <TitleContainer>
                <span>timeline</span>
            </TitleContainer>
            <NewPostContainer />
            <Post>
                <div className="left-side-post">
                    <img src={profile_pic} alt="profile_pic" />
                    <div className="heart">
                        <IoHeartOutline></IoHeartOutline>
                    </div>
                    <span className="likes-quantity">1 Like</span>
                </div>
                <div className="right-side-post">
                    <span className="username-post">{user.username}</span>
                    <span className="user-message-post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, obcaecati. Tempore maiores culpa magnam vel ducimus cum nostrum explicabo iusto quibusdam libero exercitationem itaque numquam molestiae, repellat debitis nobis blanditiis.</span>
                    <div>{urlMetadata.ogDescription}</div>
                </div>
            </Post>
            <Post>
                <div className="left-side-post">
                    <img src={profile_pic} alt="profile_pic" />
                    <div className="heart">
                        <IoHeartOutline></IoHeartOutline>
                    </div>
                    <span className="likes-quantity">1 Like</span>
                </div>
                <div className="right-side-post">
                    <span className="username-post">{user.username}</span>
                    <span className="user-message-post">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, obcaecati. Tempore maiores culpa magnam vel ducimus cum nostrum explicabo iusto quibusdam libero exercitationem itaque numquam molestiae, repellat debitis nobis blanditiis.
                    </span>
                    <div>{urlMetadata.ogDescription}</div>
                </div>
            </Post>
        </MainContainer>
=======
        <>
            <Header />
            <MainContainer>
                <TitleContainer>
                    <span>timeline</span>
                </TitleContainer>
                <NewPostContainer />
                <Post>
                    <div className="left-side-post">
                        <img src={profile_pic} alt="profile_pic" />
                        <div className="heart">
                            <IoHeartOutline></IoHeartOutline>
                        </div>
                        <span className="likes-quantity">1 Like</span>
                    </div>
                    <div className="right-side-post">
                        <span className="username-post">{user.username}</span>
                        <span className="user-message-post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, obcaecati. Tempore maiores culpa magnam vel ducimus cum nostrum explicabo iusto quibusdam libero exercitationem itaque numquam molestiae, repellat debitis nobis blanditiis.</span>
                        <div>{urlMetadata.ogDescription}</div>
                    </div>
                </Post>
                <Post>
                    <div className="left-side-post">
                        <img src={profile_pic} alt="profile_pic" />
                        <div className="heart">
                            <IoHeartOutline></IoHeartOutline>
                        </div>
                        <span className="likes-quantity">1 Like</span>
                    </div>
                    <div className="right-side-post">
                        <span className="username-post">{user.username}</span>
                        <span className="user-message-post">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, obcaecati. Tempore maiores culpa magnam vel ducimus cum nostrum explicabo iusto quibusdam libero exercitationem itaque numquam molestiae, repellat debitis nobis blanditiis.
                        </span>
                        <div>{urlMetadata.ogDescription}</div>
                    </div>
                </Post>
            </MainContainer>
        </>
>>>>>>> 8862ae0a5cfe467c26decd3c7b0d068dd25a815c
    );

}