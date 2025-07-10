import { useState, useEffect } from 'react';
import Header from './globals/Header';
import '../About.css';
import Footer from '../components/globals/Footer'
import data from '../assets/participantes.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

const Participants = () => {
    const [participantes] = useState(data);
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const checkSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    const Card = (p: (typeof participantes)[0]) => (
        <div id='participantsCarrousel' className="card">
            <img src={p.foto} alt={p.nombre} className="card-img" />
            <h3 className="card-nombre">{p.nombre}</h3>
            <p className="card-desc">{p.descripcion}</p>
            <div className="redes">
                {p.redes.map((r, j) => (
                    <a
                        key={j}
                        href={(p.links as Record<string, string>)[r]}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={`/LandingDedsafio/imgs/Participants/${r.charAt(0).toUpperCase() + r.slice(1)}.svg`}
                            alt={r}
                            className="icon"
                        />
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <section className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center backgoundHeroAbout">
                <Header />
                <div className="min-h-screen text-white p-10 topBanner">
                    <div className="bannerDiv">
                        <h1>PARTICIPANTES</h1>
                    </div>

                    <div className="cardParticipantsSection mt-5">
                        <img className="poke1Clips" src="/LandingDedsafio/imgs/Participants/PokeballIzq.png" alt="" />
                        <img className="poke2Clips rigthCardPoke" src="/LandingDedsafio/imgs/Participants/Pokeball.png" alt="" />

                        {isMobile ? (
                            <Swiper modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 3000, // 3 segundos entre slides
                                    disableOnInteraction: false, // sigue auto aunque el usuario lo mueva
                                }}>
                                {participantes.map((p, i) => (
                                    <SwiperSlide key={i}>{Card(p)}</SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <div className="grid-participantes">
                                {participantes.map((p, i) => (
                                    <div key={i}>{Card(p)}</div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Participants;

