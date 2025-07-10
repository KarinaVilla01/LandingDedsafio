import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (targetId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="header">
      <div className={`logo ${menuOpen ? 'active' : ''}`}>
        <a href="#">
          <img src="/LandingDedsafio/imgs/Globals/LogoFavicon.png" alt="logo-Home" />
        </a>
      </div>

      <input
        type="checkbox"
        id="toggle"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      <label htmlFor="toggle" className={`hamburger ${menuOpen ? 'open' : ''}`}>
        <div className="top-bun"></div>
        <div className="meat"></div>
        <div className="bottom-bun"></div>
      </label>

      <nav className="space-x-6 menuGrandeOculto">
        <a className="iconHeaderSection" onClick={() => navigate('/')}>Inicio</a>                        
        <a className="iconHeaderSection" onClick={() => handleNavClick('aboutEvent')}>Sobre el evento</a>
        <a className="iconHeaderSection" onClick={() => handleNavClick('participants')}>Participantes</a>
        <a className="iconHeaderSection" onClick={() => handleNavClick('format')}>Formato</a>
        <a className="iconHeaderSection" onClick={() => handleNavClick('bracket')}>Bracket</a>
        <a className="iconHeaderSection" onClick={() => handleNavClick('sponsors')}>Patrocinadores</a>
      </nav>


      <hr className={`lineaMenu ${menuOpen ? 'active' : ''}`} />

      <nav className={`navHamb ${menuOpen ? 'active' : ''}`}>
        <h5 className='textDedMenu'>DEDSAFIO POKEMON</h5>
        {[
          { href: '/LandingDedsafio/#', label: 'Inicio' },
          { href: '/LandingDedsafio/#aboutEvent', label: 'Sobre el evento' },
          { href: '/LandingDedsafio/#participants', label: 'Participantes' },
          { href: '/LandingDedsafio/#format', label: 'Formato' },
          { href: '/LandingDedsafio/#bracket', label: 'Bracket' },
          { href: '/LandingDedsafio/#sponsors', label: 'Patrocinadores' }
        ].map((link) => (
          <a className='divElemMenu' key={link.href} href={link.href}
            onClick={handleLinkClick}>
            {link.label}
            <div className='flechaDerechaDiv'>
              <img src="/LandingDedsafio/imgs/Globals/FlechaDer.svg" alt="" />
            </div>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;