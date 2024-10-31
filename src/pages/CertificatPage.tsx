import React from 'react';
import certificatBanner from "../assets/banners/certificat.jpg";
import Banner from "../components/layout/Banner";

const CertificatPage = () => {
    return (
        <>
            <Banner image={certificatBanner} title={"Nos certificats et MBA"}
                    description={"SONNI GROUP, organisme de formation professionnelle continue reconnu du droit sénégalais. Nous mettons à votre disposition des certifications et MBA conçus par notre comité pédagogique composé d’experts praticiens, répondants aux critères d’excellences."}/>
        </>
    );
};

export default CertificatPage;
