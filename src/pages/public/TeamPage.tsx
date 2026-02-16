import React, {useEffect} from 'react';
import {ServiceItem} from "../../components/home/ServiceItem";
import {Trans, useTranslation} from "react-i18next";
import Banner from "../../components/layout/Banner";
import img3 from '../../assets/galery/img3.png'


const TeamPage = () => {

    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <>
            <Banner image={img3} title={"SONNY GROUP ADVISORY"}
                    description={"Cabinet panafricain de conseil stratégique, d’intelligence, de communication et d’accompagnement des décideurs publics et privés en Afrique "}/>


            <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-5 pb-14">
            <div className="mx-auto lg:mx-0 mb-10">
                <h2 className="text-[35px] font-bold tracking-tight text-center text-secondary">Leadership</h2>
                <p className="mt-6 text-xl leading-loose">
                    {t('about.leadership')}
                </p>
        <h2 className="text-[35px] font-bold tracking-tight text-center mt-12 text-secondary">Governance &amp; Advisory Network</h2>
                <p className="mt-6 text-xl leading-loose ">
                    {t('about.governance')}
                    <br/>

                    <Trans i18nKey="about.governance_list" />
                    <br/>
                    {t('about.governance_text')}
                </p>

                <h2 className="text-[35px] font-bold tracking-tight text-center mt-12 text-secondary">Notre approche</h2>
                <p className="mt-6 text-xl leading-loose ">
                    SONNI Group Advisory privilégie une approche :<br/>
                    - sélective, orientée vers des partenaires et clients à fort impact,<br/>
                    - stratégique, centrée sur la décision, l’influence et le long terme,<br/>
                    - institutionnelle, conforme aux standards des organisations<br/>
                    publiques, diplomatiques et internationales.       <br/>
                </p>

                <h2 className="text-[35px] font-bold tracking-tight text-center mt-12 text-secondary">Notre équipe opérationnelle</h2>


                <p className="mt-6 mb-12 text-xl leading-loose ">
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

                <div className="lg:flex">
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
            </>
    );
};

export default TeamPage;
