import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import MovieCard from './MovieCard';
import Filter from './Filter'
import styles from '../styles/MoviesContainer.module.css';

const MoviesContainer = () => {
  const initialMovies = useSelector(state => state);
  const [movies, setMovies] = useState(initialMovies);
  useEffect( ()=> {
	  setMovies(initialMovies);
  }, [initialMovies]);


  const handleFilter = (searchTerm) => {
	 const filteredMovies = initialMovies.filter((movie)=> {
		 return movie.name.toLowerCase().includes(searchTerm.toLowerCase())
	  })
	  setMovies(filteredMovies)
	  
  }


	return (
		<>
		<header className={styles.header}>
			<h1>Bienvenidos</h1>
			<p>Explora ahora las películas que tenemos para ti</p>
			<Filter onChange={handleFilter} />
		</header>
		<section>
			<h1>Lo más popular</h1>
			<section className={styles.moviesGridContainer}>
				{movies.map((movie, idx)=> <MovieCard key={idx} {...movie} idx={idx} />)}
			</section>
		</section>
		</>
		
 	)

}

export default MoviesContainer