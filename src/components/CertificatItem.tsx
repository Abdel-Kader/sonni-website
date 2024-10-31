import React from 'react';
import { motion } from "framer-motion"


export const CertificatItem = ({title, image, pos, desc, program}: {title: string, image: string, pos: string, desc: string, program?: string}) => {
    return (
            <section className="m-12">

                <div className="grid grid-cols-2 mb-5">
                    {pos === 'left' && <div className="flex">
                        <motion.img initial={{x: 300, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    exit={{x: -300, opacity: 0}}
                                    src={image}
                                    transition={{
                                        ease: "linear",
                                        duration: 2,
                                        x: {duration: 1}
                                    }}
                                    className="h-[320px] w-[400px]"
                                    alt="team-building-image"/>
                    </div>}
                    <div className="ml-12 flex flex-col">
                        <h3 className="font-bold text-xl mb-5 underline underline-offset-8 decoration-4 decoration-primary">Présentation</h3>

                        <span
                            className="font-medium text-primary mt-4">
                            {desc}
                        </span>
                        <div className="flex justify-evenly">
                            <div
                                className="flex flex-col border-primary w-40 rounded mt-10 mb-7 border justify-center h-12 align-bottom">
                                <a
                                    href={"doc"} rel="noopener noreferrer" target='_blank'
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

                    {pos === 'right' && <div className="flex">
                        <motion.img initial={{x: 300, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    exit={{x: -300, opacity: 0}}
                                    src={image}
                                    transition={{
                                        ease: "linear",
                                        duration: 2,
                                        x: {duration: 1}
                                    }}
                                    className="h-[320px] w-[400px]"
                                    alt="team-building-image"/>
                    </div>}
                </div>

            </section>
    );
};

