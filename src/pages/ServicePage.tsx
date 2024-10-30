import React from 'react'
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

export default function ServicePage() {
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
                <div className="grid lg:grid-cols-4 gap-6 grid-cols-2 mb-12">
                    <FormationItem title={"Conseils et Formations"} description={"Organisme de formation continue, le renforcement des capacités, au cœur de nos services. Nous mettons à votre disposition une palette de formation conçue pour répondre à vos" +
                        " besoins de séminaires, d’ateliers pratiques, de formations certifiantes."}/>
                    <FormationItem title={"Formations sur mesure"} description={formationSurMesure}/>
                    <FormationItem title={"Team Bulding"} description={teamBuilding}/>
                    <FormationItem title={"Conseils en Relations internationales & Diplomatie"} description={"Notre expertise en relations internationales et pratique diplomatique est avérée, pour vos " +
                        "besoins de conseils en relations internationales, en diplomatie, en analyses géopolitique," +
                        "géostratégique, SONNI vous offre les meilleurs services."}/>
                    <FormationItem title={"Lobbying"} description={lobbying}/>
                    <FormationItem title={"Négociations Internationales"} description={"La négociation internationale une science ! À SONNI, nous mettons à votre disposition notre " +
                        "expertise de conseils en négociation internationale."}/>
                    <FormationItem title={"Communication & Prise de parole en Public"} description={communication}/>
                    <FormationItem title={"Coaching Professionnel"} description={coaching}/>
                    <FormationItem title={"Mediation d’affaires"} description={mediationAffaire}/>
                    <FormationItem title={"Conseil et assistance juridique"} description={assistanceJuridique}/>
                    <FormationItem title={"Gestion de grands projets"} description={gestionProjetComplex}/>
                    <FormationItem title={"Organisation et Qualité"} description={organisationManagerQuality}/>
                </div>
            </section>
        </>
    )
}
