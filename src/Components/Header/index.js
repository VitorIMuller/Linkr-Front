import useAuth from '../../Hooks/useAuth';
import { HeaderWrapper, IconBox, Logo, Picture, UserMenu, DropDown } from './style';
import { IoIosArrowUp as Open, IoIosArrowDown as Closed } from 'react-icons/io'
import default_profile_pic from "../../Assets/img/blank-profile-picture.png"

function Header() {
  const { user, logOut } = useAuth();

  let isOpen = false;

  function handleMenu() {
    isOpen = !isOpen;
  }

  return (
    <HeaderWrapper>
      <Logo>linkr</Logo>
      <UserMenu>
        <IconBox onClick={() => handleMenu()}>
          {isOpen === true ? <Open color="white" /> : <Closed color="white" />}
        </IconBox>
        <Picture
          src={user.image && default_profile_pic}
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