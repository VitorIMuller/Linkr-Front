import React, { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import useAuth from "../../Hooks/useAuth";
import api from "../../Services/api";
import { useNavigate } from "react-router-dom";
import {
    InputFindUser,
    ContainerInputFindUser,
    Image,
    SearchIcon,
    NameList,
    Loader,
    DotIcon
} from "./style"
import LoadingFind from "../../Assets/LoadingFind";

export default function SearchUser() {

    const { user } = useAuth();
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [list, setList] = useState([])
    const [followed, setfollowed] = useState([])

    const [isLoading, setLoading] = useState(false);

    let usersFollowed = [];
    let users = [];
    let searchedUsers = [];

    function getUsers() {
        if (name) {
            setLoading(true)
            api.getUsers(name, user.token).then(res => {
                setList(res.data)
                setLoading(false);
            }).catch(error => {
                console.log(error);
                setLoading(false);
            })
        } else {
            setList([])
        }
    }
    useEffect(() => {
        getUsers()
    }, [name])

    function getFollowed() {
        if (name) {
            api.getFollowed(name, user.token).then(res => {
                setfollowed(res.data)
                setLoading(false);
            }).catch(error => {
                console.log(error);
                setLoading(false);
            })
        } else {
            setfollowed([]);
        }
    }
    useEffect(() => {
        getFollowed();
    }, [name])

    function handleClick(id) {
        navigate(`/user/${id}`)
        setList([]);
        setfollowed([]);
        setName("");
    }

    for (let i = 0; i < list.length; i++) {
        const user = list[i];
        for (let j = 0; j < followed.length; j++) {
            const follows = followed[j];
            if (user.id !== follows.id) {
                usersFollowed.push(user);
            }
            else {               
                users.push(user);
            }
        }
    
    }
      
    for (let i = 0; i < users.length; i++) {
        const item = list[i];
        usersFollowed.push(item);
    }

    const filteredArray = usersFollowed.filter(function(ele , pos){
        return usersFollowed.indexOf(ele) == pos;
    }) 

    for (let i = 0; i < filteredArray.length; i++) {
        const element = filteredArray[i];
        if (!element) {
        filteredArray.splice(i,1)
        }
    }

    if (filteredArray.length === 0) {
        searchedUsers = list;
    }else{
        searchedUsers = filteredArray;
    }
    
    return (
        <ContainerInputFindUser>
            <InputFindUser >
                <DebounceInput
                    className="debounce-input"
                    debounceTimeout={300}
                    value={name}
                    minLength={3}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Search for people and friends"
                />
                <SearchIcon />
                <div className="list-users">
                    {isLoading ?
                        <Loader><LoadingFind height={30} width={30} /></Loader>
                        :
                        <>
                            {searchedUsers.map((el, i) =>
                                <div key={i} onClick={() => { handleClick(el.id) }}>
                                    <Image src={el.image} alt={el.name} />
                                    <NameList>
                                        {el.name}
                                            {followed?.map((fl) =>
                                                fl.id === el.id ?                                            
                                                    <>
                                                        <DotIcon/>  <p>following</p>
                                                    </>
                                                :
                                                ""                                        
                                            )}
                                    </NameList>
                                </div>
                            )}
                            
                        </>
                    }
                </div>
            </InputFindUser>
        </ContainerInputFindUser >
    );
}


