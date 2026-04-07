import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"



export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null)
    const params = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${params.movieId}`).then(resp => {
            setMovie(resp.data)
        })
    }, [params.movieId])



    return (
        <>
            {movie &&
                <div>
                    <img style={{ height: "60vh", width: "100%", objectFit: "cover" }}
                        src={movie.image}
                        alt="" />
                    <section className="container">
                        <h1 style={ {marginTop: "3rem"} } className="text-center">{movie.title}</h1>
                        <h4 className="mt-2 text-center">{movie.director}</h4>
                        <h3 style={ {marginTop: "5rem"} } className="text-center">
                            {movie.avg_vote ? `${movie.avg_vote.toFixed(2)}/5` : "Ancora nessuna recensione"}
                        </h3>
                        <p className="mt-3 text-center">{movie.abstract}</p>

                        
                        <section style={ { marginTop: "6rem" } } className="container">
                            <h3 className="text-center">Le vostre recensioni:</h3>
                            <div className="row justify-content-center">
                                {
                                    movie.reviews.length !== 0 ?
                                        movie.reviews.map(recensione => (
                                            <div key={recensione.id} className="col-8">
                                                <ReviewCard key={recensione.id} recensione={recensione} />
                                            </div>
                                        ))
                                        : "Non è presente alcuna recensione"
                                }
                            </div>
                        </section>
                    </section>
                </div>
            }
        </>
    )
}