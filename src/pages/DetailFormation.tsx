import React from 'react';
import Banner from "../components/layout/Banner";
import formationBanner from "../assets/banners/formation.jpg";
import {relationInter, relationInterDesc} from "../assets/contents/formationPage";

const DetailFormation = () => {
    return (
        <>
            <Banner image={formationBanner} title={"Formations"}
                    description={"Nous offrons une palette de formation afin avec des formateurs compétents"}/>
            <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
                <h3 className="font-medium text-lg text-center mb-5">{relationInter}</h3>
                <p>{relationInterDesc}</p>
            </section>
        </>
    );
};

export default DetailFormation;
