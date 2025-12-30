import React, {useEffect} from 'react';

const BusDiploPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-32">
            <div className="mx-auto lg:mx-0 mb-10">
                <h2 className="text-[35px] font-bold tracking-tight text-center text-secondary">BUSINESS DIPLOMACY & PUBLIC RELATIONS </h2>
                <p className="mt-6 text-xl leading-loose text-center">
                    Ce pôle est au cœur de la diplomatie économique et des relations d’influence.

                    Nous accompagnons dirigeants, institutions, ambassades et entreprises dans leur positionnement, leurs
                    relations institutionnelles, leur réseau diplomatique et leurs stratégies d’investissement.

                </p>

                <h4 className='text-xl'>Nos services :</h4>

                <p className="mt-6 text-xl font-medium leading-loose">
                    • Diplomatie d’affaires & relations institutionnelles <br/>
                    • Intermédiation & facilitation d’investissement <br/>
                    • Stratégies d’influence & relations publiques <br/>
                    • Positionnement de dirigeants & storytelling stratégique <br/>
                    • Programmes de visibilité et de networking VIP <br/>
                </p>

            </div>
        </section>
    )
};

export default BusDiploPage;
