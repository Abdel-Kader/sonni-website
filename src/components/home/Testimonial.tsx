import React from 'react';

const Testimonial = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
            <h2 className="text-xl lg:ml-80 mb-8 font-bold tracking-tight text-primary sm:text-2xl animate-slidein500 opacity-0">
                Témoignages</h2>
            <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"/>
            <div
                className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"/>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">

                <div className="flex justify-center">
                    <span className="text-center text-xl font-medium text-indigo-600">Personne 1</span>
                </div>
                <figure className="mt-6">
                <blockquote
                        className="text-center font-semibold leading-8 text-gray-900 sm:text-xl sm:leading-9">
                        <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa
                            sapiente alias”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">

                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Nom et Prénom</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                <circle r={1} cx={1} cy={1}/>
                            </svg>
                            <div className="text-gray-600">Poste</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Testimonial;
