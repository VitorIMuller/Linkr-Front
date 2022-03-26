import styled from "styled-components";

const MainContainer = styled.main`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #333333;
    
    font-family: 'Oswald', sans-serif;

    @media (max-width: 610px) {
        width: 100vw;
    }
`

const TimelineContainer = styled.div`
    padding-bottom: 100px;

    @media (max-width: 610px) {
        width: 100vw;
        padding-bottom: 15px;
    }
`

const TitleContainer = styled.div`

    margin: 53px auto 43px auto;

    font-size: 43px;
    font-weight: 700;
    color: #FFF;
    font-family: 'Oswald', sans-serif;

    @media (max-width: 610px) {
        font-size: 33px;

        margin: 19px 0;
        padding-left: 17px;
    }
`

export {
    TitleContainer,
    MainContainer,
    TimelineContainer
}