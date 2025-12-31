import React, {useEffect} from 'react';
import {TestimonialItem} from "../../components/home/TestimonialItem";
import Testimonial from "../../components/home/Testimonial";

const Forum = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-32">
            <div className="mx-auto lg:mx-0 mb-10">
                <p className="mt-6 text-xl leading-loose text-center">
                    L’Africa Invest & Integration Forum est le plus grand forum africain porté
                    sur la business diplomacy, l’investissement & l’intégration économique du
                    continent.
                    Réunissant gouvernements, ambassadeurs, diplomates, dirigeants,
                    investisseurs et entrepreneurs, il constitue un espace unique de networking
                    stratégique, de deal-making et de réflexion continentale.
                </p>
                <h2 className="text-[30px] mt-12 font-bold tracking-tight text-center animate-slidein500  text-secondary">Témoignages</h2>
                <Testimonial/>

                <h2 className="text-[30px] mt-12 font-bold tracking-tight text-center animate-slidein500  text-secondary">Appel à partenariat</h2>
                <p className="mt-6 text-xl leading-loose text-center">
                    Rejoignez les partenaires institutionnels et corporate du Africa Invest &
                    Integration Forum et contribuez à construire une plateforme continentale au
                    service de l’investissement et de l’intégration africaine.
                    <br/>
                    <button className="bg-secondary h-10 px-10 rounded-md">
                        Devenir Partenaire
                    </button>
                </p>
            </div>
        </section>
    )
};

export default Forum;
