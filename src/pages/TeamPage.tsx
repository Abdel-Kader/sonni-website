import React from 'react';
import {Avatar} from "../components/Avatar";
import dg from "../assets/teams/dg.jpg";
import assistant from "../assets/teams/assistant.jpeg";
import responTraining from "../assets/teams/responsible-training.jpeg";
import responInnov from "../assets/teams/responsible-innovation.jpeg";
import assistantProg from "../assets/teams/assistant-prog.jpg";
import Partners from "../components/home/Partners";

const TeamPage = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-32">
            <div className="mx-auto lg:mx-0 mb-10">
                <h2 className="text-[35px] font-bold tracking-tight text-center text-secondary">NOTRE EQUIPE</h2>
                <p className="mt-6 text-xl leading-loose text-center">
                    A SONNI tout en nous alignant sur notre vision qui est de contribuer à l’essor économique du continent et au rayonnement du potentiel humain partout sur le continent. Nous nous sommes entourés d’une équipe à la fois mixte et interculturelle, reflétant une Afrique unie dans sa diversité.
                </p>

                <p className="mt-6 text-xl font-medium leading-loose text-center">
                    Notre équipe est dynamique, performante, orientée résultats et qualités, prête à être à écoute pour vous servir.
                </p>
            </div>
            <Avatar
                title="Mahamadou Chaïbou MAÏGA"
                img={dg}
                description="Ph.D. C En Relations internationales et diplomatie d’affaires, Écrivain, Chercheur ZLECAF, Conférencier"
                position="Directeur général du Cabinet SONNI"
            />
            <div className="grid lg:grid-cols-2 grid-cols-2">
                {/* <Avatar
                    title="Mahamadou Chaïbou MAÏGA"
                    img={dg}
                    description="Ph.D. C En Relations internationales et diplomatie d’affaires, Écrivain, Chercheur ZLECAF, Conférencier"
                    position="Directeur général du Cabinet SONNI"
                /> */}
                <Avatar
                    title="Aminata SALL"
                    img={assistant}
                    description="Diplômée en comptabilité de l’Université Cheickh Anta DIOP (l’IFACE)"
                    position="Assistante de Direction et financière du Cabinet SONNI"
                />

                <Avatar
                    title="Nourroudine ALFARI"
                    img={responTraining}
                    description="Détenteur d’un Master en Audit & Comptabilité du CESAG"
                    position="Responsable pôle formation certifiante du Cabinet SONNI"
                />

                <Avatar
                    title="Nazir CHEIKH"
                    img={responInnov}
                    description="Ingénieur en transformation et innovation de l’Ecole Supérieure Multinationale des Télécommunications (ESMT)"
                    position="Responsable de la recherche et de l’innovation du Cabinet SONNI"
                />
                <Avatar
                    title="Aboubacar CHAÏBOU"
                    img={assistantProg}
                    description=""
                    position="Assistant Programme et innovation"
                />
            </div>


            <Partners />

        </section>
    );
};

export default TeamPage;
