import styled from "styled-components";
import { Link } from 'react-router-dom';

const PostBody = styled.div`
    width: 90%;

    display: flex;

    padding: 18px 17px;
    margin-top: 16px;
    border-radius: 16px;

    background-color: #171717;
    font-family: "Lato", sans-serif;

    @media (max-width: 610px) {
        width: 100%;
        border-radius: 0;

        padding: 15px 9px;
    }

    @media (min-width: 912px) {
        width: 72%
    }
`;

const UserContainer = styled.div`
        width: 87px;
        display: flex;
        flex-direction: column;
        align-items: center;

        color: #FFF;

        margin-left: -15px;

        @media (max-width: 610px) {
            width: 70px;
        }
`;

const UserPicture = styled.div`
    & > * {
        width: 50px;
        height: 50px;

        border-radius: 50%;
    }

    @media (max-width: 610px) {
        & > * {
            width: 40px;
            height: 40px;
        }
    }
`;

const TextContainer = styled.div`
    width: calc(100% - 55px);
    
    display: flex;
    flex-direction: column;

    position: relative;
    
    gap: 7px;
    .edit-input{
        width: 100%;
        height: 44px;
        border-radius: 7px;

        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        color: #4C4C4C;
      
    }
`;

const IconContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    color: #FFF;
    
    .edit {
        width: 18px;
        height: 18px;

        cursor: pointer;
    }

    .trashcan {
        width: 18px;
        height: 18px;

        margin-left: 15px;

        cursor: pointer;
    }
`

const UserName = styled(Link)`
    max-width: 455px;
    
    font-size: 19px;
    font-weight: 400;
    line-height: 20.4px;
    color: #FFF;
    
    padding-bottom: 8px;
    word-break: break-word;
    
    text-decoration: none;

    &hover {
        cursor: pointer;
        filter: brightness(5);
        text-decoration: underline;
    }

    @media (max-width: 610px) {
        font-size: 17px;
        max-width: 57vw;

        padding-bottom: 4px;
    }
`;

const UserMessage = styled.div`
    font-size: 17px;
    font-weight: 400;
    line-height: 20.7px;
    color: #B7B7B7;

    padding-bottom: 8px;

    span {
        font-size: 15px;
        font-weight: 700;
        line-height: 20.4px;
        color: #FFF;

        gap: 5px;

        cursor: pointer;
    }

    @media (max-width: 610px) {
        font-size: 15px;
        line-height: 18px;

        padding-bottom: 4px;
    }
`;

const MetadataContainer = styled.div` 
    max-height: 10em;
    
    a {
        all: unset;
    }
`;

export {
    PostBody,
    UserContainer,
    UserPicture,
    TextContainer,
    UserName,
    UserMessage,
    MetadataContainer,
    IconContainer
}