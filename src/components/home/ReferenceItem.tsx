import React from 'react';

export const ReferenceItem = ({image}: {image: string}) => {
    return (
        <div className="max-w-screen-xl  lg:py-16 lg:px-6">
                <img src={image}
                     className="absolute block h-[200px] w-[200px] mb-7 rounded-2xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="reference"/>
        </div>
    );
};

