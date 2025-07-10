import Header from './globals/Header';
import '../About.css';
import Footer from '../components/globals/Footer'

const AboutEventPage = () => {
    return (
        <>
            <section
                className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center backgoundHeroAbout">
                <Header />
                <div className="min-h-screen text-white p-10 topBanner">
                    <div className="bannerDiv">
                        <h1>SOBRE EL EVENTO</h1>
                    </div>
                    <div className="primerSectionAbout">
                        <div className='showCel'>
                            <img src="/LandingDedsafio/imgs/AboutEvent/Alexia2.png" alt="" />
                        </div>
                        <div className='textEntretene'>
                            <h2 className="textEntrena font-bold ">
                                ENTRETENIMIENTO <br />
                                <span className="text-white">AL </span>
                                <span className="textPink">SIGUIENTE NIVEL</span>
                            </h2>
                            <p className="text-sm text-white/80 max-w-md mx-auto lg:mx-0 spaicingNormal textPequeno">
                                <span className="font-bold">DEDsafio Pokémon</span> lleva la <span className="font-bold">estrategia y el entretenimiento</span> al siguiente nivel <span className="font-bold">con uno de los juegos más querido por los gamers,</span> se convirtió en uno de <span className="font-bold">los eventos más impactantes y comentados del año.</span>
                            </p>
                            <ul className='listAbout'>
                                <li>
                                    Revolucionamos los eventos de la comunidad.
                                </li>
                                <li>
                                    Formato innovador, narrativa dinámica y reglas únicas.
                                </li>
                                <li>
                                    Más interacción entre streamers y comunidades en tiempo real.
                                </li>
                                <li>
                                    Experiencia inolvidable para participantes y audiencia.
                                </li>
                                <li>
                                    Contenido de alto impacto para el crecimiento de los streamers.
                                </li>
                                <li>
                                    Tuvo contenido para Tiktok, Twitter, Youtube Shorts e Instagram, llevando DEDsafio Pokémon a todo el público.
                                </li>
                            </ul>
                        </div>
                        <div className='noShow'>
                            <img src="/LandingDedsafio/imgs/AboutEvent/Alexia1.png" alt="" />
                        </div>
                    </div>
                    <div className="clips">
                        <div className='cardParticipantsSection'>
                            <div className='divParticipant'>
                                <h2 className="titulo">nuestros antecedentes</h2>
                            </div>
                            <div className="grid-clips">
                                <img className='poke1Clips' src="/LandingDedsafio/imgs/Participants/PokeballIzq.png" alt="" />
                                <img className='poke2Clips' src="/LandingDedsafio/imgs/Participants/Pokeball.png" alt="" />
                                <div className='cardAntecedentes'>
                                    <img src="/LandingDedsafio/imgs/AboutEvent/Ded_Foto.png" alt="" />
                                </div>
                                <div className='cardAntecedentes'>
                                    <img src="/LandingDedsafio/imgs/AboutEvent/Ded_Foto.png" alt="" />
                                </div>
                                <div className='cardAntecedentes'>
                                    <img src="/LandingDedsafio/imgs/AboutEvent/Ded_Foto.png" alt="" />
                                </div>
                                <div className='cardAntecedentes'>
                                    <img src="/LandingDedsafio/imgs/AboutEvent/Ded_Foto.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    );
};

export default AboutEventPage;
