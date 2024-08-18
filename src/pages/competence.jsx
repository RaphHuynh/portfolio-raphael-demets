import image from '../assets/illustration.svg';
export default Competence;

function Competence(){
    //State
    const vfx = [{id:"Houdini"},{id:'After Effect'}];

    const graphisme = [{id:"Illustrator"},{id:'Indesign'},{id:'Photoshop'}]

    const uiux = [{id:"Adobe XD"}]

    const video = [{id:"Premiere Pro"}]

    //Affichage
    return (
        <section className='flex flex-col min-h-screen w-full p-10 lg:px-32 justify-center' id="Competence">
            <h1 className='text-2xl md:text-3xl lg:text-5xl text-red-500 h-fit py-2 w-fit mb-10'>
                💻 Compétences
            </h1>
            <aside className="text-sm md:text-lg pb-10">
                <p className='text-slate-600'>
                    Voici les différents logiciels que j'utilise au quotidien dans mon travail, au lycée ou pour mes projets personnels.
                </p>
            </aside>
            <article className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 text-sm md:text-lg'>
                <div className='grid gap-6 grid-rows-2 h-full'>
                    <div className="w-full rounded-lg flex flex-col justify-between bg-white/70 shadow">
                        <h2 className='flex md:text-lg lg:text-xl text-white text-center py-4 justify-center items-center border-b bg-red-500 rounded-t-lg'>VFX</h2>
                        <div className='flex flex-wrap pb-6 px-6 pt-6'>
                            {vfx.map(item => (
                                <span className="bg-red-300 text-red-700 mr-2 px-2 py-1 rounded mb-2 text-sm" key={item.id}>{item.id}</span>
                            ))}
                        </div>
                    </div>
                    <div className="w-full rounded-lg flex flex-col justify-between bg-white/70 shadow">
                        <h2 className='flex md:text-lg lg:text-xl text-white text-center py-4 justify-center items-center border-b bg-red-500 rounded-t-lg'>Graphisme</h2>
                        <div className='flex flex-wrap px-6 pb-6'>
                                {graphisme.map(item => (
                                    <span className="bg-red-300 text-red-700 mr-2 px-2 py-1 rounded mb-2 text-sm" key={item.id}>{item.id}</span>
                                ))}
                        </div>
                    </div>
                </div>

                <div className='h-full md:flex items-center hidden'>
                    <img src={image} alt="Illustration">
                    </img>
                </div>

                <div className='grid gap-6 grid-rows-2'>
                    <div className="w-full rounded-lg flex flex-col justify-between bg-white/70 shadow">
                        <h2 className='flex md:text-lg lg:text-xl text-white text-center py-4 justify-center items-center border-b bg-red-500 rounded-t-lg'>UI-UX</h2>
                        <div className='flex  flex-wrap pb-6 px-6'>
                                {uiux.map(item => (
                                    <span className="bg-red-300 text-red-700 mr-2 px-2 py-1 rounded mb-2 text-sm" key={item.id}>{item.id}</span>
                                ))}
                        </div>
                    </div>
                    <div className="w-full rounded-lg flex flex-col justify-between bg-white/70 shadow">
                        <h2 className='flex md:text-lg lg:text-xl text-white text-center py-4 justify-center items-center border-b bg-red-500 rounded-t-lg'>Montage Vidéo</h2>
                        <div className='flex  flex-wrap px-6 pb-6'>
                                {video.map(item => (
                                    <span className="bg-red-300 text-red-700 mr-2 px-2 py-1 rounded mb-2 text-sm" key={item.id}>{item.id}</span>
                                ))}
                            </div>
                    </div>
                </div>
            </article>
        </section>
    );
}