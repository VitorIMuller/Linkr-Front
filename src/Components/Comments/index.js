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
import { useState } from "react"
import api from "../../Services/api"
import useAuth from "../../Hooks/useAuth"



function Comments({ postId, userId }) {

    const { user } = useAuth()
    const [text, setText] = useState()
    const [comments, setComments] = useState([])

    function handleInputChange(e) {
        setText(e.target.value);

    }

    function handlePostComment() {
        console.log(text)

        api.createComment(user?.token, text, postId, userId).then(() => {
            setText("")
            window.location.reload()
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <CommentsContent>
            <Comment>
                <CommentContent>
                    <img src={defaultImage} />
                    <SeparateMessages>
                        <User>
                            <div className="username">Vitor Muller</div>
                            <div className="follow"> • following</div>
                        </User>
                        <div className="coment">Comentario super hiper mega tópissimo de bom de mais de trem e de tudo mais o que tiver direito</div>
                    </SeparateMessages>
                </CommentContent>

            </Comment>
            <InputCommentContent>
                <img src={defaultImage} />
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