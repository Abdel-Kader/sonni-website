import React from 'react'
import serviceBanner from "../assets/banners/service.jpg";
import Banner from "../components/layout/Banner";
import FormationItem from "../components/formation/FormationItem";
import {
    assistanceJuridique,
    coaching,
    formationSurMesure, gestionProjetComplex,
    lobbying, mediationAffaire,
    organisationManagerQuality,
    teamBuilding
} from "../assets/contents/servicePage";

export default function ServicePage() {
    return (
        <>
            <Banner image={serviceBanner} title={"Nos services"}
                    description={"Nous offrons une palette de services de qualité"}/>
            <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
                <div className="mx-auto lg:mx-0 mb-5 mt-7">
                    <h3 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">Nos services</h3>

                </div>
                <div className="grid lg:grid-cols-4 gap-6 grid-cols-2 mb-12">
                    <FormationItem title={"Conseils et Formations"} description={"Nous mettons à votre disposition notre expertise de conseil en diplomatie et en négociations " +
                        "internationale."}/>
                    <FormationItem title={"Conseil et assistance juridique"} description={assistanceJuridique}/>
                    <FormationItem title={"Formations sur mesure"} description={formationSurMesure}/>
                    <FormationItem title={"Team Bulding"} description={teamBuilding}/>
                    <FormationItem title={"Organisateurs et Qualité"} description={organisationManagerQuality}/>
                    <FormationItem title={"Coaching"} description={coaching}/>
                    <FormationItem title={"Conseils en Relations internationales & Diplomatie"} description={"Pour vos besoins de conseils en relations internationales, à SONNI nous vous offrons les meilleurs services dans ce sens."}/>
                    <FormationItem title={"Lobbying"} description={lobbying}/>
                    <FormationItem title={"Négociations Internationales"} description={"Nous mettons à votre disposition notre expertise de conseil en diplomatie et en négociations internationale."}/>
                    <FormationItem title={"Mediation d’affaires"} description={mediationAffaire}/>
                    <FormationItem title={"Gestion de projets complexes"} description={gestionProjetComplex}/>
                    <FormationItem title={"Communication"} description={"A SONNI, nous fournissons à nos clients des services liés à la communication " +
                        "(communication interne ou externe, Prise de Parole en Public) au Leadership."}/>
                </div>
            </section>
        </>
    )
}
