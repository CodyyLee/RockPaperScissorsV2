import React from 'react';
import './header.scss';

//component imports
import Title from './title/Title';
import Score from './score/Score';

export default function header() {
  return (
    <div className='header'>
        <Title text={['rock', 'paper', 'scissors']} />
        <Score score='12' />
    </div>
  )
}
