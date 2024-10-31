import React from 'react';
import { Carousel } from "flowbite-react";
import {TestimonialItem} from "./TestimonialItem";
const Testimonial = () => {

    return (

        <div className="h-56 mt-10 mb-20 sm:h-64 xl:h-80 2xl:h-96">
            <h2 className="text-xl ml-24 mb-10 font-bold tracking-tight text-primary sm:text-2xl animate-slidein500 opacity-0">LES TEMOIGNAGES</h2>

            <Carousel
                slide={false}
                leftControl={
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50"
                                                      height="50" viewBox="0 0 512 512" >
                        <path fill="#f6b218"
                              d="M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z"></path>
                        <path fill="#FFF"
                      d="M395.6,225.8c-65.1,0-130.3,0-195.4,0c11.6-11.6,23.2-23.2,34.8-34.8c26.8-26.8-14.9-68.2-41.8-41.3c-28.3,28.3-56.6,56.6-84.9,84.9c-11.4,11.4-11.1,30.3,0.2,41.5c28.3,28.3,56.6,56.6,84.9,84.9c26.8,26.8,68.2-14.9,41.3-41.8c-11.5-11.5-23.1-23.1-34.6-34.6c65,0,130,0,195,0C433.1,284.6,433.4,225.8,395.6,225.8z"></path>
                    </svg>
                }
                rightControl={
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50"
                                       viewBox="0 0 512 512">
                        <path fill="#f6b218"
                              d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"></path>
                        <path fill="#FFF"
                              d="M408.8,245.5l-141.2-86.7c-3.9-2.4-8.9-2.5-12.9-0.3c-4,2.2-6.5,6.5-6.5,11.1v172.7c0,4.6,2.5,8.8,6.5,11.1c1.9,1.1,4.1,1.6,6.2,1.6c2.3,0,4.6-0.6,6.6-1.9l141.2-86c3.8-2.3,6.1-6.4,6.1-10.8C414.9,251.9,412.6,247.8,408.8,245.5z"></path>
                        <path fill="#FFF"
                      d="M343.5,229.5H109.2c-6.7,0-12,5.4-12,12v28.9c0,6.7,5.4,12,12,12h234.3c6.7,0,12-5.4,12-12v-28.9C355.6,234.9,350.2,229.5,343.5,229.5z"></path>
                    </svg>
                }>
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
                    message="Je suis très contente de la formation d’assistante de direction passée à SONNI qui m’a permis d’avoir une nouvelle opportunité. Fanta BALDÉ - Assistante au service Régional de Pêche de Dakar Je suis très contente de la formation d’assistante de direction passée à SONNI qui m’a permis d’avoir une nouvelle opportunité. "
                />
                <TestimonialItem
                    name="Abdourahmane SAMB"
                    position="Entrepreneur"
                    message="Je suis très satisfait de la certification en gestion de stock passée au cabinet SONNI avec un formateur compétent. Ce qui m’a permis de maîtriser la pratique. Je remercie aussi M. Maiga pour son cours en développement personnel. "
                />
                <TestimonialItem
                    name="Abdoul Amadou BA"
                    position="Gestionnaire de Stock à H&D Industrie Chère"
                    message="je remercie de passage toute l’équipe du Cabinet SONNI. Grâce à la certification passée à SONNI, j’ai pu saisir une nouvelle opportunité. Remerciement spécial à M. MAIGA. "
                />
                <TestimonialItem
                    name="Frédéric KANFANY"
                    position="fonctionnaire au TER Dakar "
                    message="C’est avec un grand plaisir que j’ai découvert le Cabinet SONNI où j’ai pu faire une formation certifiante en comptabilité. Remerciement spécial au Directeur M. Maiga et au grand formateur M. Idrissa qui nous a appris à mieux cerner les contours de SAGE."
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
                    message="La formation a été intéressante et instructive. Votre expertise, votre clarté d'explication et votre disponibilité ont rendu l'apprentissage particulièrement agréable et stimulant la formation. Je suis enchanté d'avoir eu l'opportunité de participer à cette formation."
                />
                <TestimonialItem
                    name="Mme KAKPO"
                    position="Entrepreneur"
                    message="Je suis vraiment satisfaite de ma formation passée à votre cabinet. Actuellement ça m’aide beaucoup dans la gestion de mes produits que je vends en ligne. Aussi, en tant qu’assistante administrative en ligne."
                />
            </Carousel>
        </div>

    );
};

export default Testimonial;
