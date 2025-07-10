import '../Sponsors.css';

const BigComponent = () => {

    return (
        <section id="sponsors" className="pt-5 relative py-20 px-4 text-white overflow-hidden">
            <div className="btn-grad2 centerFlexContador oscuroContador mt-20 mb-20 w-100">
                <p className="tituloSponsor">NUESTROS SPONSORS</p>
                <div className="sponsors-grid">
                    <img src="/LandingDedsafio/imgs/Globals/PokeballSponsor.png" className="sponsor-img" alt="logoASponsor" />
                    <img src="/LandingDedsafio/imgs/Globals/PokeballSponsor.png" className="sponsor-img" alt="logoASponsor" />
                    <img src="/LandingDedsafio/imgs/Globals/PokeballSponsor.png" className="sponsor-img" alt="logoASponsor" />
                    <img src="/LandingDedsafio/imgs/Globals/PokeballSponsor.png" className="sponsor-img" alt="logoASponsor" />
                    <img src="/LandingDedsafio/imgs/Globals/PokeballSponsor.png" className="sponsor-img" alt="logoASponsor" />
                    <img src="/LandingDedsafio/imgs/Globals/PokeballSponsor.png" className="sponsor-img" alt="logoASponsor" />
                    <img src="/LandingDedsafio/imgs/Globals/PokeballSponsor.png" className="sponsor-img noSponsorCel" alt="logoASponsor" />
                    <img src="/LandingDedsafio/imgs/Globals/PokeballSponsor.png" className="sponsor-img noSponsorCel" alt="logoASponsor" />
                    <img src="/LandingDedsafio/imgs/Globals/PokeballSponsor.png" className="sponsor-img noSponsorCel" alt="logoASponsor" />
                    <img src="/LandingDedsafio/imgs/Globals/PokeballSponsor.png" className="sponsor-img noSponsorCel" alt="logoASponsor" />
                </div>
                <div className='contactUsDiv'>
                    <p>¿QUIERES SER PATROCINADOR DEL EVENTO?</p>
                    <a href='#' className="btn-grad-contact mt-4">
                        <span className="btn-text">CONTÁCTANOS</span>
                        <span className="btn-icon">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BigComponent;