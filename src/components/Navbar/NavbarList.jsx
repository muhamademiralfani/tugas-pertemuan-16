import Button from '../Button/';

const NavbarList = () => {
  const navbarList = ['About', 'Our Service', 'Portfolio', 'Blog', 'Contact'];
  return (
    <div className='navbar-list'>
      <ul>
        {navbarList.map((list, index) => (
          <li key={index}>
            <a href='#'>{list}</a>
          </li>
        ))}
      </ul>
      <Button name={'Get In Touch'} />
    </div>
  );
};

export default NavbarList;
