import React, { useContext } from 'react'
import './button.scss';
import { AppContext } from '../../context';
import close from '../../assets/icon-close.svg';

export default function Button() {

    const { store, setStore } = useContext(AppContext);

  return (
    <div className='btnContainer' >
        <button onClick={() => {
            setStore({...store, rules: !store.rules})
        }} className='btn'>{store.rules ? <img className='close' src={close} alt='close rules' /> : 'Rules'}</button>
    </div>
  )
}
