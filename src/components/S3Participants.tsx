import '../Section3.css';
import { useState } from 'react';
import data from '../assets/participantes.json';

const Section3 = () => {
  const [participantes] = useState(data);

  return (
    <section id="participants" className="section3">
      <div className='cardParticipantsSection'>
        <div className='divParticipant'>
          <h2 className="titulo">PARTICIPANTES</h2>
          {/* <img className='degradadoImg' src="./imgs/Participants/Degradado.png" alt="degradado" /> */}
        </div>

        <div className="grid-participantes">
          <img className='poke1Participants' src="./imgs/Participants/PokeballIzq.png" alt="" />
          <img className='poke2Participants' src="./imgs/Participants/Pokeball.png" alt="" />
          {participantes.map((p, i) => (
            <div key={i} className="card">
              <img src={p.foto} alt={p.nombre} className="card-img" />
              <h3 className="card-nombre">{p.nombre}</h3>
              <p className="card-desc">{p.descripcion}</p>
              <div className="redes">
                {p.redes.map((r, j) => (
                  <a key={j} href={(p.links as Record<string, string>)[r]} target="_blank" rel="noopener noreferrer">
                    <img
                      src={`./imgs/Participants/${r.charAt(0).toUpperCase() + r.slice(1)}.svg`}
                      alt={r}
                      className="icon"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="btn-vermas">
          VER MÁS <span className="flecha">➜</span>
        </button>
      </div>
    </section>
  );
};

export default Section3;