import { Link } from "react-router-dom";
import { useState } from "react";

import GoBack from "./GoBackNavigation";
import ProjectView from "./ProjectView";

import facebookImage from '../assets/regular-facebook-design-new.png';

const project = {
    title: "Facebook",
    image: facebookImage,
    tech: "React, CSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa rhoncus, tempor augue a, euismod mi. Maecenas mollis arcu vitae nunc fermentum, sed lobortis nisl rhoncus. Morbi tincidunt neque et augue luctus semper. Quisque sed luctus risus. Donec ut risus elit."
};

const Works = () => {
    const [projectView, setProjectView] = useState(false);
    const [category, setCategory] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        
        setCategory(e.target.value);
        setProjectView(!projectView);
    };

    return (
            <div className="works-page container-fluid  h-100">
                <GoBack categoryName={"WORKS"} categoryDescription={"//a showcase of my portfolio projects."}/>
                <div className="row h-100">
                    <div className="works__links-list col-6 h-100">
                        <button onClick={handleClick} value="Instagram" className="works__link">Instagram</button>
                        <button value="Facebook" className="works__link">Facebook</button>
                        <button value="Youtube" className="works__link">Youtube</button>
                        <button value="Twitter" className="works__link">Twitter</button>
                        <button value="Snapchat" className="works__link">Snapchat</button>
                        <button value="Netflix" className="works__link">Netflix</button>
                    </div>
                    <div className="works__project-view col-6 h-100">
                        {projectView &&
                            <ProjectView 
                            projectImage={project.image}
                            projectName={project.title}
                            projectTech={project.tech}
                            projectLink={project.link}
                            projectDescription={project.description} />
                        }
                    </div>
                </div>
            </div>
    )
}

export default Works;