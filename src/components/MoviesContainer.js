import React from 'react';
import {useSelector} from 'react-redux';
import MovieCard from './MovieCard';

const MoviesContainer = () => {
  const movies = useSelector(state => state);
	return (
		movies.map((movie, idx)=> <MovieCard key={idx} {...movie} idx={idx} />	
		)
     
 )

}

export default MoviesContainer