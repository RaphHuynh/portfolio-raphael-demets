import React from 'react';
import { FaLinkedin, FaYoutube, FaMapMarkerAlt, FaCar, FaLaptop } from 'react-icons/fa';

export default function Home() {
    return (
        <section className='flex flex-col min-h-screen w-full px-10 lg:px-32 py-20 justify-center' id='Home'>
            <article className='w-full mx-auto'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl pb-6 text-red-500 font-bold'>
                    Bonjour 👋, je suis Raphaël
                </h1>
                <h2 className='text-2xl text-red-400 italic pb-5'>A la recherche d'une alternance dans le domaine de la vfx</h2>
                <div className='flex flex-wrap text-md lg:text-lg pb-8 gap-4 text-slate-600'>
                    <span className='flex items-center'>
                        <FaMapMarkerAlt className='mr-2 text-red-500' /> France, Montpellier
                    </span>
                    <span className='flex items-center'>
                        <FaCar className='mr-2 text-red-500' /> Ouvert à la mobilité
                    </span>
                    <span className='flex items-center'>
                        <FaLaptop className='mr-2 text-red-500' /> Télétravail possible
                    </span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8'>
                    {[
                        { title: 'Étudiant', desc: 'Bac pro communication visuelle plurimédia' },
                        { title: 'Monteur Vidéo', desc: 'Monteur Vidéo en Freelance' },
                        { title: 'Youtubeur', desc: 'Créateur de contenu passionné' }
                    ].map((item, index) => (
                        <div key={index} className='p-6 rounded-lg flex flex-col items-center text-center h-full border border-red-500 bg-red-100 shadow-md transition-all hover:shadow-lg hover:scale-105'>
                            <h3 className='text-xl font-bold text-red-500 mb-2'>{item.title}</h3>
                            <p className='text-slate-700'>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <p className='text-lg pb-6 text-slate-700 '>
                    Actuellement en formation au lycée Jean-François Champollion à Montpellier, je me spécialise dans le montage vidéo, le graphisme et la 3D. Mon objectif est de travailler dans le domaine des effets visuels (VFX). Passionné par la création numérique, je développe constamment mes compétences en vue de poursuivre des études supérieures dans ce secteur innovant.
                </p>
                <p className='text-lg pb-8 text-slate-700 '>
                    Je propose également mes services en freelance, notamment pour le montage de vidéos YouTube et d'autres projets créatifs.
                </p>
                <div className='flex gap-4'>
                    <a href='https://www.linkedin.com/in/raphael-demets-6622b22b1/' className='flex items-center border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition duration-300'>
                        <FaLinkedin className='mr-2' /> LinkedIn
                    </a>
                    <a href='https://www.youtube.com/@Tildsop/videos' className='flex items-center border border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition duration-300'>
                        <FaYoutube className='mr-2' /> YouTube
                    </a>
                </div>
            </article>
        </section>
    );
}