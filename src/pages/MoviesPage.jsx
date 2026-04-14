import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"



export default function MoviesPage() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")


    useEffect(() => {
        axios.get("http://localhost:3000/api/movies").then(resp => {
            setMovies(resp.data)
        })
    }, [])
    
    function handleSearch(event) {
        event.preventDefault()
        axios.get("http://localhost:3000/api/movies", { params: { search } }).then(resp => {
            setMovies(resp.data)
        })
    }


    return (
        <>
            <form className="container d-flex justify-content-end mt-5" onSubmit={handleSearch}>
                <input value={search} onChange={(event) => setSearch(event.target.value)} className="form-control w-25 mx-2" type="search" placeholder="Nome del film"></input>
                <button type="submit" className="btn btn-primary">Cerca</button>
            </form>
            <div className="container mt-3">
                <h1 className="mb-5">Lista di film</h1>
                <div className="row row-cols-3 g-5">
                    {
                        movies.map(movie => (
                            <div key={movie.id} className="column">
                                <MovieCard movie={movie} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}