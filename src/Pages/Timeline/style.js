import styled from "styled-components";

const MainContainer = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;
    margin-top: 72px;
    
    background-color: #333333;
    font-family: 'Oswald', sans-serif;
`;

const LeftWrapper = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    background-color: #333333;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

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
`;

const TimelineContainer = styled.div`
    width: 100%;

    display: flex; 
    flex-direction: column;
    align-items: flex-end;

    padding-bottom: 100px;

    .infinite-scroll{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    @media (max-width: 767px) {
        width: 100%;
        align-items: center;
    }
`;

const TitleContainer = styled.div`
    width: 90%;

    text-align: left;

    margin-top: 53px;  
    margin-bottom: 43px;

    font-size: 43px;
    font-weight: 700;
    line-height: 49px;
    color: #FFF;

    @media (max-width: 610px) {
        font-size: 33px;

        margin: 19px 0;
        padding-left: 17px;
    }

    @media (min-width: 912px) {
        width: 72%
    }
`;

const NoPost = styled.div`
    width: 90%;

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

    @media (min-width: 912px) {
        width: 72%
    }
`;

const LoadingContainer = styled.div`
    width: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 200px;
    padding-bottom: 500px;

    color: #FFF;

    @media (max-width: 610px) {
        padding-top: 150px;
    }

    @media (min-width: 912px) {
        width: 72%
    }
`;

const Reloader = styled.div`
    width: 90%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1877F2;

    border: none;
    border-radius: 16px;
    margin-top: 40px;
    cursor: pointer;

    color: #fff;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    &>span{
        margin-right: 14px;
    }

    @media (max-width: 610px) {
        width: 100%;
        border-radius: 0px;
    }

    @media (min-width: 912px) {
        width: 72%
    }
`


export {
    TitleContainer,
    MainContainer,
    TimelineContainer,
    NoPost,
    LeftWrapper,
    RightWrapper,
    LoadingContainer,
    Reloader
}