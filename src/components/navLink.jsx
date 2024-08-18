import React from 'react';
import { FaLinkedin, FaMailBulk, FaYoutube } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";

export default NavLink;

function NavLink(){
    const linkedln = {content: "https://www.linkedin.com/in/raphael-demets-6622b22b1/"}
    const mail = {content: "mailto:raphaeldemets2@gmail.com"}
    const youtube = {content: "https://www.youtube.com/@Tildsop/videos"}

    return (
        <div className="fixed z-10 lg:bottom-0 lg:left-0 lg:right-full lg:mx-8 ml-auto right-5 bottom-5 w-fit">
            <a href={linkedln.content} target="_blank" rel="noreferrer" className="block">
                <FaLinkedin className="transition delay-75 w-7 h-7 text-red-500 hover:text-red-300" />
            </a>

            <a href={mail.content} target="_blank" rel="noreferrer" className="block lg:mt-4 my-3">
                <IoMail className="transition delay-75 w-7 h-7 text-red-500 hover:text-red-300" />
            </a>

            <a href={youtube.content} target="_blank" rel="noreferrer" className="block lg:mt-4 my-3">
                <FaYoutube className="transition delay-75 w-7 h-7 text-red-500 hover:text-red-300" />
            </a>

            <div className="lg:h-20 lg:w-0.5 bg-red-500 lg:mt-4 lg:m-auto"></div>
        </div>
    )
}
