import styled from "styled-components";

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 200px;

    color: #FFF;

    @media(max-width: 610px) {
        padding: 100px;
    }
`;

const Title = styled.h1`
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    
    text-align: center;

    padding: 20px 100px;
    
    color: #FFF;

    @media (max-width: 610px) {
        font-size: 25px;
        line-height: 30px;
        padding: 10px 25px;
    }
`;

const NoButton = styled.button`
    width: 134px;
    height: 37px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 22px;

    border-radius: 5px;
    text-align: center;

    background-color: #FFF;
    color: #1877F2;
    
    cursor: pointer;

    @media (max-width: 610px) {
        width: 108px;
        height: 32px;
        
        font-size: 14px;
        line-height: 18px;
    }
`;

const YesButton = styled.button`
    width: 134px;
    height: 37px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 22px;

    border-radius: 5px;
    text-align: center;

    background-color: #1877F2;
    color: #FFF;

    cursor: pointer;

    @media (max-width: 610px) {
        width: 108px;
        height: 32px;
        
        font-size: 14px;
        line-height: 18px;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 27px;

    padding: 20px;

    @media (max-width: 610px) {
        gap: 20px;
        
        padding: 10px 0;
    }
`;

export {
    Title,
    NoButton,
    YesButton,
    Buttons,
    LoadingContainer
}