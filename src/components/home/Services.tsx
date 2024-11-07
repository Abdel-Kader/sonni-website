import React from 'react';
import {ServiceItem} from "./ServiceItem";
import serviceImg from "../../assets/banners/service.jpg"
import teamBuildingImg from "../../assets/banners/team-building.jpg"
import conseilImg from "../../assets/banners/formation.jpg"

const Services = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
            <div className="mx-auto lg:mx-0 mb-5">
                <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">NOS SERVICES PHARES</h2>

            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
                <ServiceItem
                    serviceImg={serviceImg}
                    title={"FORMATION  & COACHING"}
                    description={"Nos séminaires de formation, de coaching, nos certifications et MBA sont spécialement conçus à une large publique pour une valorisation des compétences et une croissance exceptionnelle de vos activités. "}
                />
                <ServiceItem
                    serviceImg={conseilImg}
                    title={"CONSEIL EN RELATIONS INTERNATIONALES & DIPLOMATIE"}
                    description={"Nous vous fournissons des services de conseil en relations internationales, en diplomatie d’affaires, en analyse géopolitique, géostratégique, et en risques du continent africain : Afrique de l’Ouest, Afrique Centrale."}
                />
                <ServiceItem
                    serviceImg={teamBuildingImg}
                    title={"LOBBYING"}
                    description={"Nous mettons notre expertise de lobbying à votre disposition pour vous faciliter les négociation internationales, médiations d’affaires, Gestion des grands projets sur le continent etc."}
                />
                <ServiceItem
                    serviceImg={teamBuildingImg}
                    title={"TEAM BUILDING"}
                    description={"Les énergies inexploitées peuvent être exploitées à travers des moment de convivialité, de jeu, d’animation renforçant la cohésion de l’équipe et le dynamisme de vos équipes. Notre programme de team Building est là pour cela. "}
                />
            </div>
        </section>
                );
                };

                export default Services;
