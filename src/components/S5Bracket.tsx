import { useState } from 'react';
import BracketsView from './globals/BracketsView';
import type { MatchType } from './globals/BracketsView';
import '../SectionBrackets.css';

const ligas: Record<string, MatchType[]> =  {
    'LIGA A': [
        {
            id: 1,
            name: 'Semi A',
            nextMatchId: 3,
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
                { id: '1', name: 'DED', isWinner: false },
                { id: '3', name: 'LOLO', isWinner: false }
            ]
        }
    ],
    'LIGA B': [
        {
            id: 1,
            name: 'Semi A',
            nextMatchId: 3,
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
                { id: '1', name: 'DED', isWinner: false },
                { id: '3', name: 'LOLO', isWinner: false }
            ]
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
                { id: '1', name: 'DED', isWinner: true },
                { id: '2', name: 'MARI', isWinner: false }
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
                { id: '1', name: 'DED', isWinner: false },
                { id: '3', name: 'LOLO', isWinner: false }
            ]
        }
    ]
};

const SectionBrackets = () => {
    const [ligaActiva, setLigaActiva] = useState('LIGA A');

    return (
        <section className="brackets-section">
            <h2 style={{ textAlign: 'center', color: 'white' }}>BRACKETS</h2>

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

            <BracketsView matches={ligas[ligaActiva]} />
        </section>
    );
};

export default SectionBrackets;
