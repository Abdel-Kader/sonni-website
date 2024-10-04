import React from 'react';
import certificatBanner from "../assets/banners/certificat.jpg";
import Banner from "../components/layout/Banner";

const CertificatPage = () => {
    return (
        <>
            <Banner image={certificatBanner} title={"Nos certificats"}
                    description={"Vous avez la possibilité de passer des crtifications"}/>
        </>
    );
};

export default CertificatPage;
