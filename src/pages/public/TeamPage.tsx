import React, {useEffect} from 'react';
import {ServiceItem} from "../../components/home/ServiceItem";

const TeamPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-32">
            <div className="mx-auto lg:mx-0 mb-10">
                <h2 className="text-[35px] font-bold tracking-tight text-center text-secondary">Leadership</h2>
                <p className="mt-6 text-xl leading-loose text-center">
                    SONNI Group Advisory est fondé et dirigé par Mahamadou Chaïbou Maïga,
                    expert en relations internationales, diplomatie d’affaires et intelligence
                    stratégique, avec une spécialisation sur l’intégration économique africaine et
                    les dynamiques d’investissement sur le continent.
                    Il intervient depuis plusieurs années à l’interface entre États, institutions
                    diplomatiques, entreprises, investisseurs et organisations régionales, sur des
                    enjeux liés à la géopolitique, à l’attractivité économique, à la ZLECAf, aux
                    stratégies d’influence et au positionnement international des acteurs
                    africains.
                    Il est également Président fondateur de l’Africa Invest &amp; Integration Forum,
                    plateforme panafricaine de dialogue stratégique réunissant décideurs publics,
                    diplomates, dirigeants d’entreprises et investisseurs autour des enjeux
                    d’investissement, d’intégration régionale et de diplomatie économique.
                </p>
        <h2 className="text-[35px] font-bold tracking-tight text-center mt-12 text-secondary">Governance &amp; Advisory Network</h2>
                <p className="mt-6 text-xl leading-loose text-center">

                    SONNI Group Advisory s’appuie sur un réseau d’experts, de consultants
                    sectoriels et de partenaires institutionnels en Afrique et à l’international,
                    mobilisés selon les missions et les besoins spécifiques des clients.
                    Cette organisation en plateforme de conseil stratégique permet à SONNI
                    <br/>
                    Group Advisory de combiner :  <br/>
                    - expertise intellectuelle et analytique,  <br/>
                    - compréhension fine des enjeux africains,  <br/>
                    - réseau diplomatique et économique de haut niveau,  <br/>
                    - capacité d’intervention multi-pays et multi-secteurs.  <br/>
                    <br/>
                    La gouvernance de SONNI Group Advisory est fondée sur les principes de
                    rigueur analytique, indépendance intellectuelle, confidentialité, impact
                    stratégique et création de valeur durable pour les institutions et organisations
                    accompagnées.
                </p>

                <h2 className="text-[35px] font-bold tracking-tight text-center mt-12 text-secondary">Notre approche</h2>
                <p className="mt-6 text-xl leading-loose text-center">
                    SONNI Group Advisory privilégie une approche :<br/>
                    - sélective, orientée vers des partenaires et clients à fort impact,<br/>
                    - stratégique, centrée sur la décision, l’influence et le long terme,<br/>
                    - institutionnelle, conforme aux standards des organisations<br/>
                    publiques, diplomatiques et internationales.       <br/>
                </p>

                <h2 className="text-[35px] font-bold tracking-tight text-center mt-12 text-secondary">Notre équipe opérationnelle</h2>


                <p className="mt-6 mb-12 text-xl leading-loose text-center">
                    SONNI Group Advisory s’appuie sur une équipe opérationnelle agile et
                    pluridisciplinaire, chargée de la mise en œuvre des activités de
                    sensibilisation, de conseil, de communication, de formation et de gestion de
                    projets stratégiques.
                    Placée sous la supervision directe de la Direction Exécutive, l’équipe
                    opérationnelle contribue à l’exécution des missions du cabinet, au
                    déploiement de ses programmes et à l’accompagnement de ses partenaires
                    institutionnels, diplomatiques et économiques.
                    Membres de l’équipe opérationnelle
                </p>

                <div className="flex">
                    <ServiceItem
                        bgColor={'#fff'}
                        color={'#F39200'}
                        title={"Fatouma DOUCOURÉ"}
                        description={'Directrice administrative et financière'}
                    />
                    <ServiceItem
                        bgColor={'#fff'}
                        color={'#F39200'}
                        title={"Houleye SY"}
                        description={'Chargée du développement et des partenariats'}
                    />
                    <ServiceItem
                        bgColor={'#fff'}
                        color={'#F39200'}
                        title={"Aïssatou Mbaye"}
                        description={'Chargée de la communication digitale et visuelle'}
                    />
                    <ServiceItem
                        bgColor={'#fff'}
                        color={'#F39200'}
                        title={"Abdourahamane AKILOU"}
                        description={'Chargé de mission et de programmes'}
                    />
                </div>
                <p className="mt-6 text-xl font-medium leading-loose text-center">
                    L’équipe opérationnelle agit en étroite collaboration avec la Direction
                    Exécutive afin d’assurer la cohérence stratégique, la qualité des livrables et
                    l’impact des actions menées par SONNI Group Advisory.
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
