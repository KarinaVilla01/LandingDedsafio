import React from 'react';
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
} from '@g-loot/react-tournament-brackets';
import type { ReactNode } from 'react';


// Tipos
export type Participant = {
  id: string;
  name: string;
  isWinner?: boolean;
  resultText?: string;
};

export type MatchType = {
  id: number;
  name: string;
  nextMatchId: number | null;
  tournamentRoundText: string;
  startTime: string;
  state: 'DONE' | 'WAITING' | 'SCHEDULED';
  participants: Participant[];
};

// Datos simulados
const ligaIzquierda: MatchType[] = [
  {
    id: 1,
    name: 'Match 1',
    nextMatchId: 5,
    tournamentRoundText: '1',
    startTime: '',
    state: 'DONE',
    participants: [
      { id: '1', name: 'DED', isWinner: true },
      { id: '2', name: 'MARI', isWinner: false },
    ],
  },
  {
    id: 2,
    name: 'Match 2',
    nextMatchId: 5,
    tournamentRoundText: '1',
    startTime: '',
    state: 'DONE',
    participants: [
      { id: '3', name: 'LOLO', isWinner: true },
      { id: '4', name: 'VANE', isWinner: false },
    ],
  },
  {
    id: 5,
    name: 'Semifinal 1',
    nextMatchId: 7,
    tournamentRoundText: '2',
    startTime: '',
    state: 'DONE',
    participants: [
      { id: '1', name: 'DED', isWinner: true },
      { id: '3', name: 'LOLO', isWinner: false },
    ],
  },
];

const ligaDerecha: MatchType[] = [
  {
    id: 3,
    name: 'Match 3',
    nextMatchId: 6,
    tournamentRoundText: '1',
    startTime: '',
    state: 'DONE',
    participants: [
      { id: '5', name: 'ROXY', isWinner: false },
      { id: '6', name: 'DEIV', isWinner: true },
    ],
  },
  {
    id: 4,
    name: 'Match 4',
    nextMatchId: 6,
    tournamentRoundText: '1',
    startTime: '',
    state: 'DONE',
    participants: [
      { id: '7', name: 'LIZ', isWinner: false },
      { id: '8', name: 'NIKO', isWinner: true },
    ],
  },
  {
    id: 6,
    name: 'Semifinal 2',
    nextMatchId: 7,
    tournamentRoundText: '2',
    startTime: '',
    state: 'DONE',
    participants: [
      { id: '6', name: 'DEIV', isWinner: false },
      { id: '8', name: 'NIKO', isWinner: true },
    ],
  },
];

const finalMatch: MatchType[] = [
  {
    id: 7,
    name: 'Final',
    nextMatchId: null,
    tournamentRoundText: '3',
    startTime: '',
    state: 'WAITING',
    participants: [
      { id: '1', name: 'DED', isWinner: false },
      { id: '8', name: 'NIKO', isWinner: false },
    ],
  },
];

const CustomBrackets = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
      <div>
        <SingleEliminationBracket
          matches={ligaIzquierda}
          matchComponent={Match}
          ssvgWrapper={({ children, ...props }: { children: ReactNode }) => (
            <SVGViewer width={400} height={500} {...props}>
              {children}
            </SVGViewer>
          )}
        />
      </div>

      <div>
        <SingleEliminationBracket
          matches={finalMatch}
          matchComponent={Match}
          svgWrapper={({ children, ...props }: { children: ReactNode }) => (
            <SVGViewer width={300} height={250} {...props}>
              {children}
            </SVGViewer>
          )}
        />
      </div>

      <div>
        <SingleEliminationBracket
          matches={ligaDerecha}
          matchComponent={Match}
          svgWrapper={({ children, ...props }: { children: ReactNode }) => (
            <SVGViewer width={400} height={500} {...props}>
              {children}
            </SVGViewer>
          )}
        />
      </div>
    </div>
  );
};

export default CustomBrackets;