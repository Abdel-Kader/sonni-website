import React, {useEffect} from 'react';
import Banner from "../../components/layout/Banner";
import seminaireBanner from "../../assets/banners/certificat.jpg";
import {useLocation} from 'react-router-dom';
import {motion} from "framer-motion";
import {List, Tabs} from "flowbite-react";

const SeminaireDetail = () => {
    let location = useLocation();
    const seminaire = location.state?.seminaire
    useEffect(() => {
        console.log(location.state?.seminaire)
        window.scrollTo(0, 0)
    },[]);
    return (
        <>
            <Banner image={seminaireBanner} title={location.state?.seminaire.title} subdescription={location.state.seminaire.date} description={location.state?.seminaire.lieu} seminaire={location.state?.seminaire.title}/>
            <section className="m-12">
                <div className="grid lg:grid-cols-2 mb-5">
                    <div className="flex">
                        <motion.img initial={{x: 300, opacity: 0}}
                                    animate={{x: 0, opacity: 1}}
                                    exit={{x: -300, opacity: 0}}
                                    src={seminaire.img}
                                    key={seminaire.id}
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
                                {seminaire.presentation.map((con: any) => (
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
                                {seminaire.objectifs.map((con: any) => (
                                    <List.Item>
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                        </Tabs.Item>
                    </Tabs.Item>
                    <Tabs.Item active title="Public ciblé">
                            <List>
                                {seminaire.cible.map((con: any) => (
                                    <List.Item>
                                        {con}
                                    </List.Item>
                                ))}
                            </List>
                    </Tabs.Item>

                    {seminaire.program.filter((element: any) => element !== "").length >= 1 && <Tabs.Item active title="Programme">
                        <List>
                            {seminaire.program.map((con: any) => (
                                <List.Item>
                                    {con}
                                </List.Item>
                            ))}
                        </List>
                    </Tabs.Item>}

                    {seminaire.methods.filter((element: any) => element !== "").length >= 1  && <Tabs.Item active title="Méthode">
                        <List>
                            {seminaire.methods.map((con: any) => (
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
