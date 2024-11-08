import React, {useLayoutEffect} from 'react';
import Banner from "../components/layout/Banner";
import seminaireBanner from "../assets/banners/certificat.jpg";
import {useLocation} from 'react-router-dom';
import {motion} from "framer-motion";
import {ateliers} from "../assets/contents/seminairePage";
import {List, Tabs} from "flowbite-react";

const SeminaireDetail = () => {
    let location = useLocation();
    const seminaire = ateliers.filter(atelier => atelier.id === location.state.id);
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Banner image={seminaireBanner} title={location.state?.title} subdescription={location.state.date} description={location.state?.lieu} seminaire={location.state?.title}/>
            <section className="m-12">

                <div className="grid lg:grid-cols-2 mb-5">
                    <div className="flex">
                        <motion.img initial={{x: 300, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    exit={{x: -300, opacity: 0}}
                                    src={location.state?.image}
                                    key={location.state?.id}
                                    transition={{
                                        ease: "linear",
                                        duration: 2,
                                        x: {duration: 1}
                                    }}
                                    className="h-[400px] w-[400px]"
                                    alt="team-building-image"/>
                    </div>
                    <div className="ml-12 flex flex-col max-sm:mt-7">
                        <h3 className="font-bold text-xl mb-5 underline underline-offset-8 decoration-4 decoration-primary">Présentation</h3>

                        <span
                            className="font-medium text-primary mt-4">
                            <List>
                                {seminaire[0].presentation.map((con: any) => (
                                    <List.Item className="text-black">
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                        </span>

                    </div>

                </div>
                <Tabs variant="default">
                    <Tabs.Item active title="Objectifs">
                        <Tabs.Item active title="Contenu">
                            <List>
                                {seminaire[0].objectif.map((con: any) => (
                                    <List.Item>
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                        </Tabs.Item>
                    </Tabs.Item>
                    <Tabs.Item active title="Public ciblé">
                            <List>
                                {seminaire[0].cibles.map((con: any) => (
                                    <List.Item>
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                    </Tabs.Item>

                    {seminaire[0].programme.length > 0 && <Tabs.Item active title="Programme">
                        <List>
                            {seminaire[0].programme.map((con: any) => (
                                <List.Item>
                                    {con}
                                </List.Item>
                            ))}
                        </List>
                    </Tabs.Item>}

                    {seminaire[0].methode.length > 0 && <Tabs.Item active title="Méthode">
                        <List>
                            {seminaire[0].methode.map((con: any) => (
                                <List.Item>
                                    {con}
                                </List.Item>
                            ))}
                        </List>
                    </Tabs.Item>}
                </Tabs>
            </section>
            </>
            );
            };

            export default SeminaireDetail;
