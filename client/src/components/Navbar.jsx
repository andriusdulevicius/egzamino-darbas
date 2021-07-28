import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__content container'>
        <Link to='/' className='nav-logo nav-link'>
          Mano<strong>Logo</strong>
        </Link>
        <div className='nav-links'>
          <Link className='nav-link' to='/about'>
            About
          </Link>
          <Link className='nav-link' to='/'>
            Visi vartotojai
          </Link>
          <Link className='nav-link' to='/createNewUser'>
            Sukurti naują
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
