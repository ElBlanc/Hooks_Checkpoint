import React from 'react';
import MovieCard from '../MovieCard/MovieCard';


const MovieList = ({movieList, search, rate}) => {
    
console.log('yohohohhoo',rate);
    return (
        <div class="collectionCard">{movieList
        .filter(movie => movie.rating >= rate  && movie.name.toUpperCase().includes(search.toUpperCase() ) 
        )
        .map(singleMovie=> (
                <MovieCard movieTitle={singleMovie.name} 
                description={singleMovie.description} 
                rating={singleMovie.rating}
                posterUrl= {singleMovie.posterUrl}
                prePosterUrl={singleMovie.prePosterUrl}
                />            )
            )}
        </div>
    )
}

export default MovieList
