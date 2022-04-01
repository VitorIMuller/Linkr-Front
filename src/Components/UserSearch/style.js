import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai"
import { BsDot } from "react-icons/bs"

const Image = styled.img`
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    `;
const SearchIcon = styled(AiOutlineSearch)`
    top: 9px;
    right: 10px;
    font-size: 25px;
    position: absolute;
    color: #C6C6C6;
`;
const DotIcon = styled(BsDot)`
    /* top: 9px;
    right: 10px;
    font-size: 25px;
    position: absolute; */
    color: #C6C6C6;
`;
const ContainerInputFindUser = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 767px) {
        /* display: none; */
       ${props => props.type === 'mobile' && 'display: none;'}
        
    }
    

    @media screen and (max-width: 767px) {
        /* display: none; */
       ${props => props.type === 'mobile'? 'width: 100%;': 'display: none;'}

       padding: 10px;
        
    }
`;
const InputFindUser = styled.div`
    width: 100%;
    height: 45px;
    position: relative;
   
    .debounce-input {
        width: 100%;
        height: 45px;
        padding-left: 17px;
        
        background-color: white;
        
        border-radius: 8px;
        border: none;
        
        font-family: Lato;
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
        color: #515151;
        
        z-index: 2;
        
        ::placeholder {
        color: #C6C6C6;
       
        }
    }
    
    .list-users {
        width: 100%;
        min-height: 45px;

        padding-top: 30px;
        padding-bottom: 15px;
        
        border-radius: 8px;
        border: none;

        background-color: #E7E7E7;
        font-weight: regular;
        color: red;

        position: absolute;
        top: 0;
        z-index: -1;

        
        div:first-child{
        margin-top: 30px;
        }
        
        div {
        padding: 3px 17px;
        
        display: flex;
        align-items: center;
        
        color: #515151;
        cursor: pointer;
        }

        p {
            color: #C6C6C6
        }
        /* @media (min-width: 767px) {
        
        
        ${props => props.type === 'mobile' && "padding-top: 0;"}
        ${props => props.type === 'mobile' && "z-index: 1;"}
        ${props => props.type === 'mobile' && "top: 45px;"}
        
        
        
        
     
        
        }
    } */
`;

const NameList = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 19px;

`;
const Loader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export {
    InputFindUser,
    ContainerInputFindUser,
    Image,
    SearchIcon,
    NameList,
    Loader,
    DotIcon
};