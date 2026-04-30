import { NavLink } from "react-router-dom"

export default function Header() {
    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "film",
            path: "/movies"
        },
        {
            title: "Aggiungi un nuovo film",
            path: "/movies/create"
        }
    ]


    return (
        <>
            <header className="fixed-top">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {
                                    navLinks.map((link, index) => (
                                        <li className="nav-item" key={index}>
                                            <NavLink className="nav-link" aria-current="page" to={link.path} >
                                                {link.title}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}