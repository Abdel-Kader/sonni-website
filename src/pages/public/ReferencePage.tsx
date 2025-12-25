import React, {useEffect} from 'react';

const ReferencePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-32">
            <div className="mx-auto lg:mx-0 mb-10">
                <h2 className="text-[35px] font-bold tracking-tight text-center text-secondary">LE CABINET </h2>
                <p className="mt-6 text-xl leading-loose text-center">
                    SONNI Group Advisory est un cabinet institutionnel panafricain spécialisé dans :
                </p>

                <p className="mt-6 text-xl font-medium leading-loose text-center">
                    Stratégie & intelligence économique <br/>
                    • Communication, relations publiques & influence <br/>
                    • Diplomatie d’affaires & investissement <br/>
                    • Formation exécutive & leadership <br/>
                    • Organisation d’événements stratégiques continentaux <br/>
                </p>


                <p className="mt-8 text-xl leading-loose text-center">
                    Implanté à Dakar, le cabinet agit au cœur des dynamiques politiques, économiques et diplomatiques du continent,
                    en mobilisant un réseau étendu d’institutions publiques, d’ambassades, d’agences, d’entreprises et de leaders africains.
                </p>

            </div>
        </section>
    )
};

export default ReferencePage;
