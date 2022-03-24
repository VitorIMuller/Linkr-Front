//import UserContext from "../../Contexts/userContext";
import React, { useState } from "react";
import profile_pic from "../../Assets/img/blank-profile-picture.png";
import { MainContainer, TitleContainer, NewPostContainer } from "./style";
import Post from "../../Components/Post";
import Header from "../../Components/Header";
import { IoHeartOutline } from 'react-icons/io5'
import useAuth from "../../Hooks/useAuth";

export default function Timeline() {
    const { user, token } = useAuth()

    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    const metadata = {
        title: "Depende.",
        description: "Depende?",
        url: "Hmm",
        image: "https://i.kym-cdn.com/photos/images/newsfeed/001/462/400/978.jpg"
    }

    const post = {
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur perspiciatis a ducimus expedita, nemo unde sunt. Obcaecati blanditiis facere modi, quibusdam excepturi in assumenda placeat odit unde distinctio. Qui."
    }

    // const urlMetadata = require('url-metadata')
    // urlMetadata('http://bit.ly/2ePIrDy').then(
    //     function (metadata) { // success handler
    //         console.log(metadata)
    //     },
    //     function (error) { // failure handler
    //         console.log(error)
    //     })

    return (
        <MainContainer>
            <Header />
            <TitleContainer>
                <span>timeline</span>
            </TitleContainer>
            <NewPostContainer />
            <Post
                key={1}
                postId={1}
                url={metadata.url}
                title={metadata.title}
                description={metadata.description}
                image={metadata.image}
                message={post.message}
                username={user.username}
                profilePic={profile_pic}
            />

        </MainContainer>
    );

}