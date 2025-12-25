import React, {useEffect} from 'react';

const ReferencePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-32">
            <div className="mx-auto lg:mx-0 mb-10">
                <h2 className="text-[35px] font-bold tracking-tight text-center text-secondary">SONNI INTELLIGENCE & STRATEGY</h2>
                <p className="mt-6 text-xl leading-loose text-center">
                    Ce pôle développe l’intelligence décisionnelle de SONNI.

                    Il produit des notes d’analyse, des briefings stratégiques, des études sectorielles, une veille
                    économique et géopolitique, ainsi que l’Indice SONNI d’Attractivité Africaine, un outil unique pour
                    mesurer la stabilité, les risques et les opportunités des pays africains.
                </p>

                <h4 className='text-xl'>Nos services :</h4>

                <p className="mt-6 text-xl font-medium leading-loose">
                    • Notes pays & analyses sectorielles <br/>
                    • Veille stratégique & cartographie des risques <br/>
                    • Intelligence économique & politique <br/>
                    • Études d’impact & recommandations institutionnelles <br/>
                    • SONNI Insights (abonnements) <br/>
                    • Outils SONNI : indice, tableaux de bord, grilles d’évaluation <br/>

                </p>

            </div>
        </section>
    )
};

export default ReferencePage;
