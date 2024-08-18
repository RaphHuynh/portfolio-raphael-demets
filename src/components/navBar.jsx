import { useState } from 'react';

export default NavBar;

function NavBar(){
    const [textNav, setTextNav] = useState([
        {id : "#Home", content : "Accueil"},
        {id : "#Competence", content :"Competences"},
        {id : "#Work", content :"Réalisations"},
      ]);

    return (
        <div>
            <nav className="fixed w-full h-10 lg:h-20 z-10 px-10 lg:px-32 flex justify-between items-center bg-white">
                    <div className='flex w-full md:w-auto items-baseline'>
                        <span className='lg:text-2xl text-zinc-800 font-bold mr-14'>Raphaël Demets</span>
                        {textNav.map((text) => (
                            <a key={text.id} className="mr-2 lg:mr-4 lg:text-xl text-zinc-600 border-b-2 border-transparent hover:border-red-500 transition delay-75" href={text.id}>
                                <span>{text.content}</span>
                            </a>
                        ))}
                    </div>

            </nav>
        </div>
    );
}