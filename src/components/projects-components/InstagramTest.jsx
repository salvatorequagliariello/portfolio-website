import ProjectView from "../ProjectView";
import GoBack from "../GoBackNavigation";

import facebookImage from '/src/assets/regular-facebook-design-new.png';

const project = {
    title: "Facebook",
    link: "facebook.com",
    image: facebookImage,
    tech: "React, CSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend tincidunt diam vitae cursus. Quisque facilisis vitae metus sit amet cursus. Vestibulum libero felis, placerat eu eros sed, elementum sodales felis. Nulla quis nisl a ex pellentesque aliquet sit amet id tortor. Aliquam felis lorem, varius quis arcu a, ultricies ullamcorper purus. Fusce dapibus leo vel bibendum efficitur. Suspendisse at purus a risus auctor vestibulum. Pellentesque porttitor tellus a neque blandit scelerisque at et magna.Donec nec magna lectus. Vivamus euismod augue sit amet enim aliquet pellentesque. Nullam in turpis a lorem mollis interdum. Morbi congue ligula ut sapien consequat, vel malesuada neque imperdiet. Nam cursus lobortis libero fermentum commodo. Curabitur dignissim augue ligula, a sodales nibh tempus et. Vestibulum malesuada convallis eros a egestas. Duis cursus elit nisi, non iaculis lacus malesuada at. Curabitur eget nibh nulla. Aenean congue odio ac odio placerat tincidunt."
};

const InstagramTest = () => {
    return (
        <div className="container-fluid h-100 animate__animated animate__fadeIn animate__faster">
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