import { Link } from "react-router-dom";

import GoBack from "./GoBackNavigation";

const Works = () => {
    return (
            <div className="works-page container-fluid  h-100">
                <GoBack categoryName={"WORKS"}/>
                <div className="row h-100">
                    <div className="works__links-list col-6 h-100">
                        <p className="works__link">Instagram</p>
                        <p className="works__link">Facebook</p>
                        <p className="works__link">Youtube</p>
                        <p className="works__link">Twitter</p>
                        <p className="works__link">Snapchat</p>
                        <p className="works__link">Giovannino</p>
                        <p className="works__link">Netflix</p>
                    </div>
                    <div className="col-6 h-100"></div>
                </div>
            </div>
    )
}

export default Works;