import { FaDesktop, FaPaintBrush, FaPencilRuler, FaVideo } from 'react-icons/fa';
import image from '../assets/illustration.svg';

export default function Competence() {
    const skills = [
        { 
            title: "VFX", 
            icon: <FaDesktop />,
            items: ["Houdini", "After Effect"]
        },
        { 
            title: "Graphisme", 
            icon: <FaPaintBrush />,
            items: ["Illustrator", "Indesign", "Photoshop"]
        },
        { 
            title: "UI-UX", 
            icon: <FaPencilRuler />,
            items: ["Adobe XD"]
        },
        { 
            title: "Montage Vidéo", 
            icon: <FaVideo />,
            items: ["Premiere Pro"]
        }
    ];

    return (
        <section className='min-h-screen w-full p-10 lg:px-32 flex flex-col justify-center' id="Competence">
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-slate-700 mb-6'>
                💻 Compétences
            </h1>
            <p className='text-lg text-slate-600 mb-12'>
                Voici les différents logiciels que j'utilise au quotidien dans mon travail, au lycée ou pour mes projets personnels.
            </p>
            <div className='grid gap-8 lg:grid-cols-2'>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className='bg-red-500 text-white p-4 flex items-center justify-center'>
                                {skill.icon}
                                <h2 className='text-xl ml-2'>{skill.title}</h2>
                            </div>
                            <div className='p-4'>
                                {skill.items.map((item, itemIndex) => (
                                    <span key={itemIndex} className="inline-block bg-red-100 text-red-700 rounded-full px-3 py-1 text-sm mr-2 mb-2 transition-colors duration-300 hover:bg-red-200">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='hidden lg:flex items-center justify-center'>
                    <img src={image} alt="Illustration" className="max-w-full h-auto transition-all duration-300" />
                </div>
            </div>
        </section>
    );
}