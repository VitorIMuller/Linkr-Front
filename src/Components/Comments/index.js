import defaultImage from "../../Assets/img/blank-profile-picture.png"
import { IoIosSend } from "react-icons/io"
import {
    User,
    SeparateMessages,
    CommentContent,
    Comment,
    CommentsContent,
    InputComment,
    InputCommentContent
} from "./style"
import { useState, useEffect } from "react"
import api from "../../Services/api"
import useAuth from "../../Hooks/useAuth"
import Loading from "../../Assets/Loading"
import HeaderComment from "../HeaderComment"



function Comments({ postId, userId }) {



    const { user } = useAuth()
    const [text, setText] = useState()
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleInputChange(e) {
        setText(e.target.value);
    }

    function handlePostComment() {
        api.createComment(user?.token, text, postId, user?.id).then(() => {
            setText("")
            window.location.reload()
        }).catch((error) => {
            console.log(error)
        })
    }

    function getComments() {
        setIsLoading(true)
        api.getComments(user?.token, postId, user?.id).then((res) => {
            setComments(res.data);
            setIsLoading(false)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <CommentsContent>
            {isLoading ?
                <Loading />
                :
                comments?.map((comment) =>
                    <Comment key={comment.id}>
                        <CommentContent>
                            <img src={comment.image} />
                            <SeparateMessages>
                                <HeaderComment comment={comment} />
                                <div className="coment">{comment.text}</div>
                            </SeparateMessages>
                        </CommentContent>
                    </Comment>
                )
            }
            <InputCommentContent>
                <img src={user?.image} />
                <InputComment
                    name="userComment"
                    placeholder="write a comment..."
                    type="text"
                    onChange={handleInputChange}
                />
                <button className="ioioSend" onClick={handlePostComment} ><IoIosSend size="20px" /></button>
            </InputCommentContent>
        </CommentsContent>
    )
}

export default Comments;