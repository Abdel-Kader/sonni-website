import React from 'react';
import {CalendarIcon, MapPinIcon} from "@heroicons/react/16/solid";
import { motion } from "framer-motion"
import {Link} from "react-router-dom";


export const WebinaireItem = ({title, image, date, heure, animateur}: {title: string, image: string, date: string, heure?: string, animateur: string}) => {
    return (
        <div className="shadow-md p-2 border-black mt-12 ml-20 mb-7 flex flex-row justify-between">

            <div className="flex flex-row max-sm:grid max-sm:grid-cols-1">
                <div>
                    <motion.img initial={{x: 300, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                exit={{x: -300, opacity: 0}}
                                src={image}
                                key={image}
                                transition={{
                                    ease: "linear",
                                    duration: 2,
                                    x: {duration: 1}
                                }}
                                className="h-72 w-[300px]"
                                alt="team-building-image"/>
                </div>

                <div className="lg:ml-12 flex-col flex">
                    <span className="font-medium text-xl text-primary mt-4">Webinaire</span>
                    <span className="font-medium text-xl text-primary text-center mt-4">{title}</span>
                    <span className="flex flex-row font-medium text-xl text-primary text-center mt-4">
                        <CalendarIcon height={25} style={{marginRight: 5}}/>
                        {date} {heure}
                    </span>
                    <span className="flex flex-row font-medium text-xl text-primary text-center mt-4">
                        <MapPinIcon height={25} style={{marginRight: 5}}/>
                       En ligne sur zoom
                    </span>

                </div>

            </div>
            <div className="flex justify-end flex-col">
                <div
                    className="flex flex-col hover:bg-primary justify-end w-40 border-t-gray-300 border h-10 justify-center bg-secondary align-bottom">
                    <Link to={`/webinaire/detail`} state={{title: title, image: image, date:date}}
                          className="text-white hover:text-white text-center">En
                        savoir plus
                    </Link>
                </div>
            </div>
        </div>
    );
};

