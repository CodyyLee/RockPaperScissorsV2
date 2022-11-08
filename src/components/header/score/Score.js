import React, { useContext } from 'react'
import './score.scss';
import { AppContext } from '../../../context';

export default function Score() {

    const {store } = useContext(AppContext);

  return (
    <div className='scoreContainer'>
        <p className='scoreTitle'>score</p>
        <h2 className='score'>{store.score}</h2>
    </div>
  )
}
