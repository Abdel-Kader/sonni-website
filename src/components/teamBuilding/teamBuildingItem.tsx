import React from 'react';


export const TeamBuildingItem = ({title, description, image, subList}: {title: string, description: string, image: string, subList? : any[]}) => {
    return (
        <div className="shadow-sm flex items-center flex-col p-2 border-gray-800 mt-12">

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <span className="font-medium text-sm text-primary text-center mt-4">{title}</span>
                    <br/>
                    <br/>
                    <span className="text-gray-500 text-justify mt-4">{description}</span>
                    <ul className="list-disc ml-4">
                        {subList && subList.map(list=> (
                            <li className="text-gray-500">{list.item}</li>
                        ))}
                    </ul>
                </div>
                <div><img src={image} className="h-80 w-[500px]" alt="team-building-image"/></div>
            </div>
        </div>
    );
};

