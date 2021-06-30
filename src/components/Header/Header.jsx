import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SNavbar from './Style';

export default function Header() {
  const [navClass, setNavClass] = useState('isTop');

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setNavClass('isTop');
      } else {
        setNavClass(null);
      }
    };
  }, []);

  return (
    <SNavbar>
      <div className={`navbar ${navClass}`}>
        <Link to="/">
          <img
            src={navClass ? 'logo-fiverr-white.svg' : 'logo-fiverr-black.svg'}
            alt="Logo"
            className={`logo ${navClass}`}
          />
        </Link>
        <div className={`links ${navClass}`}>
          <Link className={`ad ${navClass}`} to="/form">
            Post swap
          </Link>
          <div className={`button-sign ${navClass}`}>Sign in</div>
        </div>
      </div>
    </SNavbar>
  );
}
