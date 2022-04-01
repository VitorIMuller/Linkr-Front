import styled from "styled-components";
import { Link } from 'react-router-dom';

const PostBody = styled.div`
    width: 90%;

    display: flex;

    padding: 18px 17px;
    border-radius: 16px;

    background-color: #171717;
    font-family: "Lato", sans-serif;
    
    ${props => props.repostedBy ? '' : 'margin-top: 16px;'}

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
        width: 83px;
        display: flex;
        flex-direction: column;
        align-items: center;

        color: #FFF;
`;

const UserPicture = styled.div`
    padding-bottom: 10px;
    
    & > * {
        width: 50px;
        height: 50px;

        border-radius: 50%;
    }

    @media (max-width: 610px) {
        padding-bottom: 2px;
        
        & > * {
            width: 40px;
            height: 40px;
        }
    }
`;

const TextContainer = styled.div`
    width: calc(100% - 87px);
    
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
        border: none;
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

const RepostedBy = styled.div`
    width: 72%;

    display: flex;
    align-items: center;

    color: #FFF;
    background-color: #1E1E1E;
    border-radius: 16px;

    margin-top: 16px;
    margin-bottom: -30px;
    
    padding-bottom: 30px;
    padding-left: 13px;

    span {
        margin: 11px;

        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
    }

    a {
        all: unset;
        padding-left: 3px;
    }

    strong {
        font-size: 13px;
        font-weight: 700;

        padding-left: 3px;
    }

    @media (max-width: 610px) {
        width: 100% !important;
        border-radius: 0;
    }

    @media (max-width: 912px) {
        width: 90%
    }
`

export {
    PostBody,
    UserContainer,
    UserPicture,
    TextContainer,
    UserName,
    UserMessage,
    MetadataContainer,
    IconContainer,
    RepostedBy
}