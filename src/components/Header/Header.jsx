import { useEffect, useState } from 'react';
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
        <img
          src={navClass ? 'logo-fiverr-white.svg' : 'logo-fiverr-black.svg'}
          alt="Logo"
          className={`logo ${navClass}`}
        />
        <div className={`links ${navClass}`}>
          <a
            href="https://react.school"
            target="_blank"
            rel="noreferrer"
            className={`ad ${navClass}`}
          >
            Place an ad
          </a>
          <div className={`button-sign ${navClass}`}>Sign in</div>
        </div>
      </div>
    </SNavbar>
  );
}
