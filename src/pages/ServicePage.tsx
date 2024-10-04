import React from 'react'
import serviceBanner from "../assets/banners/service.jpg";
import Banner from "../components/layout/Banner";
import FormationItem from "../components/formation/FormationItem";

export default function ServicePage() {
    return (
        <>
            <Banner image={serviceBanner} title={"Nos services"}
                    description={"Nous offrons une palette de services de qualité"}/>
            <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
                <div className="mx-auto lg:mx-0 mb-5 mt-7">
                    <h3 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">Nos services</h3>

                </div>
                <div className="grid lg:grid-cols-5 gap-6 grid-cols-2 mb-12">
                    <FormationItem title={"Conseils et Formations"} description={"Description du service"}/>
                    <FormationItem title={"Accompagnements"} description={"Description du service"}/>
                    <FormationItem title={"Formations sur mesure"} description={"Description du service"}/>
                    <FormationItem title={"Team Bulding"} description={"Description du service"}/>
                    <FormationItem title={"Formations"} description={"Description du service"}/>
                    <FormationItem title={"Organisateurs et Qualité"} description={"Description du service"}/>
                    <FormationItem title={"Coaching"} description={"Description du service"}/>
                    <FormationItem title={"Conseils en Relations internationales & Diplomatie"} description={"Description du service"}/>
                    <FormationItem title={"Lobbying"} description={"Description du service"}/>
                    <FormationItem title={"Négociations Internationales"} description={"Description du service"}/>
                    <FormationItem title={"Mediation d’affaires"} description={"Description du service"}/>
                    <FormationItem title={"Gestion de projets complexes"} description={"Description du service"}/>
                    <FormationItem title={"Communication"} description={"Description du service"}/>
                </div>
            </section>
        </>
    )
}
