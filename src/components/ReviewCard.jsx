export default function ReviewCard({ recensione }) {
    return (
        <div className="mt-4 card">
            <div className="card-header">{recensione.name}</div>
            <div className="card-body">
                <h5 className="card-title"> {recensione.vote} / 5 </h5>
                <p className="card-text mt-3">{recensione.text}</p>
                <p className="text-end">{recensione.created_at}</p>
            </div>
        </div>
    )
}