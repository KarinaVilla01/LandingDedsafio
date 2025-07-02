// src/components/globals/BracketsView.tsx
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
} from '@g-loot/react-tournament-brackets';
import React from 'react';

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
  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
      <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        svgWrapper={({ children, ...props }) => (
          <SVGViewer width={800} height={500} {...props}>
            {children}
          </SVGViewer>
        )}
      />
    </div>
  );
};

export default BracketsView;
