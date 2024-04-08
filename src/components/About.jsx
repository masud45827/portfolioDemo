import React from "react";
import image from "../assets/image3.jpg";
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:mt-10 p-20 sm:flex-col md:flex-row">
      <img className="sm:mb-5 md:w-2/5 lg:h-[400px]" src={image} />
      <div className="text-sm sm:text-[15px] md:w-3/5 md:pl-5 lg:text-[20px]">
        <p className="text-justify">
          I am a recent graduate from Bangabandhu Sheikh Mujibur Rahman Science
          and Technology University, Gopalganj
        </p>
        <br />
        <p className="text-justify">
          I have strong technical skills in languages such as C/C++, Python,
          Java, JavaScript, HTML, and CSS. I'm familiar with frameworks like
          React, Bootstrap. My experience extends to working with databases like
          MySQL and Mongodb. I am comfortable using Linux (Ubuntu) as my
          operating system and am proficient with tools like Git, GitHub. These
          technical skills allow me to navigate various aspects of software
          development with ease and contribute effectively to any team or
          project.
        </p>
        <br />
        <p className="text-justify">
          I really enjoy solving problems, solved 3000+ Problems in Online
          Judges Codeforces, Codechef, Atcoder, LeetCode, CSES, Lightoj and
          Hackerearth and I am also Expert in Codeforces. In 2022, I worked with
          a team and got the 67th position at BUET IUPC-2022. In 2023, we
          achieved the 42th position at the SUST IUPC 2023. In 2023, we achieved
          the 97th position at the ICPC Dhaka regional programming contest.
        </p>
      </div>
    </div>
  );
};

export default About;
