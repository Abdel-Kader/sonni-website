import React from 'react';
import { motion, AnimatePresence } from "framer-motion"



export const TeamBuildingItem = ({title, description, image, subList, doc}: {title: string, description: string, image: string, subList? : any[], doc: string}) => {
    return (
        <div className="shadow-md  flex items-center flex-col p-2 border-black mt-12">

            <div className="grid grid-cols-2 gap-4">
                <div className="px-6">
                    <span className="font-medium text-primary text-center mt-4">{title}</span>
                    <br/>
                    <br/>
                    <span className="text-gray-500 text-justify mt-4">{description}</span>
                    <br/>
                    <br/>
                    <ul className="list-disc ml-4">
                        {subList && subList.map(list => (
                            <li className="text-gray-500">{list.item}</li>
                        ))}
                    </ul>
                    <div className="justify-center flex">
                        <div
                            className="flex flex-col bg-primary w-40 rounded mt-10 mb-7 border-t-gray-300 border justify-center h-10 align-bottom">
                            <a
                                href={doc} download={title} target='_blank'
                                className=" text-md text-white text-center">En
                                savoir plus
                            </a>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    <div className="ml-12">

                        <motion.img initial={{x: 300, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    exit={{x: -300, opacity: 0}}
                                    src={image}
                                    key={image}
                                    transition={{
                                        ease: "linear",
                                        duration: 2,
                                        x: {duration: 1}
                                    }} className="h-80 w-[500px]"/>
                    </div>
                </AnimatePresence>
            </div>
        </div>
    );
};

