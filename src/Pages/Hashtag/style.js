import styled from "styled-components"

const TitleContainer = styled.div`
    width: 90%;

    text-align: left;

    margin-top: 53px;  
    margin-bottom: 43px;

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
        width: 72%
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

    @media (max-width: 767px) {
        width: 100%;
        align-items: center;
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