import '../Navbar/navbar.css';
import NavbarList from './NavbarList';
import NavbarLogo from './NavbarLogo';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <NavbarLogo />
      <NavbarList />
    </div>
  );
};

export default Navbar;
