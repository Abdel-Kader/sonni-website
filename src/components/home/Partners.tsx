import React from 'react';
import pharmacie from "../../assets/teams/consultant-pharmacie.jpeg"
import consultantAO from "../../assets/teams/consultant-ao.jpg"
import consultantDP from "../../assets/teams/consultant-dp.jpg"
import consultantFinance from "../../assets/teams/consultant-finance.jpg"
import consultantFisc from "../../assets/teams/consultant-fisc.jpeg"
import consultantCld from "../../assets/teams/consultant-cld.jpg"
import {Consultant} from "../Consultant";

function Partners() {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
            <div className="mx-auto lg:mx-0 mb-5">
                <h2 className="text-[35px] font-bold tracking-tight text-center text-secondary uppercase">Quelques uns de nos experts consultants</h2>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-2">
                <Consultant
                    title="Mah KEITA"
                    img={pharmacie}
                    position="Formatrice associée à SONNI GROUP, Docteur en Pharmacie"
                />

                <Consultant
                    title="Sié Oumar SANOU"
                    img={consultantFinance}
                    position="Formateur associé à SONNI GROUP, Expert-Comptable, Cadre de la Banque Centrale des États de l’Afrique de l’Ouest (BECEAO)"
                />

                <Consultant
                    title="Moussa GUEYE"
                    img={consultantDP}
                    position="Formateur Associé à SONNI GROUP, Expert en Ressources Humaines, Coach certifié Maxwell Leadership"
                />
                <Consultant
                    title="Ousmina Soto BALDÉ"
                    img={consultantAO}
                    position="Formatrice Associée à SONNI GROUP, Experte en Communication, Coach certifiée Maxwell Leadership"
                />

                <Consultant
                    title="Magnamé BARADJI"
                    img={consultantFisc}
                    position="Formateur associé à SONNI GROUP, Consultant en comptabilité – Fiscalité & finances"
                />
                <Consultant
                    title="Soha BENCHEKROUN"
                    img={consultantCld}
                    position="Analyste et chercheuse en climat développement"
                />


            </div>

        </section>
    );
}

export default Partners;
