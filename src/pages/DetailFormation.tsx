import React from 'react';
import Banner from "../components/layout/Banner";
import formationBanner from "../assets/banners/formation.jpg";
import {FormationSubItem} from "../components/formation/FormationSubItem";
import {Link, useLocation} from 'react-router-dom';

const DetailFormation = () => {
    let location = useLocation();

    return (
        <>
            <Banner image={formationBanner} title={location.state?.title} catalogue={location.state.type} />
            <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
                <div className="mx-auto lg:mx-0 mb-7 mt-7 flex justify-between items-center">
                    <h3 className="font-bold text-2xl mb-5 underline underline-offset-8 decoration-4 decoration-primary">{location.state?.title}</h3>
                    <Link to="/contact" state={{type: 'devis'}}
                          className="text-white text-center content-center mt-5 h-12 w-[230px] hover:bg-secondaty bg-primary align-bottom">
                        Demander un dévis
                    </Link>
                </div>
                {
                    location.state.modules?.map((ml: any) => (
                        <FormationSubItem title={ml.titre} module={ml}/>
                    ))
                }


            </section>
        </>
    );
};

export default DetailFormation;
