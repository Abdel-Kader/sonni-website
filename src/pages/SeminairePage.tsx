import React from 'react';
import certificatBanner from "../assets/banners/certificat.jpg";
import Banner from "../components/layout/Banner";
import ecriture from "../assets/seminaire/ecriture.jpg"
import gestionDeTemps from "../assets/seminaire/gestion-temps.jpg"
import priseDeParole from "../assets/seminaire/prise-de-parole.jpg"
import {SeminaireItem} from "../components/seminaire/SeminaireItem";


const SeminairePage = () => {
    return (
        <>
            <Banner image={certificatBanner} title={"Nos séminaires"}
                    description={"Nous offrons une palette de services de qualité"}/>
            <div
                className="col-span-3 m-12 text-xs font-bold tracking-tight text-primary sm:text-xl animate-slidein500 opacity-0">
                Séminaires à venir
            </div>
            <section className="mx-auto mt-12">
                <SeminaireItem title="Séminaire Pratique en Gestion du Temps et des Priorités" image={gestionDeTemps}
                               date={"Démarrage le O9 Novembre"} lieu={"Salle SONNI"}/>
                <SeminaireItem title="Atelier de Prise de Parole en Public" image={priseDeParole}
                               date={"Démarrage le 05 novembre"} lieu={"Salle SONNI"}/>
                <SeminaireItem
                    title="Séminaire pratique d’écriture: Plonger dans l’Écriture d’un livre, trouver votre style d’écriture"
                    image={ecriture} date={"Démarrage le 11 Novembre"} lieu={"Salle SONNI"}/>
            </section>
        </>
    );
};

export default SeminairePage;
