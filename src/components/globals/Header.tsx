const Header = () => (
  <header className="container absolute top-0 left-0 w-full z-10 flex items-center justify-between px-6 py-4 text-white">
    <div className="text-lg font-bold iconImg">
      <a href="#">
      <img src="public/imgs/Globals/Pokeball.png" className="" alt="logo-Home" />
      </a>
    </div>
    <nav className="space-x-6">
      <a href="#" className="iconHeaderSection">Inicio</a>
      <a href="#aboutEvent" className="iconHeaderSection">Sobre el evento</a>
      <a href="#participants" className="iconHeaderSection">Participantes</a>
      <a href="#format" className="iconHeaderSection">Formato</a>
      <a href="#bracket" className="iconHeaderSection">Bracket</a>
      <a href="#sponsors" className="iconHeaderSection">Patrocinadores</a>
    </nav>
  </header>
);
export default Header;