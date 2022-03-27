import styled from "styled-components";

const MainContainer = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    
    background-color: #333333;
    
    font-family: 'Oswald', sans-serif;

    @media (max-width: 610px) {
        width: 100%;
    }
`

const TimelineContainer = styled.div`
    margin: 0 50%;

    display: flex; 
    flex-direction: column;
    align-items: center;

    padding-bottom: 100px;

    @media (max-width: 610px) {
        width: 100%;
    }
`

const TitleContainer = styled.div`
    width: 100%;

    text-align: left !important;

    margin-top: 53px;  
    margin-bottom: 43px;  

    font-size: 43px;
    font-weight: 700;
    line-height: 49px;
    color: #FFF;

    background-color: #333333;

    @media (max-width: 610px) {
        font-size: 33px;

        margin: 19px 0;
        padding-left: 17px;
    }
`

const NoPost = styled.div`
    width: 60%;
    
    justify-content: center;
    text-align: center;

    font-size: 33px;
    font-weight: 700;
    color: #FFF;

    padding-top: 200px;
    padding-bottom: 500px;

    @media (max-width: 610px) {
        width: 80%;

        font-size: 25px;
        padding-top: 100px;
    }
`

export {
    TitleContainer,
    MainContainer,
    TimelineContainer,
    NoPost
}