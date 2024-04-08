import React from 'react';
import ProjectCard from '../card/ProjectCard';
import mobile from "../assets/mobile.jpg";
import web from "../assets/web.png";
import ml from "../assets/ml project.png";
import javaswing from "../assets/java swing.webp";
import restaurent from "../assets/restaurent.jpg";
import student from "../assets/student.png";

const Project = () => {
    const texts = ["Mobile Application", "Web Application", "Machine Learning", "Java Swing", "Restaurant Management", "Student Management"];
    const images = [mobile, web, ml, javaswing, restaurent, student];

    return (
        <div className="pt-10 flex flex-col justify-center items-center bg-zinc-600 sm:flex-col md:flex-col  lg:flex-row lg: gap-4  flex-wrap">
            {texts.map((text, index) => (
                <ProjectCard key={index} text={text} image={images[index]} />
            ))}
        </div>
    );
};

export default Project;
