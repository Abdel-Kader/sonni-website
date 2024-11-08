import React, {useEffect, useLayoutEffect} from 'react';
import Banner from "../components/layout/Banner";
import seminaireBanner from "../assets/banners/certificat.jpg";
import {useLocation} from 'react-router-dom';
import animateur from "../assets/webinaires/animateur1.png";

const WebinaireDetail = () => {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <>
            <Banner image={seminaireBanner} title={location.state?.title} subdescription={location.state.date} description={location.state?.lieu} webinaire={location.state?.title}/>
            <section className="m-12">
                <p className="text-center text-2xl mb-5 font-bold">Animatrice </p>
                <div className="flex items-center flex-col p-2 mb-7">
                    <div>
                        <img
                            alt="DG"
                            src={animateur}
                            className="inline-block h-72 w-72 rounded-full ring-4 ring-secondary"
                        />
                    </div>

                    <span className="font-medium text-primary text-xl text-center mt-4">Roselvie MAKOSSO</span>
                    <span className="text-[9px] mt-4 font-medium text-gray-900 text-center mb-2 text-xl">Coach certifiée Maxwell</span>

                </div>
            </section>
        </>
    );
};

export default WebinaireDetail;
