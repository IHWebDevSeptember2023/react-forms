// src/components/MovieList.jsx

import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";


function MovieList() {
    const [movies, setMovies] = useState(moviesDataJSON);
    const [moviesData, setMoviesData] = useState(moviesDataJSON);

    const addNewMovie = (newMovie) => {
        // Create a new array
        const updatedMovies = [...movies, newMovie]; // ESTO NO ES UN PUSH, es una copia del array anterior MAS la nueva película
        const updatedMoviesData = [...moviesData, newMovie]

        setMovies(updatedMovies);

        setMoviesData(updatedMoviesData)
    };

    return (
        <div>
            <FilterMovies moviesData={moviesData} setMovies={setMovies} />
            <h2>Add movie</h2>
            <AddMovie addNewMovie={addNewMovie} />
            <h2>Movie List</h2>
            {movies.map(movie => {
                return <MovieCard key={movie._id} movie={movie} />;
            })}
        </div>
    );
}

export default MovieList;
