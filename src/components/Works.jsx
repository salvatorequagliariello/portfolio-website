import { Link } from "react-router-dom";

import GoBack from "./GoBackNavigation";
import ProjectView from "./ProjectView";

import facebookImage from '../assets/regular-facebook-design-new.png';

const project = {
    title: "facebook",
    image: facebookImage,
    tech: "React, CSS",
    link: "facebook.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa rhoncus, tempor augue a, euismod mi. Maecenas mollis arcu vitae nunc fermentum, sed lobortis nisl rhoncus. Morbi tincidunt neque et augue luctus semper. Quisque sed luctus risus. Donec ut risus elit."
};

const Works = () => {
    return (
            <div className="works-page container-fluid  h-100">
                <GoBack categoryName={"WORKS"} categoryDescription={"//a showcase of my portfolio projects."}/>
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
                    <div className="col-6 h-100">
                        <ProjectView 
                        projectImage={project.image}
                        projectName={project.title}
                        projectTech={project.tech}
                        projectLink={project.link}
                        projectDescription={project.description} />
                    </div>
                </div>
            </div>
    )
}

export default Works;