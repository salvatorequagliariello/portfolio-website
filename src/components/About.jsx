import GoBack from "./GoBackNavigation";

const About = () => {
    return (
        <div className="about__container container-fluid animate__animated animate__fadeIn animate__faster h-100">
            <div className="row">
                <GoBack previousPath={"/"} categoryName={"ABOUT"}/>
            </div>
            <div className="container-fluid h-100">
                <div className="row align-items-center h-100">
                    <div className="about__title-container col-6 p-5 d-flex flex-column align-items-center">
                        <h1 className="about__title">Hi.</h1>
                        <h3 className="about__paragraph-header">I'm Salvatore Quagliariello.</h3>
                    </div>
                    <div className="about_paragraph-container col-6 p-5">
                        <p className="about__paragraph-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend tincidunt diam vitae cursus. Quisque facilisis vitae metus sit amet cursus. Vestibulum libero felis, placerat eu eros sed, elementum sodales felis. Nulla quis nisl a ex pellentesque aliquet sit amet id tortor.  Morbi congue ligula ut sapien consequat, vel malesuada neque imperdiet.</p>
                        <p className="about__paragraph-text">Aliquam felis lorem, varius quis arcu a, ultricies ullamcorper purus. Fusce dapibus leo vel bibendum efficitur. Suspendisse at purus a risus auctor vestibulum. Pellentesque porttitor tellus a neque blandit scelerisque at et magna.Donec nec magna lectus. Vivamus euismod augue sit amet enim aliquet pellentesque. Nullam in turpis a lorem mollis interdum.</p>
                        <p className="about__paragraph-text">Nam cursus lobortis libero fermentum commodo. Curabitur dignissim augue ligula, a sodales nibh tempus et. Vestibulum malesuada convallis eros a egestas. Duis cursus elit nisi, non iaculis lacus malesuada at. Curabitur eget nibh nulla. Aenean congue odio ac odio placerat tincidunt.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;