import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import useAuth from "../../Hooks/useAuth"
import api from "../../Services/api"
import {
    User

} from "./style"


export default function HeaderComment({ comment }) {
    const { user } = useAuth()
    const [followedId, setFollowedId] = useState(false)

    function verifyFollow() {
        api.getFollowStatus(comment.userId, user.token).then((res) => {
            setFollowedId(res.data)
        })
    }
    useEffect(() => {
        verifyFollow()
    }, [])

    return (
        <User>
            <div className="username">{comment.username}</div>
            <div className="follow">
                {comment.userId === user.id ?
                    "• post’s author"
                    : followedId === true ?
                        "• following"
                        : " "
                }
            </div>
        </User>
    )
}