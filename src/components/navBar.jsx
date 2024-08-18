import React, { useState, useEffect } from 'react';
import { FaHome, FaLaptop, FaBriefcase } from 'react-icons/fa';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: "#Home", content: "Accueil", icon: <FaHome /> },
        { id: "#Competence", content: "Compétences", icon: <FaLaptop /> },
        { id: "#Work", content: "Réalisations", icon: <FaBriefcase /> },
    ];

    return (
        <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-4'}`}>
            <div className="px-6 lg:px-32 flex justify-between items-center">
                <span className='text-xl lg:text-2xl text-red-500 font-bold'>Raphaël Demets</span>
                <div className='flex items-center space-x-6'>
                    {navItems.map((item) => (
                        <a key={item.id} 
                           href={item.id}
                           className="flex items-center text-zinc-600 hover:text-red-500 transition duration-300">
                            {item.icon}
                            <span className="ml-2 hidden md:inline">{item.content}</span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}