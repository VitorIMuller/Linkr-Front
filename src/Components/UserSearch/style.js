import styled from 'styled-components';

const Search = styled.form`
    
    width: 100%;
    height: 45px;
    display: flex;
    margin-top: 82px;
    border-radius: 8px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
   
    background-color: #333;

    & input {
    width: 100%;
    padding-left: 13px;
    background-color: #EFEFEF;
    border-radius: 8px;
    font-weight: 400;
    font-size: 19px;
    line-height: 20px;
    color: #C6C6C6;
    border: none;
    }

    @media (max-width: 610px) {
        width: 100%;
        border-radius: none;
        font-size: 17px;

        & >input{
            border-radius: none;
        }
    }
`;
const NoUser = styled.div`
    width: 350px;
    
    justify-content: center;
    text-align: center;

    font-size: 17px;
    font-weight: 400;
    color: #C6C6C6;

    @media (max-width: 610px) {
    width: 80%;

    font-size: 17px;
    }
`
export { 
    Search,
    NoUser
} ;