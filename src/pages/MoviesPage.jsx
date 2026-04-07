import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"



export default function MoviesPage() {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:3000/api/movies").then(resp => {
            setMovies(resp.data)
        })
    }, [])



    return (
        <>
            <div className="container mt-5">
                <h1 className="mb-5">Lista di film</h1>
                <div className="row row-cols-3 g-5">
                    {
                        movies.map(movie => (
                            <div key={movie.id} className="column">
                                <MovieCard movie={movie}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}