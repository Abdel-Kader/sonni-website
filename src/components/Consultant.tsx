import React from 'react';

type avatarProps = {
    img: string,
    title: string,
    position: string
}

export function Consultant({img, title, position}: avatarProps) {
    return (
        <div className="flex items-center flex-col p-2 mb-7">
            <div>
                <img
                    alt="DG"
                    src={img}
                    className="inline-block h-72 w-72 rounded-full ring-2 ring-gray"
                />
            </div>

            <span className="font-medium text-gray-800 text-center mt-4">{title}</span>
            <span className="text-[9px] mt-4 font-medium text-gray-900 text-center mb-2">{position}</span>

        </div>
    );
}
