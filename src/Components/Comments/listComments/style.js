import styled from "styled-components"
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

export {
    CommentContent,
    Comment,
    SeparateMessages,
    User
}