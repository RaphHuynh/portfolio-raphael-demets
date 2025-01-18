import React from 'react';
import { FaMapMarkerAlt, FaCar, FaLaptop } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";
import { motion } from 'framer-motion';

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
        videoId: "hlCp1J7FdOg",
        videoTitle: "Houdini - Skull rendu 150F"
    }
];

// Variants pour les animations
const fadeInOutVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            duration: 1.2,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
};

const itemVariants = (delay) => ({
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            duration: 1,
            delay: delay,
            ease: "easeInOut"
        }
    }
});

export default function Home() {
    return (
        <motion.section 
            className='flex flex-col min-h-screen w-full px-10 lg:px-32 pt-20 justify-center' 
            id='Home'
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeInOutVariants} 
        >
            <motion.article className='w-full mx-auto'>
                <motion.h1 className='text-2xl md:text-3xl lg:text-4xl pb-6 text-slate-700 font-bold' 
                    variants={itemVariants(0.2)}
                >
                    Bonjour 👋, je suis Raphaël
                </motion.h1>
                <motion.p className='text-2xl text-red-400 italic pb-5' 
                    variants={itemVariants(0.4)}
                >
                    A la recherche d'un stage dans le domaine de la vfx et freelance
                </motion.p>

                <motion.div 
                    className='flex flex-wrap text-md lg:text-lg pb-8 gap-4 text-slate-600'
                    variants={itemVariants(0.6)}
                >
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
                </motion.div>

                <motion.div 
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8'
                >
                    {[
                        { title: 'Étudiant', desc: 'Bac pro communication visuelle plurimédia' },
                        { title: 'Youtubeur', desc: 'Créateur de contenu passionné' },
                        {'title': 'VFX artiste junior', 'desc': 'Junior en effets spéciaux'},
                    ].map((item, index) => (
                        <motion.div 
                            key={index} 
                            className='p-6 rounded-lg flex flex-col items-center text-center h-full border border-red-500 bg-red-100 shadow-md transition-all'
                            variants={itemVariants(0.6 + 0.2 * index)}
                        >
                            <h3 className='text-xl font-bold text-red-500 mb-2'>{item.title}</h3>
                            <p className='text-slate-700'>{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <section className='pb-8'>
                    <motion.h2 className='text-2xl text-slate-700 font-bold mb-6'
                        variants={itemVariants(1.2)}
                    >Mes meilleures réalisations</motion.h2>
                    <motion.div 
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    >
                        {firstProjects.map((project, index) => (
                            <motion.div 
                                key={index} 
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                whileHover={{ scale: 1.05 }} 
                                variants={itemVariants(1.4 + 0.2 * index)} 
                            >
                                <iframe
                                    className="w-full h-64"
                                    src={`https://www.youtube.com/embed/${project.videoId}`}
                                    title={project.videoTitle}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </motion.article>
        </motion.section>
    );
}

