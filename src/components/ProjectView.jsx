
const ProjectView = ({projectImage, projectName, projectTech, projectLink, projectDescription}) => {
    return (
        <article className="container-fluid h-100 w-100 align-items-center">
            <div className="row h-100 align-items-center">
                <div className="col-6">
                    <div className="d-flex align-items-end justify-content-between">
                        <p className="project-view__title">{projectName}</p>
                        <p className="project-view__tech">//{projectTech}</p>
                    </div>
                    <p className="project-view__description">{projectDescription}</p>
                </div>
                <div className="col-6">    
                    <img className="project-view__image img-fluid h-100" src={projectImage}></img>
                </div>
            </div>
        </article>
    );
};

export default ProjectView;