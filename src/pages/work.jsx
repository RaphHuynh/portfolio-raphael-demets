import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

AOS.init();

export default function Work() {
    const projects = [
        {
            title: "Mathart - Montage Vidéo - Freelance",
            videos: [
                { id: "I_KgiCZGlr8", title: "C'est quoi une fractale ?" },
                { id: "3x9eF4sKnqo", title: "Les membres cachés de Trash" },
                { id: "yxdqsrGudmY", title: "Le futur de Youtube" }
            ]
        },
        {
            title: "IM SAMA - Montage Vidéo / Ecriture / Voix / Miniamaker - Chaine Personnelle",
            videos: [
                { id: "3nWXWj4TjTw", title: "Les HAKI, Fruits du demon" },
                { id: "Q780TKpCPbs", title: "Les 10 MEILLEURS utilisateurs de HAKI DES ROIS de ONE PIECE" },
                { id: "VQUS-Qr2slc", title: "5 techniques OUBLIÉ de luffy !" }
            ]
        },
        {
            title: "Création 3D - Personnel",
            videos: [
                { id:"092-JulXG2E", title: "VFX - Houdini - Simulation boule de feu" },
                { id:"kabquFpWlX0", title: "VFX - Houdini - Entrainement flamme" },
                { id:"ITbDp0cFZrE", title: "VFX - Houdini - Fireball FX entrainement" },
                { id:"vEqbt53x784", title: "VFX - Houdini - Modélisation Knife animation" },
                { id:"EMyhqDN34Ls", title: "VFX - Breakdown voyage temporel" },
                { id:"Mf9qhmqr4-Q", title: "VFX - Houdini - Feux de camps Houpuzzle" },
            ]
        }
    ];

    return (
        <section className="flex flex-col min-h-screen w-full p-10 lg:px-32 justify-center" id="Work">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-700 mb-10" data-aos="fade-up">
                💼 Mes réalisations
            </h1>
            <p className='text-lg text-slate-600 mb-10' data-aos="fade-up" data-aos-delay="200">
                Je vous présente mes différentes réalisations dans cette section dédiée. Je suis actuellement <strong className="text-black">Monteur</strong> pour la chaîne YouTube de <a href="https://www.youtube.com/@mathart_" className="text-red-500 hover:underline"><strong>Mathart</strong></a>, où je réalise des montages vidéo ainsi que <strong className="text-black">Youtubeur</strong> sur ma propre chaîne.
            </p>
            
            {projects.map((project, index) => (
                <div key={index} className="mb-16" data-aos="fade-up" data-aos-delay={index * 100}>
                    <h2 className="text-2xl text-red-500 font-semibold mb-6">{project.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {project.videos.map((video) => (
                            <motion.div 
                                key={video.id} 
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                <iframe
                                    className="w-full h-48 lg:h-64"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
