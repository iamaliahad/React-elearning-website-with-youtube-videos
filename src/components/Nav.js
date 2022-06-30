import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className='card grey darken-4'>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Bengali Boss
          </Link>
          
          <ul className="right hide-on-med-and-down">
            <li className='border'>
              <Link to="nodejs">Blog</Link>
            </li>
            
          </ul>
        </div>
      </nav>

      
    </>
  );
}

export default Nav;
