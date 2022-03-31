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
    Loader
} from "./style"
import LoadingFind from "../../Assets/LoadingFind";

export default function SearchUser() {

    const { user } = useAuth();
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [list, setList] = useState([])
    const [isLoading, setLoading] = useState(false);

    function getUsers() {
        if (name) {
            setLoading(true)
            api.getUsers(name, user.token).then(res => {
                console.log(res.data)
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

    function handleClick(id) {
        navigate(`/user/${id}`)
        setList([])
        setName("")
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
                            {list?.map((el, i) =>
                                <div key={i} onClick={() => { handleClick(el.id) }}>
                                    <Image src={el.image} alt={el.name} />
                                    <NameList>{el.name}</NameList>
                                </div>
                            )}
                        </>
                    }
                </div>
            </InputFindUser>
        </ContainerInputFindUser >
    );
}


