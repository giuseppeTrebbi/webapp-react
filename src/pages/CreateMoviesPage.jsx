import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const initialMovie = {
    title: "",
    director: "",
    genre: "Science-fiction",
    release_year: 0,
    abstract: "",
    image: null
}
const genres = ["Science-fiction", "Thriller", "Romance", "Anime", "Action", "Comedy", "Drama", "Documentary"]



export default function CreateMoviesPage() {
    const [movieData, setMovieData] = useState(initialMovie)
    const navigate = useNavigate()

    function updateMovieData(event) {
        const key = event.target.name
        const type = event.target.type
        if (type === "file") {
            setMovieData({
                ...movieData,
                [key]: event.target.files[0]
            })
        } else {
            const value = event.target.value
            setMovieData({
                ...movieData,
                [key]: value
            })
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData()
        for(const key in movieData) {
            const value = movieData[key]
            formData.append(key, value)
        }
        axios.post("http://localhost:3050/api/movies", formData, {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        }).then(resp => {
            navigate("/movies")
        })
    }


    return (
        <section style={{ marginTop: "7rem" }} className="container">
            <h1 className="mb-5 text-center">Aggiungi un film:</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        id="form-titolo"
                        value={movieData.title}
                        onChange={updateMovieData}
                        name="title"
                        type="text"
                        className="form-control"
                    />
                    <label htmlFor="form-titolo">Titolo</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        id="form-regista"
                        value={movieData.director}
                        onChange={updateMovieData}
                        name="director"
                        type="text"
                        className="form-control"
                    />
                    <label htmlFor="form-regista">Regista</label>
                </div>
                <select
                    value={movieData.genre}
                    onChange={updateMovieData}
                    name="genre"
                    style={{ width: "15rem" }}
                    className="form-select text-center mb-3" >
                    {
                        genres.map((genere, index) => (
                            <option key={index} value={genere}>{genere}</option>
                        ))
                    }
                </select>
                <div className="form-floating mb-3">
                    <input
                        id="form-release-year"
                        value={movieData.release_year}
                        onChange={updateMovieData}
                        name="release_year"
                        type="number"
                        className="form-control"
                    />
                    <label htmlFor="form-release-year">Anno di rilascio</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        value={movieData.abstract}
                        onChange={updateMovieData}
                        id="form-abstract"
                        name="abstract"
                        type="text"
                        className="form-control"
                        style={{ height: "120px" }}
                    />
                    <label htmlFor="form-abstract">Trama</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        onChange={updateMovieData}
                        name="image"
                        type="file"
                        className="form-control"
                        style={{ width: "80%" }}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Inserisci</button>
            </form>
        </section>
    )
}