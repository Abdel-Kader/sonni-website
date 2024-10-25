import React from 'react';
import { Carousel } from "flowbite-react";
import {TestimonialItem} from "./TestimonialItem";
const Testimonial = () => {
    return (

        <div className="h-56 mt-7 mb-7 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel  slideInterval={1000} >
                <TestimonialItem
                    name="Gisèle Catherine MANGA Dr en pharmacie"
                    position="Responsable Logistique  (Sénégal)"
                    message="Félicitations pour le choix des professeurs, très compétents et dynamiques. Enseignements reçus, répondant à nos attentes. Merci au Cabinet SONNI. Personnels très disponibles et réactifs."
                />
                <TestimonialItem
                    name="Rubben UMBA "
                    position="Responsable logistique de l’action humanitaire"
                    message="Votre réactivité, disponibilité à nous accompagner nous touche. Merci beaucoup au Cabinet SONNI. "
                />
                <TestimonialItem
                    name="Yacouba ASKOU"
                    position="Agent Humanitaire"
                    message="Merci beaucoup au Cabinet SONNI, à son personnel, pour la qualité de la formation. Nous sommes vraiment sorti grandi à l’issue de c programme de certification de deux mois. Que Dieu vous récompense"
                />
                <TestimonialItem
                    name="Fanta BALDÉ"
                    position="Assistante au service Régional de Pêche de Dakar"
                    message="Je suis très contente de la formation
d’assistante de direction passée à SONNI qui m’a permis d’avoir une nouvelle opportunité. Fanta BALDÉ - Assistante au service Régional de Pêche de Dakar Je suis très contente de la formation d’assistante de direction passée à SONNI qui m’a permis d’avoir une nouvelle opportunité. "
                />
                <TestimonialItem
                    name="Abdourahmane SAMB"
                    position="Entrepreneur"
                    message="Je suis très satisfait de la certification en gestion de stock passée
au cabinet SONNI avec un formateur compétent. Ce qui m’a permis de maîtriser la pratique. Je remercie aussi M. Maiga pour son cours en développement personnel. "
                />
                <TestimonialItem
                    name="Abdoul Amadou BA"
                    position="Gestionnaire de Stock à H&D Industrie Chère"
                    message="je remercie de passage toute
l’équipe du Cabinet SONNI. Grâce à la certification passée à SONNI, j’ai pu saisir une nouvelle opportunité. Remerciement spécial à M. MAIGA. "
                />
                <TestimonialItem
                    name="Frédéric KANFANY"
                    position="fonctionnaire au TER Dakar "
                    message="C’est avec un grand plaisir que j’ai découvert le
Cabinet SONNI où j’ai pu faire une formation certifiante en comptabilité. Remerciement spécial au Directeur M. Maiga et au grand formateur M. Idrissa qui nous a appris à mieux cerner les contours de SAGE."
                />
                <TestimonialItem
                    name="Adama DIONE"
                    position="Comptable"
                    message="Ce fut une belle expérience la formation passée au Cabinet SONNI. Avec des formateurs hautement qualifiés. Nous remercions M. Maiga avec son équipe."
                />
                <TestimonialItem
                    name="Modou SARR"
                    position="Gendarme/ Chef Comptable magasin d’approvisionnement "
                    message="Je tenais à remercier le cabinet SONNI pour la bonne formation en gestion de stock que j'ai acquise là-bas, actuellement, chef comptable Magasin approvisionnement des pièces détachées pour les véhicules automobiles, acquise grâce à la formation. Merci beaucoup de m'avoir donné cette chance"
                />
                <TestimonialItem
                    name="Moussa CAMARA "
                    position="Manager de commerce Auchan Sénégal"
                    message="La formation a été intéressante et instructive.
Votre expertise, votre clarté d'explication et votre disponibilité ont rendu l'apprentissage particulièrement agréable et stimulant la formation. Je suis enchanté d'avoir eu l'opportunité de participer à cette formation."
                />
                <TestimonialItem
                    name="Mme KAKPO"
                    position="Entrepreneur"
                    message="Je suis vraiment satisfaite de ma formation passée à votre cabinet.
Actuellement ça m’aide beaucoup dans la gestion de mes produits que je vends en ligne. Aussi, en tant qu’assistante administrative en ligne."
                />
            </Carousel>
        </div>

    );
};

export default Testimonial;
