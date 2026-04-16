import axios from "axios"
import { useState } from "react"



const initialReview = {
    name: "",
    vote: 1,
    text: ""
}


export default function ReviewForm({ movieId, updateMovie }) {
    const [reviewData, setReviewData] = useState(initialReview)

    function updateReviewData(event) {
        const value = event.target.value
        const key = event.target.name
        setReviewData({
            ...reviewData,
            [key]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post(`http://localhost:3000/api/movies/${movieId}/reviews`, reviewData).then(resp => {
            updateMovie()
            setReviewData(initialReview)
        })
    }



    return (
        <section style={{ marginTop: "7rem" }} className="container">
            <h3 className="mb-3 text-center">Aggiungi una recensione:</h3>

            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        value={reviewData.name}
                        onChange={updateReviewData}
                        name="name"
                        type="text"
                        className="form-control"
                        id="floatingInput"
                    />
                    <label htmlFor="floatingInput">Nome</label>
                </div>
                <select
                    value={reviewData.vote}
                    onChange={updateReviewData}
                    name="vote"
                    style={{ width: "10rem" }}
                    className="form-select mb-3" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div className="form-floating mb-3">
                    <textarea
                        value={reviewData.text}
                        onChange={updateReviewData}
                        name="text"
                        type="text"
                        className="form-control"
                        id="floatingTextarea2"
                        style={{ height: "100px" }}
                    />
                    <label htmlFor="floatingTextarea2">Commenti</label>
                </div>
                <button type="submit" className="btn btn-primary">Conferma</button>
            </form>
        </section>
    )
}