import React from 'react'
import './options.scss';

//component imports
import Selection from './selection/Selection';

//image imports
import triangle from '../../assets/bg-triangle.svg';

export default function Options() {
  return (
    <div className='optionsContainer'>
        <img src={triangle} alt='triangle background' className='triangle' />
        <Selection type='paper' />
        <Selection type='scissors' />
        <Selection type='rock' />
    </div>
  )
}
