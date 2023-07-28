
const ProjectView = ({projectImage, projectName, projectTech, projectLink, projectDescription}) => {
    return (
        <div>
            <img className="project-view__image" src={projectImage}></img>
            <p className="project-view__title">{projectName}</p>
            <p className="project-view__tech">{projectTech}</p>
            <p className="project-view__link">{projectLink}</p>
            <p className="project-view__description">{projectDescription}</p>
        </div>
    );
};

export default ProjectView;