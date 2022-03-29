import styled from "styled-components"

const TitleContainer = styled.p`
    width: 90%;
    display: flex;
    text-align: left;

    margin-top: 53px;  
    margin-bottom: 31px;

    font-size: 43px;
    font-weight: 700;
    line-height: 49px;
    color: #FFF;
    
    img{
        border-radius: 70%;
        width: 55px;
        height: 55px;
        margin-right: 18px;
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
    MainContainer,
    LeftWrapper,
    RightWrapper,
    UserContainer
}