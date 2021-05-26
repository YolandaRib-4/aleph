import React from 'react';
import styles from './MovieCard.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/actions';
import Score from './Score';
import { Link } from "react-router-dom";


const MovieCard = (props) => {
    const {score, poster, idx} = props
    const dispatch = useDispatch();

    const handleScoreIncrement = () => {
        dispatch(increment(idx)) 
    }

    const handleScoreDecrement = () => {
        dispatch(decrement(idx)) 
    }

    return (    <div className={styles.movieCard}>
                <Link to={`movie/${idx}`}><img src={poster} className={styles.poster} /></Link>
                <Score onIncrement={handleScoreIncrement} onDecrement={handleScoreDecrement} votes={score}></Score>
                </div>          
    )
}

export default MovieCard