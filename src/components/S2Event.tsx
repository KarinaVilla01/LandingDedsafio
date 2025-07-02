import { useEffect, useState } from "react";

const Section2 = () => {
  const [timeLeft, setTimeLeft] = useState({ months: 3, days: 3, hours: 3 });

  // Aquí puedes conectar a una lógica real de tiempo luego
  useEffect(() => {
    const targetDate = new Date(new Date().getFullYear(), 7, 1); // 1 de agosto (mes 7)
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      setTimeLeft({ months: 0, days: 0, hours: 0 });
      return;
    }

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const months = Math.floor(totalDays / 30);
    const days = totalDays % 30;

    setTimeLeft({ months, days, hours });
  }, []);

  return (
    <section id="aboutEvent" className="pt-5 relative py-20 px-4 bg-[#0e0e1a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex lg:flex-row items-center gap-12">
        {/* Imagen */}
        <div className="flex-1 flex justify-center">
          <img src="/imgs/Home/Ambos.png" alt="Personajes" className="with70" />
        </div>

        {/* Texto */}
        <div className="flex-1 space-y-4 text-left">
          <div className="marginCenter">
            <div className="aboutLetters">
              <img src="public\imgs\Home\AboutEvent.png" alt="" />
            </div>
            <h2 className="textEntrena font-bold ">
              ENTRETENIMIENTO <br />
              <span className="text-white">AL </span>
              <span className="text-gradient">SIGUIENTE NIVEL</span>
            </h2>
            <p className="text-sm text-white/80 max-w-md mx-auto lg:mx-0 spaicingNormal textPequeno">
              <span className="font-bold">DEDsafio Pokémon</span> lleva la <span className="font-bold">estrategia y el entretenimiento</span> al siguiente nivel <span className="font-bold">con uno de los juegos más querido por los gamers,</span> se convirtió en uno de <span className="font-bold">los eventos más impactantes y comentados del año.</span>
            </p>
            <p className="spaicingNormal textPequeno">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="btn-grad mt-4">
              <span className="btn-text">VER MÁS</span>
              <span className="btn-icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contador */}
      <div className="btn-grad2 centerFlexContador oscuroContador mt-20 mb-20 w-100">
        <p className="faltan">FALTAN</p>
        <div className="flex justify-center gap-8 text-4xl font-bold">
          <div className="numsContador margin-left-contador">
            <p className="text-gradient-vertical">{String(timeLeft.months).padStart(2, '0')}</p>
            <span className="block text-sm text-white/50 mt-2">MESES</span>
          </div>
          <div className="numsContador margin-left-contador">
            <p className="text-gradient-vertical">{String(timeLeft.days).padStart(2, '0')}</p>
            <span className="block text-sm text-white/50 mt-2">DÍAS</span>
          </div>
          <div className="numsContador">
            <p className="text-gradient-vertical">{String(timeLeft.hours).padStart(2, '0')}</p>
            <span className="block text-sm text-white/50 mt-2">HORAS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;