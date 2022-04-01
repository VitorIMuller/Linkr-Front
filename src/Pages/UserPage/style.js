import styled from "styled-components"

const TitleContainer = styled.div`
    width: 100%;
    height: 154px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 72px;
    padding-left: 7%;
    padding-right: 4%;

    word-break: break-all;
    background-color: #333333;

    font-size: 43px;
    font-weight: 700;
    line-height: 49px;
    text-align: left;
    color: #FFF;
    
    img{
        border-radius: 70%;
        width: 55px;
        height: 55px;
        margin-right: 18px;
    }

    @media (max-width: 610px) {
        font-size: 33px;
        padding-left: 17px;
        padding-right: 17px;
    }

    @media (min-width: 912px) {
        padding-left: 20%;
        padding-right: 10%;
    }
`
const UserTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const MainContainer = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;
    
    background-color: #333333;
    font-family: 'Oswald', sans-serif;
    
`

const UserContainer = styled.div`
    margin: 0 50%;

    display: flex; 
    flex-direction: column;
    align-items: center;

    padding-bottom: 100px;

    @media (max-width: 610px) {
        width: 100%;
    }
`;

const LeftWrapper = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    background-color: #333333;

    padding-bottom: 100px;

    &> div:first-of-type{
        margin-top: 0;
    }

    @media (max-width: 767px) {
        width: 100%;
        align-items: center;
    }

    @media (min-width: 912px) {
        width: 72% !important;

        & > * {
            width: 72%;
        }
    }
`
const RightWrapper = styled.div`
    width: 40%;
    padding-left: 25px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    background-color: #333333;

    position: relative;

    @media (max-width: 767px) {
        display: none;
    }
`

export {
    TitleContainer,
    UserTitle,
    MainContainer,
    LeftWrapper,
    RightWrapper,
    UserContainer
}