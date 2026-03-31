import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"



export default function MoviesPage() {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3000/api/movies").then(resp => {
            console.log(resp);
            setMovies(resp.data)
        })
    }, [])


    return (
        <>
            <div className="container">
                <h1>Lista di film</h1>
                <div className="row row-cols-3 g-3">
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