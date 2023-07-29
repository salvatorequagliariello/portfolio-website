import ProjectView from "../ProjectView";
import GoBack from "../GoBackNavigation";

import facebookImage from '/src/assets/regular-facebook-design-new.png';

const project = {
    title: "Facebook",
    image: facebookImage,
    tech: "React, CSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa rhoncus, tempor augue a, euismod mi. Maecenas mollis arcu vitae nunc fermentum, sed lobortis nisl rhoncus. Morbi tincidunt neque et augue luctus semper. Quisque sed luctus risus. Donec ut risus elit."
};

const InstagramTest = () => {
    return (
        <div className="container-fluid">
            <GoBack />
            <ProjectView />
        </div>
    );
};

export default InstagramTest;