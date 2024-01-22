import { useState } from "react";

function AddMovie(props) {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [IMDBRating, setIMDBRating] = useState(5);
    const [hasOscars, setHasOscars] = useState(true);

    const handleTitleInput = e => setTitle(e.target.value);

    const handleDirectorInput = e => setDirector(e.target.value);

    const handleRatingInput = e => setIMDBRating(e.target.value);

    const handleOscarsInput = e => {
        console.log(e.target.checked);
        // Aqui es donde amazon llama al back para espiarnos
        setHasOscars(e.target.checked)
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // nos aseguramos así que la página no se recarga
        const newMovie = { title, director, IMDBRating, hasOscars };
        // Aquí podemos enviar la peli a la base de datos (BACK ) SPOILER
        console.log(newMovie);

        props.addNewMovie(newMovie) // OJO porque no añade el id. En MongoDB sí lo haría

        // Limpiemos el form 
        setTitle("");
        setDirector("");
        setIMDBRating(5);
        setHasOscars(true);
    }

    return (
        <div className="AddMovie">
            <h4>Add a Movie</h4>

            {/* form will be added here */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input value={title} onChange={handleTitleInput} name="title" type="text" />
                {/* también se puede hacer el onCHange con {(e)=>handleTitleInput(e)} */}
                <label htmlFor="director">Director:</label>
                <input value={director} onChange={handleDirectorInput} name="director" type="text" />
                {/*<label htmlFor="hasOscar">Has an oscar: </label>
                 <select name="hasOscar" id="">
                    <option value="true">YES</option>
                    <option value="false">NO</option>
                </select> */}
                <label htmlFor="hasOscars">Has oscars:</label>
                <input onChange={handleOscarsInput} type="checkbox" name="hasOscars"
                    checked={hasOscars} />
                <label htmlFor="rating">Rating: </label>
                <input onChange={handleRatingInput} value={IMDBRating} name="rating" type="number" />
                <div>
                    <button type="submit">Send movie</button>
                </div>
            </form>
        </div>
    )
}

export default AddMovie;