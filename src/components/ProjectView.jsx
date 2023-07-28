
const ProjectView = ({projectImage, projectName, projectTech, projectLink, projectDescription}) => {
    return (
        <article className="project-view__container container-fluid h-100 w-75">
            <img className="project-view__image img-fluid " src={projectImage}></img>
            <div className="d-flex align-items-end justify-content-between">
                <p className="project-view__title">{projectName}</p>
                <p className="project-view__tech">//{projectTech}</p>
            </div>
            {/* <p className="project-view__link">{projectLink}</p> */}
            <p className="project-view__description">{projectDescription}</p>
        </article>
    );
};

export default ProjectView;