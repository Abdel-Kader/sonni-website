import React, {useEffect} from 'react';
import Banner from "../../components/layout/Banner";
import seminaireBanner from "../../assets/banners/certificat.jpg";
import {useLocation} from 'react-router-dom';

const WebinaireDetail = () => {
    let location = useLocation();
    const webinaire = location.state.webinaire
    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <>
            <Banner image={seminaireBanner} title={webinaire.theme} subdescription={webinaire.date} description={webinaire?.lieu} webinaire={webinaire?.theme}/>
            <section className="m-12">
                <p className="text-center text-2xl mb-5 font-bold">Animé par </p>
                <div className="flex items-center flex-col p-2 mb-7">
                    <div>
                        <img
                            alt="DG"
                            src={webinaire.animateurImage}
                            className="inline-block h-72 w-72 rounded-full ring-4 ring-secondary"
                        />
                    </div>

                    <span className="font-medium text-primary text-xl text-center mt-4">{webinaire.animateurName}</span>
                    <span className="text-[9px] mt-4 font-medium text-gray-900 text-center mb-2 text-xl">{webinaire.animateurFunction}</span>

                </div>
            </section>
        </>
    );
};

export default WebinaireDetail;
