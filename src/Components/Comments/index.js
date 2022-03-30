import styled from "styled-components"
import defaultImage from "../../Assets/img/blank-profile-picture.png"
import { IoIosSend } from "react-icons/io"
function Comments() {
    console.log("oie")
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
                // value={ }
                // onChange={ }
                />
                <button className="ioioSend" width="15px" height="15px" size="15px" onClick={() => console.log("clique")} ><IoIosSend /></button>
            </InputCommentContent>
        </CommentsContent>
    )
}

export default Comments


const InputComment = styled.input`
    width: 100%;
    height: 39px;
    background-color: #252525;
    border: none;
    border-radius: 8px;
    padding: 10px;
    color:#575757;
    
`
const InputCommentContent = styled.div`
display: flex;
    position: relative;
img{
    width: 40px;
    height: 40px;
    border-radius: 70%;

    margin-bottom: 20px;
    margin-right: 18px;

    position: relative;
}
.ioioSend{
    all: unset;
    float: right;
    position: absolute;
    z-index: 3;
    right: 10px;
    top: 10px;
    color: white;
}
`

const CommentsContent = styled.div`
width: 90%;

    display: flex;
    flex-direction: column;

    padding: 18px 17px;
    border-radius: 16px;

    background-color: #1E1E1E;
    font-family: "Lato", sans-serif;
    
    @media (max-width: 610px) {
        width: 100%;
        border-radius: 0;

        padding: 15px 9px;
    }

    @media (min-width: 912px) {
        width: 72%
    }
`

const Comment = styled.div`

min-width: 100%;

border-bottom:#353535 solid 1px ;

margin-bottom: 10px;


img{
    width: 40px;
    height: 40px;
    border-radius: 70%;

    margin-bottom: 20px;
    margin-right: 18px;

}
`

const CommentContent = styled.div`
    display: flex;


    
`

const SeparateMessages = styled.div`
.username{
    font-family: 'Lato';
    font-weight: 700;
    font-size: 14px;
    color: #F3F3F3;

    margin-bottom: 5px;
}
.coment{
    font-family: 'Lato';
    font-weight: 400;
    font-size: 14px;
    color: #ACACAC;
}
`

const User = styled.div`
    display: flex;
    .follow{
        margin-left: 4px;
        font-family: 'Lato';
        font-weight: 400;
        font-size: 14px;
        color: #565656;

    }
`