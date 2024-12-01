import React, {useEffect} from 'react';
import {CalendarIcon, MapPinIcon} from "@heroicons/react/16/solid";
import { motion } from "framer-motion"
import {Link} from "react-router-dom";


export const SeminaireItem = ({seminaire}: any) => {
    useEffect(() => {
        console.log(seminaire)
    }, []);
    return (
        <div className="shadow-md p-2 border-black mt-12 lg:ml-20 max-sm:ml-10 mb-7 flex flex-row justify-between max-sm:grid max-sm:grid-cols-1 max-sm:mx-7">

            <div className="flex flex-row max-sm:grid sm:grid-cols-1 gap-4">
                <div>
                    <motion.img initial={{x: 300, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                exit={{x: -300, opacity: 0}}
                                src={seminaire.img}
                                key={seminaire.img}
                                transition={{
                                    ease: "linear",
                                    duration: 2,
                                    x: {duration: 1}
                                }}
                                className="h-72 w-[300px] max-sm:w-full max-sm:h-80"
                                alt="team-building-image"/>
                </div>
                <div className="ml-12">
                    <span className="font-medium text-primary text-center mt-4">{seminaire.theme}</span>
                    <span className="flex flex-row font-medium text-primary text-center mt-4 max-sm:mt-7">
                        <CalendarIcon height={25} style={{marginRight: 5}}/>
                        {seminaire.date}
                    </span>
                    <span className="flex flex-row font-medium text-primary text-center mt-4 max-sm:mt-7">
                        <MapPinIcon height={25} style={{marginRight: 5}}/>
                        {seminaire.lieu}
                    </span>
                </div>

            </div>
            <div className="flex justify-end flex-col items-end">
                <div
                    className="flex flex-col hover:bg-primary justify-center w-40 border-t-gray-300 border max-sm:mt-7 h-10  bg-secondary align-bottom">
                    <Link to={`/seminaires/detail`} state={{seminaire: seminaire}}
                          className="text-white hover:text-white text-center">En
                        savoir plus
                    </Link>
                </div>
            </div>
        </div>
    );
};

