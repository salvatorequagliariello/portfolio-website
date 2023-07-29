
const ProjectView = ({projectImage, projectName, projectTech, projectLink, projectDescription}) => {
    return (
        <article className="project-view__container container-fluid h-100 w-100 align-items-center">
            <div className="row h-100 align-items-center">
                <div className="col-6 p-5 d-flex flex-column justify-content-center">
                    <p className="project-view__title mb-3">{projectName}</p>
                    <p className="project-view__tech mb-3">//{projectTech}</p>
                    <p className="project-view__description mb-3">{projectDescription}</p>
                </div>
                <div className="col-6 p-5">    
                    <img className="project-view__image img-fluid h-100" src={projectImage}></img>
                </div>
            </div>
        </article>
    );
};

export default ProjectView;