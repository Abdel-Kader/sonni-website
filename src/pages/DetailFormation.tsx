import React, {useEffect} from 'react';
import Banner from "../components/layout/Banner";
import formationBanner from "../assets/banners/formation.jpg";
import {FormationSubItem} from "../components/formation/FormationSubItem";
import { useLocation } from 'react-router-dom';

const DetailFormation = () => {
    let location = useLocation();
    useEffect(() => {
        console.log(location.state?.title)
    }, []);
    return (
        <>
            <Banner image={formationBanner} title={"Formations"}
                    description={"Nous offrons une palette de formation afin avec des formateurs compétents"}/>
            <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
                <h3 className="font-bold text-2xl mb-5 underline underline-offset-8 decoration-4 decoration-primary">{location.state?.title}</h3>
                {
                    location.state.modules?.map((ml: any)=> (
                        <FormationSubItem title={ml.titre} module={ml}/>
                    ))
                }


            </section>
        </>
    );
};

export default DetailFormation;
