import React from 'react';
import {CalendarIcon, MapPinIcon} from "@heroicons/react/16/solid";
import { motion, AnimatePresence } from "framer-motion"


export const SeminaireItem = ({title, image, date, lieu}: {title: string, image: string, date: string, lieu?: string}) => {
    return (
        <div className="shadow-md p-2 border-black mt-12 ml-20 mb-7">

            <div className="flex flex-row ">
                <div>
                    <motion.img initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -300, opacity: 0 }}
                                src={image}
                                key={image}
                                transition={{ ease: "linear",
                                    duration: 2,
                                    x: { duration: 1 } }}
                                className="h-72 w-[300px]"
                                alt="team-building-image"/>
                </div>
                <div className="ml-12">
                    <span className="font-medium text-primary text-center mt-4">{title}</span>
                    <span className="flex flex-row font-medium text-primary text-center mt-4">
                        <CalendarIcon height={25} style={{marginRight: 5}}/>
                        {date}
                    </span>
                    <span className="flex flex-row font-medium text-primary text-center mt-4">
                        <MapPinIcon height={25} style={{marginRight: 5}}/>
                        {lieu}
                    </span>
                </div>

            </div>
        </div>
    );
};

