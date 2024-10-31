import React from 'react';
import certificatBanner from "../assets/banners/certificat.jpg";
import com from '../assets/certifications/com.png'
import Banner from "../components/layout/Banner";
import {CertificatItem} from "../components/CertificatItem";

const CertificatPage = () => {
    return (
        <>
            <Banner image={certificatBanner} title={"Nos certificats et MBA"}
                    description={"SONNI GROUP, organisme de formation professionnelle continue reconnu du droit sénégalais. Nous mettons à votre disposition des certifications et MBA conçus par notre comité pédagogique composé d’experts praticiens, répondants aux critères d’excellences."}/>

            <CertificatItem title={"Programme de certification communication politique et influence."} image={com} desc={"La formation en communication politique et influence vise à fournir aux participants les outils et les\n" +
                "compétences nécessaires pour naviguer efficacement dans le paysage politique contemporain. La\n" +
                "communication politique est l'\n" +
                "art de transmettre des messages et des idées à des fins politiques.\n" +
                "Elle englobe divers moyens de diffusion : les discours, les débats, les médias traditionnels et\n" +
                "numériques, ainsi que les campagnes publicitaires"} pos="left" program={"com"}  />
        </>
    );
};

export default CertificatPage;
