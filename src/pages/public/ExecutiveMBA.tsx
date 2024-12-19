import React, {useEffect} from "react";
import Banner from "../../components/layout/Banner";
import certificatBanner from "../../assets/banners/certificat.jpg";
import {MbaItem} from "../../components/MbaItem";
import {mbaFinance, relaInter} from "../../assets/contents/mba";

const ExecutiveMBA = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <Banner image={certificatBanner} title={"Nos certificats et MBA"}
                    description={"SONNI GROUP, organisme de formation professionnelle continue reconnu du droit sénégalais. Nous mettons à votre disposition des certifications et MBA conçus par notre comité pédagogique composé d’experts praticiens, répondants aux critères d’excellences."}/>
            <section className="mx-auto mt-12">
                <h3 className="font-bold text-center max-sm:m-3 max-sm:text-xl text-primary text-2xl pb-[20px] underline underline-offset-8 decoration-4 decoration-primary">
                    Executive MBA en Diplomatie, Relations Internationales et Communication d’Influence
                </h3>
                <MbaItem
                    title='Executive MBA en Management des Risques Financiers et strategies d’Investissement'
                    description={relaInter.description}
                    objectifs={relaInter.objectifs}
                    style_pedagogique={relaInter.style_pedagogique}
                    cibles={relaInter.cibles}
                    type="relaInter"
                    atouts={relaInter.atouts}
                    infos_supplementaires={relaInter.infos_supplementaires}
                    cout={relaInter.cout}
                />
            </section>
        </>
    )
}

export default ExecutiveMBA
