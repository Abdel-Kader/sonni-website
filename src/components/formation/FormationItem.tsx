import React from 'react';

const FormationItem = ({title, description}: {title: string, description: string}) => {
    return (
        <div className="shadow-lg flex items-center flex-col p-2 border-gray-800">
            <span className="font-medium text-primary text-center mt-4">{title}</span>
            <span className="text-gray-500 italic text-center mt-4">{description}</span>

        </div>
    );
};

export default FormationItem;
