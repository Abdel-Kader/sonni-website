import React from 'react';
import { motion } from "framer-motion"

export const ServiceItem = ({title, description, bgColor, color}: {title: string, description?: string, bgColor: string, color: string}) => {
    return (


            <motion.div whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                className="block justify-center lg:max-w-sm rounded-lg bg-cover shadow-lg ml-4 mt-6"
                style={{backgroundColor: `${bgColor}`}}>
                <div className="lg:max-w-sm h-full p-8 rounded-lg">
                    <h5
                        className="font-medium text-center capitalize text-xl leading-tight max-sm:leading-relaxed"  style={{color: `${color}`}}>
                        {title}
                    </h5>
                    {description &&
                        <p className="mb-4 mt-7 text-base text-center text-black">
                        {description}
                    </p>}

                </div>

            </motion.div>

    );
};

