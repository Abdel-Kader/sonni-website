import React from 'react';
import {Link} from "react-router-dom";

function Item({title, date, lieu, img, animateur}: {title: string, date: string, lieu: string, img?: string, animateur?:string}) {
    return (
        <div className="shadow-xl flex items-center flex-col  border-black max-sm:mt-10">
            {
                img &&
                <img src={img} className="w-full h-48" alt={'img'}/>
            }
            <div className="flex flex-col w-full p-2">
                <span className="font-medium text-primary text-center mt-4">{title}</span>
                <span className="text-gray-500 lg:text-[12px] text-justify mt-4">{date}</span>
                <span className="text-gray-500 lg:text-[12px] text-justify mt-4">{lieu}</span>
                {animateur && <span className="text-gray-500 lg:text-[12px] text-justify mt-4">{animateur}</span>}
            </div>
            <div
                className="flex flex-row w-full items-center self-center border-t-gray-300 border justify-between  align-bottom">
                <button
                      className="text-white bg-primary text-xs h-10 self-center  items-center hover:text-white p-2 text-center">
                    Modifier
                </button>
                <button
                    className="text-white bg-red-800 text-xs h-10 items-center hover:text-white p-2 text-center flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                    </svg>

                    Supprimer
                </button>
            </div>
        </div>
    );
}

export default Item;
