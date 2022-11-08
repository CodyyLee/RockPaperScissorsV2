import rules from '../../assets/image-rules.svg';
import './rules.scss';
import { useContext } from 'react';
import { AppContext } from '../../context';


export default function Rules() {

    const { store } = useContext(AppContext);

    return (
        <div className='rulesContainer' style={{display: store.rules ? 'flex' : 'none'}}>
            <h2 className='rulesTitle'>Rules</h2>
            <img className='rulesImage' src={rules} alt='rules' />
        </div>
    )
}