import useAuth from '../../Assets/useAuth';
import { HeaderWrapper, IconBox, Logo, Picture, UserMenu, DropDown } from './style';
import { IoIosArrowUp as Open, IoIosArrowDown as Closed } from 'react-icons/io'

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
        <IconBox onClick={ handleMenu() }>
          { isOpen === true ? Open : Closed }
        </IconBox>
        <Picture 
          src={ user.picture } 
          alt='user profile picture'
          onClick={ handleMenu() }
        />
      </UserMenu>
      <DropDown isOpen={isOpen}>
        <p onClick={ logOut() }>Logout</p>
      </DropDown>
    </HeaderWrapper>
  )
}

export default Header;