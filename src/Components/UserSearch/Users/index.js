import React, { useState } from "react";
import { UserBody } from "./style";
import default_profile_pic from "../../../Assets/img/blank-profile-picture.png"

export default function DataUsers({ name, image, userId }) {
    
    return (
        <UserBody to={`/user/${userId}`} className="user">
            <img src={image ? image : default_profile_pic} />
            <h2>{name}</h2>         
        </UserBody>
    );
}