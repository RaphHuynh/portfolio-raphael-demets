import React from 'react';
import { FaMapMarkerAlt, FaCar, FaLaptop } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";

// Les réalisations issues du composant Work
const firstProjects = [
    {
        title: "Mathart - Montage Vidéo - Freelance",
        videoId: "I_KgiCZGlr8",
        videoTitle: "C'est quoi une fractale ?"
    },
    {
        title: "IM SAMA - Montage Vidéo / Ecriture / Voix / Miniamaker - Chaine Personnelle",
        videoId: "3nWXWj4TjTw",
        videoTitle: "Les HAKI, Fruits du demon"
    },
    {
        title: "VFX - Effets Spéciaux / Houdini - Personnel",
        videoId: "092-JulXG2E",
        videoTitle: "Houdini - Simulation boule de feu"
    }
];

export default function Home() {
    return (
        <section className='flex flex-col min-h-screen w-full px-10 lg:px-32 pt-20 justify-center' id='Home'>
            <article className='w-full mx-auto'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl pb-6 text-red-500 font-bold'>
                    Bonjour 👋, je suis Raphaël
                </h1>
                <h2 className='text-2xl text-red-400 italic pb-5'>A la recherche d'un stage dans le domaine de la vfx</h2>
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
                    <span className='flex items-center'>
                        <IoMail className='mr-2 text-red-500' /> raphaeldemets2@gmail.com
                    </span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8'>
                    {[
                        { title: 'Étudiant', desc: 'Bac pro communication visuelle plurimédia' },
                        { title: 'Monteur Vidéo', desc: 'Monteur Vidéo en Freelance' },
                        { title: 'Youtubeur', desc: 'Créateur de contenu passionné' },
                        { title: 'Freelance', desc: 'Disponible pour des missions de vfx, vidéos et graphismes' },
                    ].map((item, index) => (
                        <div key={index} className='p-6 rounded-lg flex flex-col items-center text-center h-full border border-red-500 bg-red-100 shadow-md transition-all hover:shadow-lg hover:scale-105'>
                            <h3 className='text-xl font-bold text-red-500 mb-2'>{item.title}</h3>
                            <p className='text-slate-700'>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Section Réalisations */}
                <section className='pb-8'>
                    <h2 className='text-2xl text-red-500 font-bold mb-6'>Mes meilleures réalisations</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {firstProjects.map((project, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <iframe
                                    className="w-full h-64"
                                    src={`https://www.youtube.com/embed/${project.videoId}`}
                                    title={project.videoTitle}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </section>
    );
}
