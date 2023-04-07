import './Header.scss';
import { HiOutlineMenu } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import MainMenu from '../MainMenu/MainMenu';

function Header() {
  return (
    <>
    <header>
      <div className='title'><HiOutlineMenu /> Todo App</div>
      <div className='author'><FaUser size={30} />by Anantdeep Dhingra</div>
    </header>
    <MainMenu />
    </>
  );
}

export default Header;
