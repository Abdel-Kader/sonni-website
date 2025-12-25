import React from 'react';
import { Carousel } from "flowbite-react";
import ref1 from "../../assets/refs/reference1.png";
import ref2 from "../../assets/refs/ref2.png";
import ref3 from "../../assets/refs/ref3.png";
import ref4 from "../../assets/refs/ref4.png";
import ref5 from "../../assets/refs/ref5.png";
import ref6 from "../../assets/refs/ref6.png";
import ref7 from "../../assets/refs/ref7.png";
import ref8 from "../../assets/refs/ref8.png";
import ref9 from "../../assets/refs/ref9.png";
import ref10 from "../../assets/refs/ref10.png";
import ref11 from "../../assets/refs/ref11.png";
import ref12 from "../../assets/refs/ref12.png";
import ref13 from "../../assets/refs/ref13.png";
import ref14 from "../../assets/refs/ref14.png";
import ref15 from "../../assets/refs/ref15.png";
import ref16 from "../../assets/refs/ref16.png";

const ArrowLeft = () => (
    <svg width="44" height="44" viewBox="0 0 512 512">
        <circle cx="256" cy="256" r="248" fill="#f6b218" />
        <path
            fill="#fff"
            d="M320 144L192 256l128 112"
            stroke="#fff"
            strokeWidth="40"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ArrowRight = () => (
    <svg width="44" height="44" viewBox="0 0 512 512">
        <circle cx="256" cy="256" r="248" fill="#f6b218" />
        <path
            fill="#fff"
            d="M192 144l128 112-128 112"
            stroke="#fff"
            strokeWidth="40"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);


const Reference = () => {

    const references = [
        ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8,
        ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16,
    ];

    return (
        <>
            {/* 📱 MOBILE — 1 logo par slide */}
            <div className="block md:hidden ">
                <Carousel slide={false} className="h-36" leftControl={<ArrowLeft />} rightControl={<ArrowRight />}>
                    {references.map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex w-40 items-center justify-center h-full"
                        >
                            <img
                                src={logo}
                                alt="Référence SONNI Group Advisory"
                                className="max-h-28 object-contain"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            <div className="hidden md:block">
                <Carousel slide={false} className="h-44" leftControl={<ArrowLeft />} rightControl={<ArrowRight />}>
                    {[references.slice(0, 8), references.slice(8, 16)].map((group, idx) => (
                        <div
                            key={idx}
                            className="flex px-10 place-items-center"
                        >
                            {group.map((logo, i) => (
                                <div
                                    key={i}
                                    className="w-40 h-24 flex items-center justify-center rounded-xl hover:shadow-md transition">
                                    <img
                                        src={logo}
                                        alt="Référence SONNI Group Advisory"
                                        className="max-h-16 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default Reference;
