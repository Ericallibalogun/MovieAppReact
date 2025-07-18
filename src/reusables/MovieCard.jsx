import React from 'react';
import {useGetPopularMoviesQuery} from '../api/movieApi.jsx'

const MovieCard = ({data}) => {
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    return (
        <div>
            {
                data?.data?.results.map((result)=>(
                    <div key={result.id}>
                        <img src={`${imageUrl}${result.poster_path}`} alt=""/>
                        <p>{result.title}</p>
                        <p>{result.overview}</p>
                        <p>{result.vote_average}</p>
                    </div>
                ))
            }

        </div>
    );
};

export default MovieCard;
