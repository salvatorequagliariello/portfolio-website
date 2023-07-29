import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home container-fluid animate__animated animate__fadeIn animate__faster">
            <div className="row h-50">
                <div className="text-container col-12 h-100">
                    <p className="name-font">Salvatore Quagliariello</p>
                    <p className="p-font">Front-end Developer</p>
                </div>
            </div>
            <div className="row h-50">
                <section className="links-container col-12 h-100">
                    <Link className="link-text col-12" to={"/works"}>WORKS</Link>
                    <Link className="link-text col-12" to={"/about"}>ABOUT</Link>
                    <Link className="link-text col-12" to={"/contact"}>CONTACT</Link>
                </section>
            </div>
        </div>
    )
}

export default Home;