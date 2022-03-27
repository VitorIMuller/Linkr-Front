import styled from 'styled-components';

const Search = styled.form`
    
    width: 350px;
    height: 45px;
    display: flex;
    margin-top: 10px;
    border-radius: 8px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
   
    & input {
    width: 100%;
    padding-left: 13px;
    background-color: #EFEFEF;
    border-radius: 8px;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #C6C6C6;
    border: none;
  }
`;

export { 
    Search
} ;