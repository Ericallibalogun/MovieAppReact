import React from 'react';
import MoviesList from '../../reusables/MovieCard.jsx';
import {useGetPopularMoviesQuery} from "../../api/movieApi.jsx";
import MovieCard from "../../reusables/MovieCard.jsx";
const Popular = () => {
    const data = useGetPopularMoviesQuery();
    return (
        <div>
          <MovieCard data={data}/>
        </div>
    );
};

export default Popular;