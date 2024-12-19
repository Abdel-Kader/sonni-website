import React, {useEffect} from "react";
import Banner from "../../components/layout/Banner";
import certificatBanner from "../../assets/banners/certificat.jpg";
import {MbaItem} from "../../components/MbaItem";
import {mbaFinance} from "../../assets/contents/mba";

const MBAFinance = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <Banner image={certificatBanner} title={"Nos certificats et MBA"}
                    description={"SONNI GROUP, organisme de formation professionnelle continue reconnu du droit sénégalais. Nous mettons à votre disposition des certifications et MBA conçus par notre comité pédagogique composé d’experts praticiens, répondants aux critères d’excellences."}/>
            <section className="mx-auto mt-12">
                <h3 className="font-bold text-center max-sm:m-3 max-sm:text-xl text-primary text-2xl pb-[20px] underline underline-offset-8 decoration-4 decoration-primary">Executive MBA en Management des Risques Financiers et strategies d’Investissement</h3>

                <MbaItem
                    title='Executive MBA en Management des Risques Financiers et strategies d’Investissement'
                    description={mbaFinance.description}
                    type='finance'
                    objectifs={mbaFinance.objectifs}
                    style_pedagogique={mbaFinance.style_pedagogique}
                    cibles={mbaFinance.cibles}
                    atouts={mbaFinance.atouts}
                    infos_supplementaires={mbaFinance.infos_supplementaires}
                    cout={mbaFinance.cout}
                />
            </section>
        </>
    )
}

export default MBAFinance
