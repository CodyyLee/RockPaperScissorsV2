import React, {useContext} from 'react'
import './banner.scss';
import { AppContext } from '../../../context';

export default function Banner({outcome}) {

    const { store, setStore } = useContext(AppContext);

    return (
        <div className='bannerContainer'>
            {store.outcome === null ? <h1 className='gameResults'>Tie</h1> : <h1 className='gameResults'>{outcome ? 'You Win' : 'You Lose'}</h1>}
            <button onClick={() => {
                setStore({...store, selection: null, results: false, outcome: null});
            }} className='playAgain'>
                Play Again
            </button>
        </div>
    )
}
