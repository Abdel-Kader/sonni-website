import React, {useEffect, useLayoutEffect} from 'react'
import serviceBanner from "../assets/banners/service.jpg";
import Banner from "../components/layout/Banner";
import FormationItem from "../components/formation/FormationItem";
import {
    assistanceJuridique,
    coaching, communication,
    formationSurMesure, gestionProjetComplex,
    lobbying, mediationAffaire,
    organisationManagerQuality,
    teamBuilding
} from "../assets/contents/servicePage";
import {Link} from "react-router-dom";

import coachingImg from '../assets/services/coaching.png'
import commImg from '../assets/services/comm.png'
import conseilImg from '../assets/services/conseil.png'
import grandProjImg from '../assets/services/grandProjet.png'
import juridiqueImg from '../assets/services/juridique.png'
import lobbyingImg from '../assets/services/lobbying.png'
import mediationImg from '../assets/services/mediation.png'
import mesureImg from '../assets/services/mesure.png'
import negociationImg from '../assets/services/negociation.png'
import orgaImg from '../assets/services/orga.png'
import relaIntImg from '../assets/services/rela-inter.png'
import teamBuildingImg from '../assets/services/teambuilding.png'

export default function ServicePage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <>
            <Banner image={serviceBanner} title={"Nos services"}
                    description={"Ensemble pour des services de qualités !\n" +
                        "\n" +
                        "Cabinet SONNI met à votre disposition des services de qualités pour votre satisfaction."}/>
            <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
                <div className="mx-auto lg:mx-0 mb-7 mt-7 flex justify-between items-center">
                    <h3 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">Nos services</h3>
                    <Link to="/contact" state={{type: 'service'}} className="text-white text-center content-center mt-5 h-12 w-[230px] hover:bg-secondaty bg-primary align-bottom">
                        Laissez nous un message
                    </Link>
                </div>
                <div className="grid lg:grid-cols-4 gap-6 grid-cols-1 mb-12">
                    <FormationItem img={conseilImg} title={"Conseils et Formations"} description={"Organisme de formation continue, le renforcement des capacités, au cœur de nos services. Nous mettons à votre disposition une palette de formation conçue pour répondre à vos" +
                        " besoins de séminaires, d’ateliers pratiques, de formations certifiantes."}/>
                    <FormationItem img={mesureImg} title={"Formations sur mesure"} description={formationSurMesure}/>
                    <FormationItem img={teamBuildingImg} title={"Team Bulding"} description={teamBuilding}/>
                    <FormationItem img={relaIntImg} title={"Conseils en Relations internationales & Diplomatie"} description={"Notre expertise en relations internationales et pratique diplomatique est avérée, pour vos " +
                        "besoins de conseils en relations internationales, en diplomatie, en analyses géopolitique," +
                        "géostratégique, SONNI vous offre les meilleurs services."}/>
                    <FormationItem img={lobbyingImg} title={"Lobbying"} description={lobbying}/>
                    <FormationItem img={negociationImg} title={"Négociations Internationales"} description={"La négociation internationale une science ! À SONNI, nous mettons à votre disposition notre " +
                        "expertise de conseils en négociation internationale."}/>
                    <FormationItem img={commImg} title={"Communication & Prise de parole en Public"} description={communication}/>
                    <FormationItem img={coachingImg} title={"Coaching Professionnel"} description={coaching}/>
                    <FormationItem img={mediationImg} title={"Mediation d’affaires"} description={mediationAffaire}/>
                    <FormationItem img={juridiqueImg} title={"Conseil et assistance juridique"} description={assistanceJuridique}/>
                    <FormationItem img={grandProjImg} title={"Gestion de grands projets"} description={gestionProjetComplex}/>
                    <FormationItem img={orgaImg} title={"Organisation et Qualité"} description={organisationManagerQuality}/>
                </div>
            </section>
        </>
    )
}
