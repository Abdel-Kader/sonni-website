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
                <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">Quelques uns de nos experts consultants</h2>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-2">
                <Consultant
                    title="Mah KEITA"
                    img={pharmacie}
                    position="Docteur en Pharmacie"
                />

                <Consultant
                    title="Sié Oumar SANOU"
                    img={consultantFinance}
                    position="Expert Comptable, Cadre de la BCEAO"
                />

                <Consultant
                    title="Moussa GUEYE"
                    img={consultantDP}
                    position="Coach certifiée Maxwell Leadership"
                />
                <Consultant
                    title="Ousmina Soto BALDÉ"
                    img={consultantAO}
                    position="Experte en communication, Coach certifiée Maxwell Leadership"
                />

                <Consultant
                    title="Magnamé BARADJI"
                    img={consultantFisc}
                    position="Consultant en Comptabilité - Fiscalité & Finances"
                />
                <Consultant
                    title="Soha BENCHEKROUN"
                    img={consultantCld}
                    position="Alayste et chercheuse en climat et développement"
                />


            </div>

        </section>
    );
}

export default Partners;
