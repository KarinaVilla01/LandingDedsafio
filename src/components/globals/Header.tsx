import { useState } from 'react';
import '../../Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en un link
  };

  return (
    <header className="header">
      <div className={`logo ${menuOpen ? 'active' : ''}`}>
        <a href="#">
          <img src="./imgs/Globals/LogoFavicon.png" alt="logo-Home" />
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
        <a href="#" className="iconHeaderSection">Inicio</a>
        <a href="#aboutEvent" className="iconHeaderSection">Sobre el evento</a>
        <a href="#participants" className="iconHeaderSection">Participantes</a>
        <a href="#format" className="iconHeaderSection">Formato</a>
        <a href="#bracket" className="iconHeaderSection">Bracket</a>
        <a href="#sponsors" className="iconHeaderSection">Patrocinadores</a>
      </nav>


      <hr className={`lineaMenu ${menuOpen ? 'active' : ''}`} />

      <nav className={`navHamb ${menuOpen ? 'active' : ''}`}>
        <h5 className='textDedMenu'>DEDSAFIO POKEMON</h5>
        {[
          { href: '#', label: 'Inicio' },
          { href: '#aboutEvent', label: 'Sobre el evento' },
          { href: '#participants', label: 'Participantes' },
          { href: '#format', label: 'Formato' },
          { href: '#bracket', label: 'Bracket' },
          { href: '#sponsors', label: 'Patrocinadores' }
        ].map((link) => (
          <a className='divElemMenu' key={link.href} href={link.href}
            onClick={handleLinkClick}>
            {link.label}
            <div className='flechaDerechaDiv'>
              <img src="./imgs/Globals/FlechaDer.svg" alt="" />
            </div>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;