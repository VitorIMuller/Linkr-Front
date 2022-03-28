import React, { useState,useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import { NoUser, Search } from "./style";
import useAuth from "../../Hooks/useAuth";
import DataUsers from "./Users";
import FadingDots from "../../Assets/CircularLoading.js";
import api from "../../Services/api";

export default function SearchUser(){

    const { user } = useAuth();

    const [value, setValue] = useState("");    
    const [key, setKey] = useState(true);
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false); 
    
    const time = 300;
    const qntCharacters = 3;
    
    const NoUserYetMessage = "No corresponding users";
    const ServerErrorMessage = `An error occurred while trying to fetch the users , please refresh the page`;
   
    function handleInputChange(e) {
           
            setValue(e.target.value);
            setLoading(true);
            api.getUsers( value , user.token).then(res => {

                setUsers(res.data);
                setLoading(false);
    
            }).catch(error => {
    
                setLoading(false);
                setError(true);
    
                console.log(error);
            });
    }

    return (
        <>
            <Search >
                <DebounceInput 
                    
                    debounceTimeout={time}
                    value={value}
                    forceNotifyByEnter={true}
                    forceNotifyOnBlur={true}
                    minLength={qntCharacters}
                    onChange={handleInputChange}
                    onKeyDown={(e) => setKey(e.key)}
                    placeholder ="Search for people and friends"
                />           
            </Search>
            {isLoading
                        ? <FadingDots />
                        : users?.length === 0 && value?.length > 3
                            ? <NoUser>{NoUserYetMessage}</NoUser>
                            : error === true
                                ? <NoUser>{ServerErrorMessage}</NoUser>
                                : (
                                    users?.map((user) =>
                                        <DataUsers
                                            key={user.id}                                           
                                            name={user.name}
                                            profilePic={user.image}
                                            userId={user.id}
                                        />
                                    )
                                )}
        </>

      
    );  
}
