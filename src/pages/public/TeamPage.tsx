import React, {useEffect} from 'react';

const TeamPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-32">
            <div className="mx-auto lg:mx-0 mb-10">
                <h2 className="text-[35px] font-bold tracking-tight text-center text-secondary">NOTRE EQUIPE</h2>
                <p className="mt-6 text-xl leading-loose text-center">
                    Notre équipe rassemble des profils hautement qualifiés en stratégie, relations internationales, communication, intelligence économique, diplomatie, gestion de projets et formation exécutive.
                </p>

                <p className="mt-6 text-xl font-medium leading-loose text-center">
                    Ensemble, nous portons la vision SONNI : bâtir un leader panafricain du conseil et de l’influence.
                </p>
            </div>
            {/*<Avatar*/}
            {/*    title="Mahamadou Chaïbou MAIGA"*/}
            {/*    img={dg}*/}
            {/*    description="PhD. C en relations internationales et diplomatie d’affaires, Écrivain, Juriste, Chercheur ZLECAF, Conférencier"*/}
            {/*    position="Directeur Exécutif de SONNI GROUP"*/}
            {/*/>*/}
            {/*<div className="grid lg:grid-cols-2 grid-cols-1">*/}
            {/*    /!* <Avatar*/}
            {/*        title="Mahamadou Chaïbou MAÏGA"*/}
            {/*        img={dg}*/}
            {/*        description="Ph.D. C En Relations internationales et diplomatie d’affaires, Écrivain, Chercheur ZLECAF, Conférencier"*/}
            {/*        position="Directeur général du Cabinet SONNI"*/}
            {/*    /> *!/*/}
            {/*    <Avatar*/}
            {/*        title="Aminata SALL"*/}
            {/*        img={assistant}*/}
            {/*        description="Diplômée en comptabilité de l’université Cheikh Anta DIOP (IFACE)"*/}
            {/*        position="Assistante de Direction et financière de SONNI GROUP"*/}
            {/*    />*/}

            {/*    <Avatar*/}
            {/*        title="Nourroudine ALFARI"*/}
            {/*        img={responTraining}*/}
            {/*        description="Diplômé du Master en Audit &amp; Comptabilité du CESAG"*/}
            {/*        position="Responsable administratif et financier de SONNI GROUP"*/}
            {/*    />*/}

            {/*    <Avatar*/}
            {/*        title="Nazir CHEIKH"*/}
            {/*        img={responInnov}*/}
            {/*        description="Ingénieur en transformation et innovation de l’École Supérieure Multinationale des Télécommunications (ESMT)"*/}
            {/*        position="Responsable de la recherche et de l’innovation de SONNI GROUP"*/}
            {/*    />*/}
            {/*    <Avatar*/}
            {/*        title="Aboubacar CHAIBOU"*/}
            {/*        img={assistantProg}*/}
            {/*        description="Diplômé de l’Université de TÉTOUAN en QHSE"*/}
            {/*        position="Assistant de la recherche et de l’innovation de SONNI GROUP"*/}
            {/*    />*/}
            {/*</div>*/}


            {/*<Partners />*/}

        </section>
    );
};

export default TeamPage;
