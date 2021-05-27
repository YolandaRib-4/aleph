import React from 'react';
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import styles from '../styles/Score.module.css'



const Score = ({onIncrement, onDecrement, votes}) => {        
   return (
        <section className={styles.scoreContainer}>
            <div className={styles.score}>{votes} </div>
            <div> 
                <button onClick={onIncrement} className={styles.likeBtn}><BiLike/></button>
                <button onClick={onDecrement} className={styles.likeBtn}><BiDislike/></button>
            </div>    
        </section>
    )
}

export default Score