import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import MovieCard from './MovieCard';
import Filter from './Filter'

const MoviesContainer = () => {
  const initialMovies = useSelector(state => state);
  const [movies, setMovies] = useState(initialMovies);


  const handleFilter = (searchTerm) => {
	 const filteredMovies = initialMovies.filter((movie)=> {
		 return movie.name.toLowerCase().includes(searchTerm.toLowerCase())
	  })
	  setMovies(filteredMovies)
	  
  }


	return (
		<>
		<Filter onChange={handleFilter}></Filter>
		{movies.map((movie, idx)=> <MovieCard key={idx} {...movie} idx={idx} />)}
		</>
		
 	)

}

export default MoviesContainer