import React from 'react';

type avatarProps = {
    img: string,
    title: string,
    description: string,
    position: string
}

export function Avatar({img, title, description, position}: avatarProps) {
    return (
        <div className="flex items-center flex-col p-2">
            <div className="flex group flex-col">
                <img
                    alt="DG"
                    src={img}
                    className="inline-block h-72 w-72 rounded-full ring-2 ring-gray"
                />


                <span className="font-medium text-gray-800 text-center mt-4">{title}</span>
               <Description title={title} description={description} position={position}/>
            </div>
        </div>
    );
}


const Description = ({title, position, description}: {title: string, position: string, description: string}) => {
  return (
      <div
          className="bg-black h-[300px] w-[300px] justify-center p-2 rounded-xl flex-col hidden group-hover:flex relative bottom-[335px] bg-opacity-70">
          <span className="text-white mt-4 font-medium">{title}</span>
          <span className="text-sm text-secondary mt-4 font-medium mb-2">{position}</span>
          <span className="text-[12px] text-white mt-4">{description}</span>
      </div>
  )
}
