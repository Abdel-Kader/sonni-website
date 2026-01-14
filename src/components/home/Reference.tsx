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
import actu1 from "../../assets/galery/img2.png";
import actu2 from "../../assets/galery/img12.png";
import actu3 from "../../assets/actus/actu3.jpg";
import actu4 from "../../assets/actus/actu4.jpg";
import actu5 from "../../assets/actus/actu5.jpg";
import actu6 from "../../assets/actus/actu6.jpg";
import actu7 from "../../assets/actus/actu7.jpg";
import actu8 from "../../assets/actus/actu8.jpg";

import {useTranslation} from "react-i18next";

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

const references = [
    ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8,
    ref9, ref10, ref11, ref12, ref13, ref14, ref15, ref16,
];

const actus = [
    {
        image: actu1,
        caption: "Conférence diplomatique des ambassadeurs SEM Amadou Diallo et M. Abdel Azeez Mohamed",
    },
    {
        image: actu2,
        caption: "Panel integration économique africaine: Africa Invest Forum",
    },
    {
        image: actu3,
        caption: "Audience entre le Directeur Exécutif de SONNI Group Advisory et SEM Ambassadeur de la Guinée au Sénégal",
    },
    {
        image: actu4,
        caption: "Audience entre l’ambassadeur du Cameroun et le Directeur Exécutif de SONNI Group Advisory",
    },
    {
        image: actu5,
        caption: "Rencontre en le représentant permanent de l’UEMOA au Sénégal et le Directeur Exécutif de SONNI Group Advisory",
    },
    {
        image: actu6,
        caption: "Rencontre entre le Directeur Exécutif de SONNI Group Advisory et SEM Saidou MAIGA, ambassadeur du Burkina Faso",
    },
    {
        image: actu7,
        caption: "Échange entre le Directeur Exécutif de SONNI Group Advisory et SEM Jean KOE NTONGA, doyen du corps diplomatique au Sénégal, ambassadeur du Cameroun.",
    },
    {
        image: actu8,
        caption: "Audience entre le Directeur Exécutif de SONNI Group Advisory et SEM Saidou Maiga, ambassadeur du Burkina Faso",
    },
];


const Reference = ({type}: {type?:string}) => {
    const {t} = useTranslation();

    return (
        <>
            {
                type === 'ref' && (
                    <>
                        <h4 className="text-xl mx-6 lg:ml-24 mt-5 font-semibold uppercase sm:text-2xl">
                            {t('title.reference_sub')}
                        </h4>

                        <p className="mx-6 lg:ml-24 mt-2 text-[#54595f] lg:leading-loose">
                            {t('home.reference')}
                        </p>
                    </>
                )
            }
            {/* 📱 MOBILE — 1 logo par slide */}
            <div className="block md:hidden">
                {type === "ref" && (
                    <Carousel slide={false} className="h-36" leftControl={<ArrowLeft />} rightControl={<ArrowRight />}>
                        {references.map((logo, idx) => (
                            <div key={idx} className="flex w-40 items-center justify-center h-full">
                                <img
                                    src={logo}
                                    alt="Référence SONNI Group Advisory"
                                    className="max-h-28 object-contain"
                                />
                            </div>
                        ))}
                    </Carousel>
                )}

                {type === "actu" && (
                    <Carousel slide={false} className="h-[260px]" leftControl={<ArrowLeft />} rightControl={<ArrowRight />}>
                        {actus.map((item, idx) => (
                            <figure className="relative group w-72">
                                <img
                                    src={item.image}
                                    alt={item.caption}
                                    className="w-full h-52 object-cover rounded-2xl"
                                />

                                {/* Overlay */}
                                <figcaption className="
                                            absolute inset-0
                                            flex items-end
                                            rounded-2xl
                                            bg-gradient-to-t from-black/70 via-black/70 to-transparent
                                          ">
                                    <p className="text-secondary text-sm text-justify px-3 pb-1 leading-snug">
                                        {item.caption}
                                    </p>
                                </figcaption>
                            </figure>
                        ))}
                    </Carousel>
                )}
            </div>


            <div className="hidden md:block">

                {type === "ref" && (
                    <Carousel slide={false} className="h-44" leftControl={<ArrowLeft />} rightControl={<ArrowRight />}>
                        {[references.slice(0, 8), references.slice(8, 16)].map((group, idx) => (
                            <div key={idx} className="flex px-5 place-items-center">
                                {group.map((logo, i) => (
                                    <div
                                        key={i}
                                        className="w-48 h-28 flex items-center justify-center rounded-xl hover:shadow-md transition"
                                    >
                                        <img
                                            src={logo}
                                            alt="Référence SONNI Group Advisory"
                                            className="max-h-20 object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                )}

                {type === "actu" && (
                    <Carousel slide={false} className="h-60" leftControl={<ArrowLeft />} rightControl={<ArrowRight />}>
                        {[actus.slice(0, 4), actus.slice(4, 8)].map((group, idx) => (
                            <div key={idx} className="flex justify-center gap-8 ">
                                {group.map((item, i) => (
                                    <figure className="relative group w-72 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.caption}
                                            className="w-full h-52 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                                        />

                                        {/* Overlay */}
                                        <figcaption className="
                                            absolute inset-0
                                            flex items-end
                                            rounded-2xl
                                            bg-gradient-to-t from-black/70 via-black/70 to-transparent
                                          ">
                                            <p className="text-secondary text-sm text-justify px-3 pb-1 leading-snug">
                                                {item.caption}
                                            </p>
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                )}

            </div>


            {type === 'ref' && <p className="mx-6 lg:ml-24 mb-20 text-[#54595f] lg:leading-loose">
                {t('home.reference_sub')}
            </p>}

        </>
    );
};

export default Reference;
