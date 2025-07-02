import Header from './globals/Header';

const Section1 = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('./imgs/Home/Background1.png')" }}
    >
      <Header />
      <div className="text-center z-10">
        <p className="mb-2 text-sm letras">AGOSTO 1 | TWITCH</p>
        <img className='imgLogoHero' src="./imgs/Home/DedsafioLogo.svg" alt="logoDedsafio" />
        <div className="mt-10 animate-bounce moreLetters">DESCUBRE MÁS</div>
        <div className="animate-bounce mt-1">
          <a
            href="#aboutEvent"
            className="transition animate-bounce"
          >
            <img src="./imgs/ic_circle.png" className="imgDown" alt="descubreMas" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section1;
