import React from 'react';

const ProjectCard = ({ text, image }) => {
    return (
        <div className=" m-2 flex flex-col justify-center  items-center p-2 border-2 border-solid border-blue-300 rounded-lg w-3/5 sm:w-3/5 md:w-2/5 lg:w-3/12 xl:w-1/5 bg-gray-50">
            <img src={image} alt="Project" className="pb-5 w-full h-[300px] " />
            <p className="">{text}</p>
        </div>
    );
};

export default ProjectCard;
