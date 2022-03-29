import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { HeaderWrapper, IconBox, Logo, Picture, UserMenu, DropDown } from './style';
import { IoIosArrowUp as Open, IoIosArrowDown as Closed } from 'react-icons/io'
import default_profile_pic from "../../Assets/img/blank-profile-picture.png"
import SearchUser from '../UserSearch';

function Header() {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <HeaderWrapper>
      <Logo to="/timeline" onClick={() => window.scrollTo(0, 0)}>linkr</Logo>
      <SearchUser />
      <UserMenu>
        <IconBox onClick={() => handleMenu()}>
          {isOpen === true ? <Open color="white" fontSize="30px" /> : <Closed color="white" fontSize="30px" />}
        </IconBox>
        <Picture
          src={user ? user.image : default_profile_pic}
          alt='user profile picture'
          onClick={() => handleMenu()}
        />
      </UserMenu>
      <DropDown isOpen={isOpen}>
        <p onClick={() => logOut()}>Logout</p>
      </DropDown>
    </HeaderWrapper>
  )
}

export default Header;