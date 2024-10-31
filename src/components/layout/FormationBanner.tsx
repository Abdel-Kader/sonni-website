import React from 'react';
import {Link} from "react-router-dom";

type bannerProps = {
    image: string
}

export const FormationBanner = ({image}: bannerProps) => {
    return (
        <div className="  block justify-center bg-cover shadow-lg  h-[700px] overflow-hidden" style={{backgroundImage: `url(${image})`}}>

            <div className="bg-black bg-opacity-50 h-full">
                <div className="items-center mx-auto pt-40 justify-center flex flex-col">
                    <h2 className=" text-2xl tracking-tight text-white animate-slidein300 opacity-0">Ensemble pour le
                        développement de vos compétences !</h2>
                    <h4 className=" text-xl mt-10 tracking-tight text-white animate-slidein300 opacity-0">Découvrez nos
                        thématiques de formation</h4>
                    <p className="text-center text-white mt-7 w-2/3">
                        Dans un monde de travail en pleine mutation, le professionnel a l’obligation de pouvoir se
                        former pour être à pointe. SONNI, organisme de formation continue met à votre disposition
                        toute une palette de formation qui vous permet de développer vos compétences.
                    </p>
                </div>
                <div className="grid lg:grid-cols-6 grid-cols-6 gap-4 mx-20 mt-7">
                    <div
                        className=" justify-center flex items-center bg-secondary rounded-2xl p-1">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">DIPLOMATIE D’AFFAIRES
                        </Link>
                    </div>
                    <div
                        className=" justify-center  flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">DIPLOMATIE ÉCONOMIQUE
                        </Link>
                    </div>
                    <div
                        className=" justify-center flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">REPRÉSENTATION DIPLOMATIQUE
                        </Link>
                    </div>

                    <div
                        className=" justify-center flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">HUMANITAIRE
                        </Link>
                    </div>
                    <div
                        className=" justify-center  flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">ZLECAF
                        </Link>
                    </div>
                    <div
                        className=" justify-center flex items-center bg-secondary rounded-2xl p-1">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">LEADERSHIP
                        </Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-6 grid-cols-6 gap-4 mt-7 mx-20">

                    <div
                        className=" justify-center  flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">COMMUNICATION
                        </Link>
                    </div>
                    <div
                        className=" justify-center flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">PRISE DE PAROLE EN PUBLIC
                        </Link>
                    </div>
                    <div
                        className=" justify-center flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">DROIT DE TRAVAIL
                        </Link>
                    </div>
                    <div
                        className=" justify-center flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">DROIT DES AFFAIRES
                        </Link>
                    </div>
                    <div
                        className=" justify-center  flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">COMPTABILITÉ ET GESTION
                        </Link>
                    </div>
                    <div
                        className=" justify-center flex items-center bg-secondary rounded-2xl p-1">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">COACHING PERFORMANCE PROFESSIONNELLE
                        </Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-4 gap-4 mt-7 mx-20">
                    <div
                        className=" justify-center flex items-center bg-secondary rounded-2xl p-1">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">COACHING PERFORMANCE PROFESSIONNELLE
                        </Link>
                    </div>
                    <div
                        className=" justify-center  flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">MARKETING GESTION LOGISTIQUE
                        </Link>
                    </div>
                    <div
                        className=" justify-center flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">BUREAUTIQUE MARCHÉS PUBLICS
                        </Link>
                    </div>
                    <div
                        className=" justify-center flex items-center bg-secondary rounded-2xl">
                        <Link to={`/formations`}
                              className="text-white text-center text-[14px]">SANTÉ TRAVAIL ET SECURITÉ DÉVELOPPEMENT DURABLE
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};


