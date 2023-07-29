import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

import GoBack from "./GoBackNavigation";
import InstagramTest from "./projects-components/InstagramTest";

const Works = () => {
    const [projectView, setProjectView] = useState(false);
    const [category, setCategory] = useState("");

    return (
            <div className="works-page container-fluid h-100">
                <div className="row h-100">
                    <div className="col-6 h-100">
                        <GoBack categoryName={"WORKS"} categoryDescription={"//a showcase of my portfolio projects."}/>
                    </div>
                    <div className="works__links-list col-6 h-100">
                        <Link to={"/works/instagram"} className="works__link">Instagram</Link>
                        <button to className="works__link">Facebook</button>
                        <button value="Youtube" className="works__link">Youtube</button>
                        <button value="Twitter" className="works__link">Twitter</button>
                        <button value="Snapchat" className="works__link">Snapchat</button>
                        <button value="Netflix" className="works__link">Netflix</button>
                    </div>
                </div>
            </div>
    )
}

export default Works;