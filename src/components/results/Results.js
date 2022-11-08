import './results.scss';
import { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '../../context';
import Selection from '../options/selection/Selection';

export default function Results() {

    const { store, setStore } = useContext(AppContext);
    const [ status, setStatus ] = useState(false);
    const [ computer, setComputer ] = useState();
    const [ outcome, setOutcome ] = useState(null);
    const [width, setWidth] = useState(null);

    const containerRef = useRef();

    const computerChoice = () => {
        let random = Math.floor(Math.random() * 2);
        let options = ['paper', 'rock', 'scissors'];
        let player = options.indexOf(store.selection);

        setComputer(options.filter(option => {
            return option !== store.selection;
        })[random]);
        
        if(player - random === 1) {
            if(random === 0) {
                setOutcome(false);
            } else {
                setOutcome(true);
            }
        } else if(player - random === 2) {
            if(random === 2) {
                setOutcome(false);
            } else {
                setOutcome(true);
            }
        } else {
            setOutcome(true);
        }

        if(outcome === false && store.score > 0) {
            setStore({...store, score: store.score - 1, outcome: outcome})
        } else if(outcome === true) {
            setStore({...store, score: store.score + 1, outcome: outcome})
        }
        
        setStatus(true);
    }

    useEffect(() => {
        if(containerRef.current) {
            setWidth(containerRef.current.offsetWidth);
        }

        return () => {
            computerChoice();
        }
    }, [containerRef.current])

    

    return (
        <div className='resultsContainer'>
            <div className='choice'>
                <Selection type={store.selection} />
                <p className='choiceText'>You Picked</p>
            </div>

            <div className='choice'>
                {status ? <Selection type={computer} /> : <div ref={containerRef} id='computer' style={{height: width ? containerRef.current.offsetWidth : ''}} />}
                <p className='choiceText'>The House Picked</p>
            </div>
        </div>
    )
}