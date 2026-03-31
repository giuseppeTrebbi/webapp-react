import BannerImg from "../assets/images/2178.jpg"


export default function Homepage() {
    const title = "Benvenuti nell'App dei film"
    const isColored = true


    return (
        <>
            <section>
                <img className="img-fluid" src={BannerImg} alt="" />
            </section>
            <section>
                <h1 className={isColored ? "text-success" : "text-dark"}>{title}</h1>
            </section>
        </>
    )
}