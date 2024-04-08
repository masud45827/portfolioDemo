import React from 'react';

const ProjectCard = ({ text, image }) => {
    return (
        <div className=" m-2 flex flex-col justify-center  items-center  border-2 border-solid border-blue-300 rounded-lg w-4/5 sm:w-4/5 md:w-2/4 lg:w-1/5 bg-gray-50">
            <img src={image} alt="Project" className="pb-5 w-full h-[300px] " />
            <p className="">{text}</p>
        </div>
    );
};

export default ProjectCard;
