// src/components/globals/BracketsView.tsx
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
} from '@g-loot/react-tournament-brackets';
import React from 'react';
import { useEffect, useState } from 'react';


// Tipado para un participante
type Participant = {
  id: string;
  name: string;
  isWinner?: boolean;
  resultText?: string;
};

// Tipado para un match
export type MatchType = {
  id: number;
  name: string;
  nextMatchId: number | null;
  tournamentRoundText: string;
  startTime: string;
  state: 'DONE' | 'WAITING' | 'SCHEDULED';
  participants: Participant[];
};

// Props esperadas por el componente
type BracketsViewProps = {
  matches: MatchType[];
};

const BracketsView: React.FC<BracketsViewProps> = ({ matches }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <div id="bracketContainer" style={{ backgroundColor: '#D9D9D9', padding: '20px', width: '100%' }}>
      <img className='imgBracket1' src="./imgs/Bracket/PokeballDer.png" alt="" />
      <img className='imgBracket2' src="./imgs/Bracket/Pokeballzq.png" alt="" />
      <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        svgWrapper={({ children, ...props }: { children: React.ReactNode;[key: string]: any }) => (
          <SVGViewer  width={dimensions.width} height={dimensions.height} {...props}>
            {children}
          </SVGViewer>
        )}
      />
    </div>
  );
};

export default BracketsView;
