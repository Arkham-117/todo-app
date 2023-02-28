import './Header.scss';
import { HiOutlineMenu } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className='title'><HiOutlineMenu /> Todo App</div>
      <div className='author'><FaUser size={30} />by John Doe</div>
    </header>
  );
}

export default Header;
