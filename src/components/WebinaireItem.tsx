import React from 'react';
import {CalendarIcon, MapPinIcon} from "@heroicons/react/16/solid";
import { motion } from "framer-motion"
import {Link} from "react-router-dom";


export const WebinaireItem = ({webinaire}: any) => {
    return (
        <div className="shadow-md p-2 border-black mt-12 lg:ml-20 mb-7 flex flex-row justify-between max-sm:grid max-sm:grid-cols-1 max-sm:mx-7">

            <div className="flex flex-row max-sm:grid max-sm:grid-cols-1">
                <div>
                    <motion.img initial={{x: 300, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                exit={{x: -300, opacity: 0}}
                                src={webinaire.img}
                                key={webinaire.img}
                                transition={{
                                    ease: "linear",
                                    duration: 2,
                                    x: {duration: 1}
                                }}
                                className="h-72 w-[300px] max-sm:w-full max-sm:h-80"
                                alt="team-building-image"/>
                </div>

                <div className="lg:ml-12 flex-col flex">
                    <span className="font-medium text-xl text-primary mt-4">Webinaire</span>
                    <span className="font-medium text-xl text-primary text-center mt-4">Thème: {webinaire.theme}</span>
                    <span className="flex flex-row font-medium text-xl text-primary text-center mt-4 max-sm:mt-7">
                        <CalendarIcon height={25} style={{marginRight: 5}}/>
                        {webinaire.date}
                    </span>
                    <span className="flex flex-row font-medium text-xl text-primary text-center mt-4 max-sm:mt-7">
                        <MapPinIcon height={25} style={{marginRight: 5}}/>
                       En ligne sur zoom
                    </span>

                </div>

            </div>
            <div className="flex justify-end flex-col max-sm:mt-7">
                <div
                    className="flex flex-col hover:bg-primary justify-center w-40 border-t-gray-300 border h-10  bg-secondary align-bottom">
                    <Link to={`/webinaire/detail`} state={{webinaire: webinaire}}
                          className="text-white hover:text-white text-center">En
                        savoir plus
                    </Link>
                </div>
            </div>
        </div>
    );
};

