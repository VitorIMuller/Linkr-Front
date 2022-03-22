import styled from "styled-components";
import { Link } from "react-router-dom";
const TopBar = styled.div`
    min-height: 175px;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #151515;


`

const Title = styled.div`
    font-size: 76px;
    font-weight: bold;
    color: #FFFFFF;
    font-family: 'Passion One', cursive;

`;

const SubTitle = styled.div`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 23px;
    font-family: 'Oswald', sans-serif;
`
const Container = styled.div`
height: 100vh;
background-color:#333333 ;
`
const LowerBar = styled.div`
    background-color: #333333;
    min-width: 100vw;
    min-height: 81vh;

    padding-top: 40px;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const StyledInput = styled.input`
    all: unset;
    box-sizing: border-box;
    width: 80%;
    height: 55px;
    padding: 18px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #000000;
    ::placeholder {
        color:#9F9F9F;
        font-size: 22px;
        font-weight: bold;
        font-family: 'Oswald', sans-serif;
    }
`;

const StyledButton = styled.button`
    border: none;
    text-align: center;
    width: 80%;
    height: 55px;
    border-radius: 5px;
    background-color: #1877F2;
    font-size: 22px;
    font-weight: bold;
    color: white;
    font-family: 'Oswald', sans-serif;
`;
const StyledLink = styled(Link)`
    font-family: 'Lato', sans-serif;
    color: #ffffff;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    margin-top: 20px;
`;
export {
    Title,
    SubTitle,
    TopBar,
    Container,
    LowerBar,
    Form,
    StyledInput,
    StyledButton,
    StyledLink
}