import ProjectView from "../ProjectView";
import GoBack from "../GoBackNavigation";

import facebookImage from '/src/assets/regular-facebook-design-new.png';

const project = {
    title: "Facebook",
    link: "facebook.com",
    image: facebookImage,
    tech: "React, CSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa rhoncus, tempor augue a, euismod mi. Maecenas mollis arcu vitae nunc fermentum, sed lobortis nisl rhoncus. Morbi tincidunt neque et augue luctus semper. Quisque sed luctus risus. Donec ut risus elit."
};

const InstagramTest = () => {
    return (
        <div className="container-fluid h-100">
            <div className="row">
                <GoBack categoryName={project.title}/>
            </div>
            <div className="row">
                <ProjectView 
                projectImage={project.image} 
                projectLink={project.link}
                projectName={project.title} 
                projectTech={project.tech}
                projectDescription={project.description}
                />
            </div>
        </div>
    );
};

export default InstagramTest;