import React from 'react';
import certificatBanner from "../assets/banners/certificat.jpg";
import Banner from "../components/layout/Banner";

const SeminairePage = () => {
    return (
        <>
            <Banner image={certificatBanner} title={"Nos séminaires"}
                    description={"Nous offrons une palette de services de qualité"}/>
        </>
    );
};

export default SeminairePage;
