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
                    Notre équipe est dynamique, performante, orientée résultats et qualités, prête à être à votre écoute pour mieux vous servir.
                </p>
            </div>
            <Avatar
                title="Mahamadou Chaïbou MAIGA"
                img={dg}
                description="PhD. C en relations internationales et diplomatie d’affaires, Écrivain, Juriste, Chercheur ZLECAF, Conférencier"
                position="Directeur Exécutif de SONNI GROUP"
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
                    description="Diplômée en comptabilité de l’université Cheikh Anta DIOP (IFACE)"
                    position="Assistante de Direction et financière de SONNI GROUP"
                />

                <Avatar
                    title="Nourroudine ALFARI"
                    img={responTraining}
                    description="Diplômé du Master en Audit &amp; Comptabilité du CESAG"
                    position="Responsable administratif et financier de SONNI GROUP"
                />

                <Avatar
                    title="Nazir CHEIKH"
                    img={responInnov}
                    description="Ingénieur en transformation et innovation de l’École Supérieure Multinationale des Télécommunications (ESMT)"
                    position="Responsable de la recherche et de l’innovation de SONNI GROUP"
                />
                <Avatar
                    title="Aboubacar CHAIBOU"
                    img={assistantProg}
                    description="Diplômé de l’Université de TÉTOUAN en QHSE"
                    position="Assistant de la recherche et de l’innovation de SONNI GROUP"
                />
            </div>


            <Partners />

        </section>
    );
};

export default TeamPage;
