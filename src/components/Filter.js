import React from 'react';

const Filter = ({onChange}) => {
    return (        
        <input placeholder='Buscar una película' onChange={(event)=>{onChange(event.target.value)}} ></input>   
    
    )}

export default Filter