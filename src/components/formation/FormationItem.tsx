import React from 'react';
import {Link} from "react-router-dom";

const FormationItem = ({title, description, id, modules, type}: {title: string, description: string, id?: string, modules?: any[], type?:string}) => {
    return (
        <div className="shadow-xl flex items-center  flex-col  border-black">
            <div className="flex flex-col h-[250px] w-full p-2">
                <span className="font-medium text-primary text-center mt-4">{title}</span>
                <span className="text-gray-500 text-[12px] text-justify mt-4">{description}</span>
            </div>
            {id &&
                <div className="flex flex-col hover:bg-primary w-full border-t-gray-300 border justify-center h-10 bg-primary align-bottom">
                    <Link to={`/formations/${id}`} state={{ title: title, modules: modules, type }} className="text-secondaty text-xs hover:text-white underline text-center">En
                        savoir plus
                    </Link>
                </div>
            }

        </div>
    )
        ;
};

export default FormationItem;
