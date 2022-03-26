import styled from "styled-components"
const TitleContainer = styled.div`
    min-height: 87px;
    min-width: 100vw;

    display: flex;
    justify-content: left;
    align-items: center;
    gap:15px;

    padding-left: 17px;

    span {
        font-size: 33px;
        font-weight: 700;
        color: #FFF;
        font-family: 'Oswald', sans-serif;
    }
    img{
        border-radius: 70%;
        width: 50px;
        height: 50px
    }

`
const MainContainer = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #333333;
    
    font-family: 'Oswald', sans-serif;

    @media (max-width: 610px) {
        width: 100vw;
    }
`

export {
    TitleContainer,
    MainContainer
}