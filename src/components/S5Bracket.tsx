import { useState } from 'react';
import BracketsView from './globals/BracketsView';
import type { MatchType } from './globals/BracketsView';
import '../SectionBrackets.css';

const ligas: Record<string, MatchType[]> = {
    'LIGA A': [
        // Ronda 1
        {
            id: 1,
            name: 'Match 1',
            nextMatchId: 5,
            tournamentRoundText: '1',
            state: 'DONE',
            startTime: '',
            participants: [
                { id: '1', name: 'DED', isWinner: true },
                { id: '2', name: 'MARI', isWinner: false }
            ]
        },
        {
            id: 2,
            name: 'Match 2',
            nextMatchId: 5,
            tournamentRoundText: '1',
            state: 'DONE',
            startTime: '',
            participants: [
                { id: '3', name: 'VANE', isWinner: false },
                { id: '4', name: 'LOLO', isWinner: true }
            ]
        },
        {
            id: 3,
            name: 'Match 3',
            nextMatchId: 6,
            tournamentRoundText: '1',
            state: 'DONE',
            startTime: '',
            participants: [
                { id: '5', name: 'ROXY', isWinner: false },
                { id: '6', name: 'DEIV', isWinner: true }
            ]
        },
        {
            id: 4,
            name: 'Match 4',
            nextMatchId: 6,
            tournamentRoundText: '1',
            state: 'DONE',
            startTime: '',
            participants: [
                { id: '7', name: 'LIZ', isWinner: false },
                { id: '8', name: 'NIKO', isWinner: true }
            ]
        },

        // Ronda 2 (Semifinales)
        {
            id: 5,
            name: 'Semifinal 1',
            nextMatchId: 7,
            tournamentRoundText: '2',
            state: 'DONE',
            startTime: '',
            participants: [
                { id: '1', name: 'DED', isWinner: true },
                { id: '4', name: 'LOLO', isWinner: false }
            ]
        },
        {
            id: 6,
            name: 'Semifinal 2',
            nextMatchId: 7,
            tournamentRoundText: '2',
            state: 'DONE',
            startTime: '',
            participants: [
                { id: '6', name: 'DEIV', isWinner: false },
                { id: '8', name: 'NIKO', isWinner: true }
            ]
        },

        // Ronda 3 (Final)
        {
            id: 7,
            name: 'Final',
            nextMatchId: null,
            tournamentRoundText: '3',
            state: 'WAITING',
            startTime: '',
            participants: [
                { id: '1', name: 'DED', isWinner: false },
                { id: '8', name: 'NIKO', isWinner: false }
            ]
        }
    ],
    'LIGA B': [
        {
            id: 1,
            name: 'Match 1',
            nextMatchId: 5,
            tournamentRoundText: 'Round 1',
            state: 'SCHEDULED',
            startTime: '',
            participants: [
                { id: '1', name: 'DED' },
                { id: '2', name: 'MAIKIKI' }
            ]
        },
        {
            id: 2,
            name: 'Match 2',
            nextMatchId: 5,
            tournamentRoundText: 'Round 1',
            state: 'SCHEDULED',
            startTime: '',
            participants: [
                { id: '3', name: 'DANO' },
                { id: '4', name: 'PARAMADA' }
            ]
        },
        {
            id: 3,
            name: 'Match 3',
            nextMatchId: 6,
            tournamentRoundText: 'Round 1',
            state: 'SCHEDULED',
            startTime: '',
            participants: [
                { id: '5', name: 'ROXY' },
                { id: '6', name: 'DEIV' }
            ]
        },
        {
            id: 4,
            name: 'Match 4',
            nextMatchId: 6,
            tournamentRoundText: 'Round 1',
            state: 'SCHEDULED',
            startTime: '',
            participants: [
                { id: '7', name: 'LIZ' },
                { id: '8', name: 'NIKO' }
            ]
        },

        // Semifinales (vacías)
        {
            id: 5,
            name: 'Semifinal 1',
            nextMatchId: 7,
            tournamentRoundText: 'Semi-final',
            state: 'WAITING',
            startTime: '',
            participants: [] // Aún no se sabe quién avanza
        },
        {
            id: 6,
            name: 'Semifinal 2',
            nextMatchId: 7,
            tournamentRoundText: 'Semi-final',
            state: 'WAITING',
            startTime: '',
            participants: []
        },

        // Final (vacía)
        {
            id: 7,
            name: 'Final',
            nextMatchId: null,
            tournamentRoundText: 'Final',
            state: 'WAITING',
            startTime: '',
            participants: []
        }
    ],
    'LIGA C': [
        {
            id: 1,
            name: 'Semi A',
            nextMatchId: 3,
            tournamentRoundText: '1',
            state: 'DONE',
            startTime: '',
            participants: [
                { id: '1', name: 'MARI', isWinner: false },
                { id: '2', name: 'DANO', isWinner: true }
            ]
        },
        {
            id: 2,
            name: 'Semi B',
            nextMatchId: 3,
            tournamentRoundText: '1',
            state: 'DONE',
            startTime: '',
            participants: [
                { id: '3', name: 'LOLO', isWinner: true },
                { id: '4', name: 'VANE', isWinner: false }
            ]
        },
        {
            id: 3,
            name: 'Final',
            nextMatchId: null,
            tournamentRoundText: '2',
            startTime: '',
            state: 'WAITING',
            participants: [
                { id: '2', name: 'DANO', isWinner: false },
                { id: '3', name: 'LOLO', isWinner: false }
            ]
        }
    ]
};

const SectionBrackets = () => {
    const [ligaActiva, setLigaActiva] = useState('LIGA A');

    return (
        <section className="brackets-section" id="bracket">
            <h2 className='text-brackets'>BRACKETS</h2>
            <div className='lineContainerBracket'>
                <div className="tabs">
                    {Object.keys(ligas).map((liga) => (
                        <button
                            key={liga}
                            className={`tab ${ligaActiva === liga ? 'active' : ''}`}
                            onClick={() => setLigaActiva(liga)}
                        >
                            {liga}
                        </button>
                    ))}
                </div>
                <img src="./imgs/Bracket/Line 2.png" alt="" />
            </div>
            {/* <BracketsView2 /> */}
            <BracketsView matches={ligas[ligaActiva]} />
        </section>
    );
};

export default SectionBrackets;
