import React from 'react';
import {Avatar} from "../Avatar";
import dg from "../../assets/teams/dg.jpg"
import assistant from "../../assets/teams/assistant.jpeg"
import responTraining from "../../assets/teams/responsible-training.jpeg"
import responInnov from "../../assets/teams/responsible-innovation.jpeg"
import assistantProg from "../../assets/teams/assistant-prog.jpg"

function Equipe() {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
            <div className="mx-auto lg:mx-0 mb-5">
                <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">Notre équipe</h2>
                <p className="mt-6 text-xl l leading-loose text-justify">
                    A sonni, nous sommes entourés d'une équipe jeune, dynamique et professionnelle
                </p>
            </div>
            <div className="grid lg:grid-cols-5 gap-6 grid-cols-2">
                <Avatar
                    title="Mahamadou Chaïbou MAÏGA"
                    img={dg}
                    description="Ph.D. C En Relations internationales et diplomatie d’affaires, Écrivain, Chercheur ZLECAF, Conférencier"
                    position="Directeur général du Cabinet SONNI"
                />
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

        </section>
    );
}

export default Equipe;
