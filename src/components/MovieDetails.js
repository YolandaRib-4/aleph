import React from 'react';
import {useSelector} from 'react-redux';
import { useParams } from "react-router-dom";


const MovieDetails = () => {
    const {idx} = useParams();
    const movie = useSelector(state=> state[idx]);
    const {name, score, year, genero, length, synopsis, director, language, poster} = movie;
   
    return (
        <section>
            <h1>{name}</h1>
            <span>{year}</span>
            <p>{synopsis}</p>



        </section>
    )

}

export default MovieDetails