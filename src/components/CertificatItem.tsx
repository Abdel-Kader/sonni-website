import React from 'react';

export const CertificatItem = ({title, image, pos, desc, program}: {title: string, image: string, pos: string, desc: string, program?: string}) => {
    return (
            <section className="m-12 mb-24">

                <div className="grid grid-cols-2 gap-4 mb-10">
                    {pos === 'left' &&
                        <img
                            src={image}
                            className="h-[320px] w-[400px]"
                            alt="team-building-image"/>
                    }
                    <div className="flex flex-col">
                        <h3 className="font-bold text-xl mb-5 underline underline-offset-8 decoration-4 decoration-primary">{title}</h3>

                        <span
                            className="font-medium text-primary text-justify mt-4">
                            {desc}
                        </span>
                        <div className="flex justify-evenly">
                            <div
                                className="flex flex-col border-primary w-40 rounded mt-10 mb-7 border justify-center h-12 align-bottom">
                                <a
                                    href={program} rel="noopener noreferrer" target='_blank'
                                    className=" text-md text-primary text-center">Voir le programme
                                </a>
                            </div>
                            <div
                                className="flex flex-col bg-primary w-48 rounded mt-10 mb-7 border-t-gray-300 border justify-center h-12 align-bottom">
                                <a
                                    href={`mailto:contact@sonni-group.com?subject=${title}`} target='_blank'
                                    className=" text-md text-white text-center">Contacter un conseiller
                                </a>
                            </div>
                        </div>
                    </div>

                    {pos === 'right' &&
                        <div className="flex flex-1 justify-end">
                            <img
                                src={image}
                                className="h-[320px] w-[400px]"
                                alt="team-building-image"/>
                        </div>
                    }
                </div>

            </section>
    );
};

