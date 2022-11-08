import React, { useRef, useEffect, useState, useContext } from 'react'
import './selection.scss';
import { AppContext } from '../../../context';

//icon imports
import rock from '../../../assets/icon-rock.svg';
import paper from '../../../assets/icon-paper.svg';
import scissors from '../../../assets/icon-scissors.svg';

export default function Selection({ type, computer = false }) {

    const containerRef = useRef();
    const [width, setWidth] = useState(null);
    const { store, setStore } = useContext(AppContext);

    useEffect(() => {
        setWidth(containerRef.current.offsetWidth);
    }, [containerRef.current])
    
    const selectionType = {
        rock: {
            icon: rock,
            colors: ['hsl(349, 71%, 52%)', 'hsl(349, 70%, 56%)', 'hsl(349, 71%, 42%)']
        } ,
        paper: {
            icon: paper,
            colors: ['hsl(230, 89%, 62%)', 'hsl(230, 89%, 65%)', 'hsl(230, 89%, 57%)']
        } ,
        scissors: {
            icon: scissors,
            colors: ['hsl(39, 89%, 49%)', 'hsl(40, 84%, 53%)', 'hsl(39, 89%, 41%)']
        }
    }

    const selectOption = () => {
        setStore({...store, selection: type, results: true})
    }

    return (
        <>
        {computer ? 
        <button onClick={selectOption} ref={containerRef} className='selectionContainer' style={{height: width, background: `linear-gradient(to bottom, ${selectionType[type].colors[0]}, ${selectionType[type].colors[1]})`, boxShadow: `0px 6px 0px ${selectionType[type].colors[2]}`, width: store.results ? '65%' : '38%'}}>
            <div className='iconContainer'>
                <img src={selectionType[`${type}`].icon} alt={type} />
            </div>
        </button> 
        : 
        <button onClick={selectOption} ref={containerRef} className='selectionContainer' style={{height: width, background: `linear-gradient(to bottom, ${selectionType[type].colors[0]}, ${selectionType[type].colors[1]})`, boxShadow: `0px 6px 0px ${selectionType[type].colors[2]}`, width: store.results ? '65%' : '38%'}}>
            <div className='iconContainer'>
                <img src={selectionType[`${type}`].icon} alt={type} />
            </div>
        </button>}
        </>
    )
}
