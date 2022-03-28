import styled from "styled-components";
import { Link } from 'react-router-dom';

const UserBody = styled(Link)`
    width: 95vw;
    height: 45px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #E7E7E7;
    font-family: "Lato", sans-serif;
    text-decoration: none;

    & img{
    width: 39px;
    height: 39px;
    border: 12px;
    border-radius: 50%;
    }

    & h2 {
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #515151;
    text-decoration: none;

    }

    &hover {
    cursor: pointer;
    filter: brightness(5);
    text-decoration: underline;
    }

    @media (max-width: 610px) {
        width: 563px;
        font-size: 17px;
    }
`;

export { UserBody }