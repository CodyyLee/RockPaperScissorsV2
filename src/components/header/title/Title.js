import React from 'react'
import './title.scss';

export default function Title({text}) {
  return (
    <div className='titleContainer'>
        {text.map((str, i) => {
            return <p className='titleText' key={`${str}${i}-title`}>{str}</p>
        })}
    </div>
  )
}
