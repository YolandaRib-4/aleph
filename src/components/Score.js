import React from 'react';

const Score = ({onIncrement, onDecrement, votes}) => {        
   return (
        <>
        <h4>Votos: {votes} </h4>      
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>

        </>
    )
}

export default Score