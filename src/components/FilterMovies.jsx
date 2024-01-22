import { useState } from "react";

function FilterMovies(props) {
    const [firstLetter, setFirstLetter] = useState("All");

    const handleSelect = e => {
        setFirstLetter(e.target.value);

        if(e.target.value === "All"){
            return props.setMovies(props.moviesData)
        }

        const filteredArray = props.moviesData.filter((movie) => {

            console.log("PRIMERA LETRA DE ", movie.title);
            console.log(movie.title[0]);
            return e.target.value.toLowerCase() === movie.title[0].toLowerCase()
        })


        console.log(filteredArray);
        props.setMovies(filteredArray)
        console.log("selected", e.target.value);
    };

    return (
        <div className="FilterMovies">
            <label>Show movies by first letter:</label>
            <select value={firstLetter} onChange={handleSelect}>
                <option value="All">All</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        </div>
    );
}

export default FilterMovies;