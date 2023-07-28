import { Link } from "react-router-dom";

const GoBack = ({ categoryName, categoryDescription }) => {
    return (
        <div className="go-back__container">
            <button className="go-back__button"><Link className="go-back__button-link" to={"/"}>{"<"}</Link></button>
            <p className="go-back__category">{categoryName}<span className="go-back__category-description">{categoryDescription}</span> </p>
        </div>
    )
}

export default GoBack;