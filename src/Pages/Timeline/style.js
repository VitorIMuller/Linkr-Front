import styled from "styled-components";

const MainContainer = styled.main`
    min-width: 100%;
    min-height: 100vh;

    background-color: #333333;

    font-family: 'Oswald', sans-serif;
`

const TitleContainer = styled.div`
    margin-top: 72px;

    min-height: 87px;
    min-width: 100vw;

    display: flex;
    justify-content: left;
    align-items: center;

    padding-left: 17px;

    span {
        font-size: 33px;
        font-weight: 700;
        color: #FFF;
        font-family: 'Oswald', sans-serif;
    }
`

const NewPostContainer = styled.div`
    width: 100%;
    min-height: 164px;

    background-color: #FFF;
`

export {
    TitleContainer,
    MainContainer,
    NewPostContainer
}