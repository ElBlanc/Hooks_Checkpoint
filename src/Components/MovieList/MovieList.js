import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom'

const MovieList = ({movieList, search, rate}) => {
    
    return (
        <div class="collectionCard">{movieList
        .filter(movie => movie.rating >= rate  && movie.name.toUpperCase().includes(search.toUpperCase() ) 
        )
        .map(singleMovie=> (
            <Link to={{
                pathname: `/movie/${singleMovie.id}`,
                state: singleMovie
            }    
            }> 
                <MovieCard movieTitle={singleMovie.name} 
                description={singleMovie.description} 
                rating={singleMovie.rating}
                posterUrl= {singleMovie.posterUrl}
                prePosterUrl={singleMovie.prePosterUrl}
                />   
                </Link>         )
            )}
        </div>
    )
}

export default MovieList
