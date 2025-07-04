
const Section4 = () => {

    return (
        <section id="format" className="pt-5 relative py-20 px-4 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto flex lg:flex-row items-center gap-12">
                {/* Imagen */}
                <div className="flex-1 flex justify-center">
                    <img src="./imgs/Formato/MegaBlaziken.png" alt="Personajes" className="with70" />
                </div>

                {/* Texto */}
                <div className="flex-1 space-y-4 text-left">
                    <div className="marginCenter">
                        <div className="aboutLetters">
                            <img src="public\imgs\Formato\formato.png" alt="" />
                        </div>
                        <h2 className="textEntrena font-bold ">
                            DESCUBRE QUIÉN <br />
                            <span className="text-white">SERÁ </span>
                            <span className="textPink">EL MEJOR</span>
                        </h2>
                        <p className="text-sm text-white/80 max-w-md mx-auto lg:mx-0 spaicingNormal textPequeno">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        </p>
                        <a href="#bracket" className="btn-grad3 mt-4">
                            <span className="btn-text">VER MÁS</span>
                            <span className="btn-icon">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;