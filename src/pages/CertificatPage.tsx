import React from 'react';
import certificatBanner from "../assets/banners/certificat.jpg";
import com from '../assets/certifications/com.png'
import diplomatie from '../assets/certifications/diplomatie.png'
import finance from '../assets/certifications/finance.png'
import marche from '../assets/certifications/marche.png'
import Banner from "../components/layout/Banner";
import {CertificatItem} from "../components/CertificatItem";

const CertificatPage = () => {
    return (
        <>
            <Banner image={certificatBanner} title={"Nos certificats et MBA"}
                    description={"SONNI GROUP, organisme de formation professionnelle continue reconnu du droit sénégalais. Nous mettons à votre disposition des certifications et MBA conçus par notre comité pédagogique composé d’experts praticiens, répondants aux critères d’excellences."}/>

            <CertificatItem title={"Programme de certification communication politique et influence."} image={com} desc={"La formation en communication politique et influence vise à fournir aux participants les outils et les\n" +
                "compétences nécessaires pour naviguer efficacement dans le paysage politique contemporain. La\n" +
                "communication politique est l'\n" +
                "art de transmettre des messages et des idées à des fins politiques.\n" +
                "Elle englobe divers moyens de diffusion : les discours, les débats, les médias traditionnels et\n" +
                "numériques, ainsi que les campagnes publicitaires"} pos="left" program={require("../assets/certifications/communication.pdf")}  />

            <CertificatItem title={"Programme de Certification Diplomatie économique et diplomatie d’affaires"} image={diplomatie} desc={"La formation en diplomatie économique et diplomatie d’affaires vise à\n" +
                "doter les participants des compétences et des connaissances\n" +
                "nécessaires pour naviguer efficacement dans le monde des affaires\n" +
                "internationales et des relations économiques entre pays. La Diplomatie\n" +
                "économique représente la fonction de politique étrangère qui fait la\n" +
                "liaison entre les démarches de politique étrangère et l’aisance\n" +
                "économique des citoyens d’un pays et a comme objectif l’utilisation de\n" +
                "tous les instruments de politique étrangère en vue de la promotion des\n" +
                "intérêts économiques des entrepreneurs et de l’État."} pos="right" program={require("../assets/certifications/diplomatie.pdf")}  />


            <CertificatItem title={"Programme de certification Responsable Administratif et financier"} image={finance}
                            desc={"Le responsable administratif et financier (RAF) est un poste stratégique au sein d’une entreprise. Le service administratif et financier est le pôle qui se charge de définir et de " +
                                "conduire l’organisation interne et la budgétisation d’une entreprise. C’est l’un des services les plus importants au sein d’une société."}
                            pos="left" program={require("../assets/certifications/finance.pdf")}  />

            <CertificatItem title={"Programme de certification Responsable de passation de marchés publics et partenariat publics privés."} image={marche} desc={"Ce programme de certification offre une couverture\n" +
                "complète de l'\n" +
                "ensemble des compétences techniques,\n" +
                "procédurales et commerciales nécessaires à la bonne\n" +
                "mise en œuvre de chaque étape du processus de\n" +
                "passation de marchés et de l’établissement des\n" +
                "partenariats publics privés."} pos="right" program={require("../assets/certifications/marche.pdf")}  />
        </>
    );
};

export default CertificatPage;
