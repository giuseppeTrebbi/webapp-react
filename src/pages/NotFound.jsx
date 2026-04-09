import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container my-5">
            <h1 className="text-center">404! Pagina non trovata</h1>
            <Link className="btn btn-primary mt-3" to="/">Torna alla Homepage</Link>
        </div>
    )
}