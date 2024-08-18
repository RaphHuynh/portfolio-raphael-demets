export default Work;

function Work(){
    return(
        <section className="flex flex-col min-h-screen w-full p-10 lg:px-32 justify-center" id="Work">
            <article className="w-full">
                <h1 className="text-2xl md:text-3xl lg:text-5xl text-red-500 h-fit py-2 w-fit mb-10">
                   💼 Mes réalisations
                </h1>
                <p className='text-slate-600'>
                    Je vous présente mes différentes réalisations dans cette section dédiée. Je suis actuellement <strong className=" text-black">Monteur</strong> pour la chaîne YouTube de <a href="https://www.youtube.com/@mathart_" className="text-red-500"><strong className="hover:text-red-700 hover:cursor-pointer">Mathart</strong></a>, où je réalise des montages vidéo ainsi que <strong className="text-black">Youtubeur</strong> sur ma propre chaîne.
                </p>
                
                <h2 className="text-red-500 text-2xl pt-10">Mathart - Montage Vidéo - Freelance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    <iframe
                        className="w-full h-64"
                        src="https://www.youtube.com/embed/I_KgiCZGlr8"
                        title="C'est quoi une fractale ?"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <iframe
                        className="w-full h-64"
                        src="https://www.youtube.com/embed/3x9eF4sKnqo"
                        title="Les membres cachés de Trash"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <iframe
                        className="w-full h-64"
                        src="https://www.youtube.com/embed/yxdqsrGudmY"
                        title="Le futur de Youtube"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <h2 className="text-red-500 text-2xl pt-10">IM SAMA - Montage Vidéo / Ecriture / Voix - Chaine Personnelle</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    <iframe
                        className="w-full h-64"
                        src="https://www.youtube.com/embed/3nWXWj4TjTw"
                        title="Les HAKI, Fruits du demon"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <iframe
                        className="w-full h-64"
                        src="https://www.youtube.com/embed/qYlHf-rOIIQ"
                        title="COMMENT fonctionne les EQUIPAGES dans ONE PIECE !"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <iframe
                        className="w-full h-64"
                        src="https://www.youtube.com/embed/KZlrj-u3Tp8"
                        title="4 SCENES cultes dans ONE PIECE EXPLIQUER !"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </article>
        </section>
    )
}
