import styled from "styled-components"

const TitleContainer = styled.p`
    width: 90%;

    text-align: left;

    margin-top: 53px;  
    margin-bottom: 43px;

    word-break: break-all;

    font-size: 43px;
    font-weight: 700;
    line-height: 49px;
    color: #FFF;
    
    img{
        border-radius: 70%;
        width: 50px;
        height: 50px
    }

    @media (max-width: 610px) {
        font-size: 33px;

        margin: 19px 0;
        padding-left: 17px;
    }

    @media (min-width: 912px) {
        width: 72%;
    }
`
const MainContainer = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;
    margin-top: 72px;
    
    background-color: #333333;
    font-family: 'Oswald', sans-serif;
`

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

    @media (max-width: 767px) { //fits on smallest tablet
        display: none;
    }
`

export {
    TitleContainer,
    MainContainer,
    LeftWrapper,
    RightWrapper
}