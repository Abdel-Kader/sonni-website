import React from 'react';

type avatarProps = {
    img: string,
    title: string,
    description: string,
    position: string
}

export function Avatar({img, title, description, position}: avatarProps) {
    return (
        <div className="shadow-lg flex items-center flex-col p-2">
            <div className="">
                <img
                    alt="DG"
                    src={img}
                    className="inline-block h-32 w-32 rounded-full ring-2 ring-secondaty"
                />
            </div>

            <span className="font-medium text-gray-800 text-center mt-4">{title}</span>
            <span className="text-[10px] text-gray-500 italic text-center mt-4">{description}</span>
            <span className="text-[9px] mt-4 font-medium text-gray-900 text-center mb-2">{position}</span>

        </div>
    );
}

