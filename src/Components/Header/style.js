import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 72px;
  background-color: #151515;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 0 18px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 99;

  & >form{
    margin-top: 0px;
    width: 40%;
    border-radius: 8px;

    @media (max-width: 767px) {
      display: none;
    }
  }
`

const Logo = styled(Link)`
  font-family: 'Passion One';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 50px;
  color: #fff;
  text-decoration: none;
`

const IconBox = styled.div`
  width: 30px;
  height: 72px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Picture = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 30px;
`

const UserMenu = styled.div`
  width: 90px;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;  

  cursor: pointer;
`

const DropDown = styled.div`
  width: 130px;
  height: 45px;
  
  color: #FFF;
  background-color: #151515;

  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  transition: display 1s ease-in-out;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 20px;
  
  position: absolute;
  z-index: 99;
  right: 0;
  top: 72px;


  &> p{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    cursor: pointer;
  }
`

export {
  HeaderWrapper,
  Logo,
  IconBox,
  Picture,
  UserMenu,
  DropDown
}