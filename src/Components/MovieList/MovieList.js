import React from 'react';
import MovieCard from '../MovieCard/MovieCard';


const MovieList = ({movieList, search}) => {
    return (
        <div class="collectionCard">
            {movieList.filter(movie=> {
                if(search === '') return movie; 
                if(movie.name.toLowerCase().includes(search.toLowerCase()) || movie.rating.includes(search)) return movie;
            }).map(singleMovie=> (
                <MovieCard movieTitle={singleMovie.name} 
                description={singleMovie.description} 
                rating={singleMovie.rating}
                posterUrl= {singleMovie.posterUrl}
                prePosterUrl={singleMovie.prePosterUrl}
                />
               
            )
            )}
            
        </div>
    )
}

export default MovieList
