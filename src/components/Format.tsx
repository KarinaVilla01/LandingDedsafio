import Header from './globals/Header';
import '../Format.css';
import Footer from './globals/Footer'

const Format = () => {
    return (
        <>
            <section
                className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center backgoundHeroAbout">
                <Header />
                <div className="text-white p-10 topBanner">
                    <div className="bannerDiv">
                        <h1>FORMATO</h1>
                    </div>
                    <section className="brackets-section2" id="bracket">
                        <div className="bracket-box">

                        </div>
                    </section>
                </div>
            </section >
            <Footer />
        </>
    );
};

export default Format;
