import React, {useEffect, useLayoutEffect} from 'react';
import certificatBanner from "../assets/banners/certificat.jpg";
import com from '../assets/certifications/com.png'
import diplomatie from '../assets/certifications/diplomatie.png'
import finance from '../assets/certifications/finance.png'
import marche from '../assets/certifications/marche.png'
import mbaManage from '../assets/certifications/mba-management.png'
import mbaCom from '../assets/certifications/mba-com-influence.png'
import crise from '../assets/certifications/crise.png'
import logistique from '../assets/certifications/logistique.png'
import sante from '../assets/certifications/sante.png'
import protocole from '../assets/certifications/protocole.png'
import economie from '../assets/certifications/economie.png'
import bienEtre from '../assets/certifications/bien-etre.png'
import suivi from '../assets/certifications/suivi.png'

import Banner from "../components/layout/Banner";
import {CertificatItem} from "../components/CertificatItem";

const CertificatPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);
    return (
        <>
            <Banner image={certificatBanner} title={"Nos certificats et MBA"}
                    description={"SONNI GROUP, organisme de formation professionnelle continue reconnu du droit sénégalais. Nous mettons à votre disposition des certifications et MBA conçus par notre comité pédagogique composé d’experts praticiens, répondants aux critères d’excellences."}/>
            <section className="mx-auto mt-12">
                <h3 className="font-bold text-center max-sm:m-3 max-sm:text-xl text-primary text-2xl pb-[20px] underline underline-offset-8 decoration-4 decoration-primary">Les
                    certificats du Centre d’Études en Diplomatie et Management – SONNI</h3>

                <CertificatItem title={"Programme de certification communication politique et influence."} image={com}
                                desc={"La formation en communication politique et influence vise à fournir aux participants les outils et les\n" +
                                    "compétences nécessaires pour naviguer efficacement dans le paysage politique contemporain. La\n" +
                                    "communication politique est l'\n" +
                                    "art de transmettre des messages et des idées à des fins politiques.\n" +
                                    "Elle englobe divers moyens de diffusion : les discours, les débats, les médias traditionnels et\n" +
                                    "numériques, ainsi que les campagnes publicitaires"} pos="left"
                                program={require("../assets/certifications/communication.pdf")}/>

                <CertificatItem title={"Programme de Certification Diplomatie économique et diplomatie d’affaires"}
                                image={diplomatie}
                                desc={"La formation en diplomatie économique et diplomatie d’affaires vise à\n" +
                                    "doter les participants des compétences et des connaissances\n" +
                                    "nécessaires pour naviguer efficacement dans le monde des affaires\n" +
                                    "internationales et des relations économiques entre pays. La Diplomatie\n" +
                                    "économique représente la fonction de politique étrangère qui fait la\n" +
                                    "liaison entre les démarches de politique étrangère et l’aisance\n" +
                                    "économique des citoyens d’un pays et a comme objectif l’utilisation de\n" +
                                    "tous les instruments de politique étrangère en vue de la promotion des\n" +
                                    "intérêts économiques des entrepreneurs et de l’État."} pos="right"
                                program={require("../assets/certifications/diplomatie.pdf")}/>


                <CertificatItem title={"Programme de certification Responsable Administratif et financier"}
                                image={finance}
                                desc={"Le responsable administratif et financier (RAF) est un poste stratégique au sein d’une entreprise. Le service administratif et financier est le pôle qui se charge de définir et de " +
                                    "conduire l’organisation interne et la budgétisation d’une entreprise. C’est l’un des services les plus importants au sein d’une société."}
                                pos="left" program={require("../assets/certifications/finance.pdf")}/>

                <CertificatItem
                    title={"Programme de certification Responsable de passation de marchés publics et partenariat publics privés."}
                    image={marche} desc={"Ce programme de certification offre une couverture\n" +
                    "complète de l'\n" +
                    "ensemble des compétences techniques,\n" +
                    "procédurales et commerciales nécessaires à la bonne\n" +
                    "mise en œuvre de chaque étape du processus de\n" +
                    "passation de marchés et de l’établissement des\n" +
                    "partenariats publics privés."} pos="right"
                    program={require("../assets/certifications/marche.pdf")}/>

                <CertificatItem
                    title={"Programme de certification en gestion de crise"}
                    image={crise}
                    desc={"Le certificat en gestion de crise est un programme de formation conçu pour fournir aux\n" +
                        "professionnels les compétences nécessaires pour anticiper, gérer et évaluer des\n" +
                        "situations de crise. La présente formation vise à faire réfléchir et outiller les personnes\n" +
                        "participantes afin de les aider à mieux évaluer les facteurs influençant la crise ; utiliser\n" +
                        "des attitudes collaboratrices favorisant la désescalade ; planifier avec la personne un\n" +
                        "plan de crise ; et mettre en action des post ventions adaptées. Cette formation courte\n" +
                        "vise à découvrir les fondamentaux de la gestion de crise et de la communication de\n" +
                        "crise. Elle se veut très opérationnelle et donne les clés concrètes et immédiatement\n" +
                        "applicables pour mettre en place un dispositif de crise, organiser et faire vivre une\n" +
                        "cellule de crise et gérer la communication de crise."} pos="left"
                    program={require("../assets/certifications/crise.pdf")}/>

                <CertificatItem
                    title={"Programme de certification Responsable Logistique de l’Action Humanitaire"}
                    image={logistique}
                    desc={"Le Responsable logistique de l’action humanitaire opère dans des contextes d’urgence, de post-urgence et de développement. " +
                        "Les crises telles que les conflits, les catastrophes naturelles et sanitaires, ou les conséquences du changement climatique, " +
                        "le conduisent à concevoir et mettre en œuvre des solutions agiles et adaptées aux contextes d’intervention. La première grande étape de son intervention consiste à mobiliser les infrastructures et les équipements au service du fonctionnement de la mission. Il mobilise également les équipements techniques tels que télécoms, véhicules, informatique, chaine du froid, biomédical. Dans le cadre de son activité de supervision et d’organisation de la chaîne d' approvisionnement d’une mission humanitaire, le Responsable logistique supervise les achats de la mission au niveau régional et national"}
                    pos="right"
                    program={require("../assets/certifications/logistique.pdf")}/>

                <CertificatItem
                    title={"Programme de certification Management des Etablissements de Santé"}
                    image={sante}
                    desc={"Comprendre les principes fondamentaux du management, y compris la gestion des ressources humaines, la gestion " +
                        "financière et la gestion des opérations;  Apprendre à mettre en place des processus qui garantissent " +
                        "la qualité des services de santé; Développer des stratégies pour" +
                        " faire face aux évolutions du secteur de la santé et aux besoins des patients…"}
                    pos="left"
                    program={require("../assets/certifications/sante.pdf")}/>

                <CertificatItem
                    title={"Programme de certification Protocole et Pratiques Diplomatique"}
                    image={protocole}
                    desc={"La formation en protocole et pratique diplomatique est conçue pour fournir aux participants une compréhension approfondie des " +
                        "normes, des rituels et des pratiques liés à la diplomatie et aux relations internationales. En politique internationale , le protocole " +
                        "est l' étiquette de la diplomatie des affaires d' État . C’est une règle qui décrit la manière dont une activité doit être menée, en " +
                        "particulier dans le domaine de la diplomatie. La formation certifiante en Protocole Diplomatique est conçue pour immerger les " +
                        "participants dans les subtilités et les normes qui régissent les interactions officielles entre les États, les organisations " +
                        "internationales et leurs représentants."}
                    pos="right"
                    program={require("../assets/certifications/protocole.pdf")}/>

                <CertificatItem
                    title={"Programme de certification en Intelligence Economique"}
                    image={economie}
                    desc={"La formation en intelligence économique vise à fournir aux participants les compétences nécessaires pour collecter, analyser " +
                        "et utiliser des informations stratégiques afin de soutenir la prise de décision dans un environnement concurrentiel. " +
                        "L’intelligence économique est l'ensemble des activités coordonnées de collecte, de traitement et de diffusion de l'information " +
                        "utile aux acteurs économiques, en vue de son exploitation. On peut y ajouter les actions d'influence et de notoriété ainsi que " +
                        "celles liées à la protection de l'information. "}
                    pos="left"
                    program={require("../assets/certifications/economie.pdf")}/>

                <CertificatItem
                    title={"Programme de certification en Santé et Bien-être"}
                    image={bienEtre}
                    desc={"La certification en santé et bien-être est un programme qui vise à former des " +
                        "professionnels capables de promouvoir la santé et le bien-être dans divers contextes." +
                        "Cette formation a pour objectif d’aider les professionnels à repérer, analyser et utiliser " +
                        "les concepts, méthodes et interventions permettant de développer le bien-être et la " +
                        "bientraitance dans les organisations et les organismes universitaire. Il fournit un " +
                        "ensemble de points d’appui pour concevoir des interventions et développer des pratiques de prévention et de promotion de la santé et du bien-être."}
                    pos="right"
                    program={require("../assets/certifications/bien-etre.pdf")}/>
                <CertificatItem
                    title={"Programme de certification en Suivi Evaluation et Programme de Développement"}
                    image={suivi}
                    desc={"Afin de mesurer le succès et de rendre compte des résultats, les professionnels de la coopération pour le développement et\n" +
                        "les responsables du secteur public créent des systèmes de suivi-évaluation. Des systèmes qui permettent de tirer des leçons de l'expérience pour soutenir " +
                        "l'apprentissage organisationnel. Apprendre pour s'méliorer, mais surtout pour améliorer la\n" +
                        "performance des programmes et des projets. Dans ce contexte, la certification suivi et l'évaluation deviennent conjointement\n" +
                        "une fonction essentielle à ancrer dans les organisations, dans les programmes et les projets. D’où l’importance de cette\n" +
                        "certification en suivi évaluation et programme de développement. En effet, les organisations internationales, ainsi que celles\n" +
                        "du secteur public, investissent depuis plusieurs années dans la création de structures chargées du suivi-évaluation."}
                    pos="left"
                    program={require("../assets/certifications/suivi.pdf")}/>


            </section>


            <section className="mx-auto mt-12">
                <h3 className="font-bold text-center text-primary text-2xl pb-[20px] underline underline-offset-8 decoration-4 decoration-primary">Les
                    Exécutive MBA de SONNI GROUP</h3>
                <h5 className="font-bold text-center pb-[20px] w-2/3 ml-[15%]">
                    À SONNI, nous vous proposons deux programmes de MBA :
                    Exécutive MBA EN DIPLOMATIE, RELATIONS INTERNATIONALES ET COMMUNICATIONS D’INFLUENCE
                    Exécutive MBA EN MANAGEMENT DES RISQUES FINANCIERS ET STRATÉGIES D’INVESTISSEMENT.
                </h5>
                <h5 className="font-bold text-center pb-[20px] w-2/3 ml-[15%]">
                    Tous conçus par notre comité pédagogique sur le format E-learning ( en ligne) pour répondre aux
                    besoins urgents de la formation continue sur le continent.

                </h5>

                <CertificatItem title={"MBA en Management des Risques Financiers et Stratégies d’Investissement"}
                                image={mbaManage}
                                desc={"Le MBA en management des risques financiers et stratégies d’investissement prépare des experts à évaluer, anticiper et gérer les risques dans un environnement financier complexe. Ce programme combine des connaissances approfondies en finance, en évaluation des risques et en stratégie d’investissement, avec des compétences pratiques en gestion de portefeuille et en conformité réglementaire. Les diplômés sont ainsi armés pour optimiser le rendement des investissements tout en maîtrisant les risques pour évoluer dans des institutions financières et multinationales."}
                                pos="left"
                                program={require("../assets/certifications/mba-com-influence.pdf")}/>

                <CertificatItem
                    title={"Exécutive MBA E-learning en Diplomatie, Relations Internationales et Communication d’Influence"}
                    image={mbaCom}
                    desc={"Le MBA en diplomatie, relations internationales et communication d’influence forme des leaders capables de naviguer dans les complexités géopolitiques et de développer des stratégies de communication mpactantes. Ce programme allie théorie et pratique pour maîtriser la diplomatie interculturelle, l’intelligence stratégique et l’art de la négociation. Les diplômés acquièrent ainsi des compétences essentielles pour nfluencer les décisions à l’échelle internationale et bâtir des réseaux durables dans un contexte globalisé."}
                    pos="right"
                    program={require("../assets/certifications/mba-management.pdf")}/>


            </section>

            <section className="m-12 mb-24">
                <h3 className="font-bold text-center text-primary text-2xl pb-[20px] underline underline-offset-8 decoration-4 decoration-primary">Les
                    autres certificats de SONNI ACADEMY</h3>

                <div className="grid lg:grid-cols-2 gap-4 mb-10">
                    <div className="flex flex-col ml-12">
                        <h3 className="font-bold text-xl mb-5 underline underline-offset-8 decoration-4 decoration-primary">Gestion</h3>

                        <span className="font-medium text-primary text-justify mt-4">
                            Assistant Comptable et financier
                        </span>
                        <span className="font-medium text-primary text-justify mt-4">
                            Assistant de Direction
                        </span>
                        <span className="font-medium text-primary text-justify mt-4">
                            Gestion de Caisse
                        </span>
                        <span className="font-medium text-primary text-justify mt-4">
                            Gestion de Stock
                        </span>
                        <span className="font-medium text-primary text-justify mt-4">
                            Etc.
                        </span>
                    </div>
                    <div className="flex flex-col mr-20 max-sm:ml-12 max-sm:mt-7">
                        <h3 className="font-bold text-xl mb-5 underline underline-offset-8 decoration-4 decoration-primary">Paramédical</h3>

                        <span className="font-medium text-primary text-justify mt-4">
                            Auxiliaire de Pharmacie
                        </span>
                        <span className="font-medium text-primary text-justify mt-4">
                            Délégation médicale
                        </span>
                        <span className="font-medium text-primary text-justify mt-4">
                            Secrétariat médical
                        </span>
                    </div>
                </div>

                <div className="flex flex-row justify-center">
                    <div className="flex flex-row content-center bg-primary w-48 rounded mt-10 mb-7 border-t-gray-300 border justify-center items-center h-12 ">
                        <a rel="noreferrer"
                            href={`mailto:contact@sonni-group.com?subject=autres certificats de SONNI ACADEMY`}
                            target='_blank'
                            className=" text-md text-white text-center">Contacter un conseiller
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CertificatPage;
