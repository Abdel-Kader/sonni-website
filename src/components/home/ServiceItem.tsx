import React from 'react';
import { motion } from "framer-motion"

export const ServiceItem = ({title, description, serviceImg}: {title: string, description: string, serviceImg: string}) => {
    return (


            <motion.div whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                className="block justify-center max-w-sm rounded-lg bg-cover shadow-lg ml-4"
                style={{backgroundImage: `url(${serviceImg})`}}>
                <div className="bg-black bg-opacity-60 max-w-sm h-full p-8 rounded-lg">
                    <h5
                        className="mb-4 font-medium leading-tight text-secondaty">
                        {title}
                    </h5>
                    <p
                        className="mb-4 mt-7 text-base text-white">
                        {description}
                    </p>

                </div>

            </motion.div>

    );
};

