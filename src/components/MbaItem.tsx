import React from 'react';
import {List} from "flowbite-react";
import { Link } from 'react-router-dom';

export const MbaItem = ({title, description, objectifs, style_pedagogique, cibles, atouts, infos_supplementaires, cout, type}: any) => {
    return (
            <section className="m-12 max-sm:m-5 mb-24">

                <div className="grid lg:grid-cols-1 gap-4 mb-10">

                    <div className="flex flex-1 max-sm:w-[89%] flex-col">

                        <h3 className="font-bold underline text-xl text-primary">Description de la formation</h3>

                            <span
                                className="font-medium text-justify  mt-4 text-[#7A7A7A]">
                                <span className={"font-bold underline"}>L’Executive MBA</span> est un diplôme professionnel délivré par le Centre d’Études en Diplomatie et Management – SONNI d’une durée de 10 mois en formation à distance sur la plateforme Zoom.
                                La formation est dispensée deux fois par semaine, le plus souvent les week-ends, et basée sur le développement des compétences et capacités en gestion, avec une spécialité en
                                {type === 'finance' && <span className="font-bold ml-1">Management des Risques Financiers et Stratégies d’Investissement</span>}
                                {type === 'relaInter' && <span className="font-bold ml-1">Diplomatie, Relations Internationales et Communication d’Influence.</span>}
                                <br/>
                                <br/>
                                Les modules et un projet de soutenance permettront aux participants de développer les compétences visées avec l’accompagnement du corps pédagogique. Les intervenants sont des experts internationaux, principalement d’Afrique et d’Europe, avec une expérience enrichissante <span
                                className="font-bold">en formation des cadres supérieurs.</span>.
                                <br/>
                                <br/>
                                La durée globale de la formation est de 8 mois de cours, avec un projet d’application.
                            </span>



                        <div className="flex justify-evenly">
                        <div
                            className="flex flex-col bg-secondary w-auto rounded-2xl p-2 mt-10 mb-7 border-t-gray-300 border justify-center h-10 align-bottom">
                            <a rel="noreferrer"
                               href={`https://wa.me/221772162785`}
                               target='_blank'
                               className=" text-md text-white text-center">Contactez nous sur WhatsApp
                            </a>
                        </div>
                        </div>

                        <div className="flex justify-evenly">

                            <div
                                className="flex flex-col bg-primary w-48 rounded mt-10 mb-7 border-t-gray-300 border justify-center h-12 align-bottom">
                                <Link to={'/contact-mba'} state={{type: 'download', file: type, title: title}}
                                   className=" text-md text-white text-center">Télécharger la Plaquette
                                </Link>
                            </div>

                            <div
                                className="flex flex-col bg-primary w-48 rounded mt-10 mb-7 border-t-gray-300 border justify-center h-12 align-bottom">
                                <Link to={'/contact-mba'} state={{type: 'subscription'}}
                                      className=" text-md text-white text-center">Demande d'admission
                                </Link>
                            </div>
                        </div>

                        <h3 className="mt-4 font-bold underline text-xl text-primary">Objectifs de la formation</h3>
                        <span className="font-medium text-justify mt-4 text-[#7A7A7A]">

                            <List>
                                {objectifs.map((con: any) => (
                                    <List.Item>
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                        </span>

                        <h3 className="mt-4 font-bold underline text-xl text-primary">Style pedagogique</h3>

                            <span className="font-medium text-justify mt-4 text-[#7A7A7A]">
                                Notre <span className={'font-bold'}>Executive MBA</span> est basé sur l’interaction entre l’expert formateur et les auditeurs. Chaque enseignement théorique est suivi d’un cas pratique.
                                <br/>
                                L’évaluation s’effectue sous forme d’un exposé de présentation.
                            </span>


                        <h3 className="mt-4 font-bold underline text-xl text-primary">Cibles</h3>
                        <span className="font-medium text-justify mt-4 text-[#7A7A7A]">

                            <List>
                                {cibles.map((con: any) => (
                                    <List.Item>
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                        </span>

                        <h3 className="mt-4 font-bold underline text-xl text-primary">Atouts de la formation</h3>
                        <span className="font-medium text-justify mt-4 text-[#7A7A7A]">

                            <List>
                                {atouts.map((con: any) => (
                                    <List.Item>
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                        </span>

                        <h3 className="mt-4 font-bold underline text-xl text-primary">Infos supplémentaires</h3>
                        <span className="font-medium text-justify mt-4 text-[#7A7A7A]">

                            <List>
                                {infos_supplementaires.map((con: any) => (
                                    <List.Item>
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                        </span>
                        <h3 className="mt-4 font-bold underline text-xl text-primary">Cout de la formation</h3>
                        <span className="font-medium text-justify mt-4 text-[#7A7A7A]">
                            {cout}
                        </span>

                        <h3 className="mt-4 font-bold underline text-xl text-primary">Contact Admission</h3>
                        <span className="font-medium text-justify mt-4 text-[#7A7A7A]">
                            Adresse Mail: contact@sonni-group.com
                            <br/>
Téléphone (WhatsApp) +221 77 216 27 85
                             <br/>
site web: Sonni-group.com
                        </span>

                    </div>

                </div>

            </section>
    );
};

