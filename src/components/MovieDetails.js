import React from 'react';
import {useSelector} from 'react-redux';
import { useParams, Link } from "react-router-dom";
import styles from '../styles/MovieDetails.module.css';


const MovieDetails = () => {
    const {idx} = useParams();
    const movie = useSelector(state=> state[idx]);
    const {name, score, year, genero, length, synopsis, director, language, poster} = movie;
   
    return (
        <section className={styles.movieInformation}>
            <div className={styles.posterContainer}>
                <img src={poster} className={styles.poster}></img>
            </div>
            <div className={styles.informationContainer}>
                <h1>{name}</h1>
                <div><span>{genero} - </span><span>{length}</span></div>
                <p><span>Votación: </span>{score}</p>
                <p>{synopsis}</p>
                <p><span>Director: </span>{director}</p>
                <p><span>Idioma original: </span>{language}</p>
                <Link to='/' >Volver</Link>
            </div>         



        </section>
    )

}

export default MovieDetails