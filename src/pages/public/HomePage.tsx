import React, {useEffect} from 'react'
import Vision from '../../components/home/Vision'
import homeBanner from "../../assets/banners/home.jpg";

import Banner from "../../components/layout/Banner";
import {citationBilesGate, motDuDG, presentation} from "../../assets/contents/homePage";
import Valeurs from "../../components/home/Valeurs";
import Testimonial from "../../components/home/Testimonial";
import Missions from '../../components/home/Missions';
import Services from "../../components/home/Services";
import About from "../../components/home/About";
import {Link} from "react-router-dom";

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);
  return (
      <>
          <Banner image={homeBanner} title={" SONNI GROUP ADVISORY"} description={''}/>
          <About/>
          <div className="mx-auto px-6 lg:px-8 mt-12 lg:w-[70%]">
              <svg className="h-12 mb-3 text-secondary" viewBox="0 0 24 27"
                   fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"/>
              </svg>
              <blockquote>
                  <Link to="/certificats">
                      <p className="text-3xl max-sm:text-xl  text-[#54595f] lg:w-2/3  text-justify leading-relaxed">
                          SONNI Group Advisory est né d’une conviction simple : l’Afrique a besoin de plateformes d’intelligence, d’influence et d’investissement capables de porter une vision ambitieuse du continent.

                          Notre cabinet combine expertise stratégique, connaissance des enjeux africains, capacité d’analyse, relations diplomatiques, innovation, communication et leadership. SONNI est plus qu’une entreprise : c’est une mission.

                          Une mission de transformation, d’intégration africaine, de diplomatie économique et d’accompagnement des institutions et dirigeants.

                          À travers nos pôles, nos événements et nos programmes, nous construisons une Afrique plus forte, mieux connectée, plus influente et plus compétitive.

                          Bienvenue dans l’univers SONNI - Think, Influence, Invest, Transform.
                      </p>
                  </Link>
              </blockquote>
              <p className="mt-3 mb-3 text-primary font-bold text-lg max-sm:text-md">Mot du Directeur Exécutif – Mahamadou Chaïbou Maïga, PhD.C</p>
              {/*<p className="font-medium italic lg:w-1/2 text-center">Directeur Exécutif de SONNI GROUP, Ph.D C en
                  Relations Internationales et diplomatie d’affaires, Conférencier, Écrivain, Chercheur ZLECAF.</p>*/}
          </div>
          {/*<Vision/>
          <Missions/>
          <Valeurs/>*/}
          <Services/>

          <h2 className="text-xl ml-24 mt-12 font-bold tracking-tight text-primary sm:text-2xl">Dernières Publications & Actualités</h2>
          <span className='ml-24'>
Affichage sous forme de 3 "Cartes"
          </span>
          <Testimonial/>
      </>
  )
}
