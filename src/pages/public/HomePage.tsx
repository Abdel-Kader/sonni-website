import React, {useEffect} from 'react'
import dgImg from "../../assets/teams/dg1.jpg";
import Banner from "../../components/layout/Banner";
import Services from "../../components/home/Services";
import About from "../../components/home/About";
import ReferencePage from "./ReferencePage";

const homeBanner = new URL(
    "../../assets/banners/bg-video.mp4",
    import.meta.url
).href;

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);
  return (
      <>
          <Banner image={homeBanner} type='video' title={" SONNI GROUP ADVISORY"} description={''}/>
          <About/>
          <h2 className="text-2xl ml-36 mt-6 font-bold tracking-tight text-primary sm:text-2xl">Mot du DG</h2>
          <div className="mx-6 lg:mx-12 lg:px-24 lg:flex mt-4">

              {/* Texte */}
              <div className="flex-1">
                  <p className="text-lg lg:text-xl text-[#54595f] text-justify leading-relaxed space-y-4">
                      SONNI Group Advisory est né d’une conviction simple : l’Afrique a besoin de plateformes
                      d’intelligence, d’influence et d’investissement capables de porter une vision ambitieuse du continent.
                      <br />
                      Notre cabinet combine expertise stratégique, connaissance des enjeux africains, capacité d’analyse,
                      relations diplomatiques, innovation, communication et leadership. SONNI est plus qu’une entreprise :
                      c’est une mission.
                      <br />
                      Une mission de transformation, d’intégration africaine, de diplomatie économique et
                      d’accompagnement des institutions et dirigeants.
                      <br />
                      À travers nos pôles, nos événements et nos programmes, nous construisons une Afrique plus forte,
                      mieux connectée, plus influente et plus compétitive.
                      <br />
                      <span className="font-semibold text-[#1f2937]">
        Bienvenue dans l’univers SONNI – Think, Influence, Invest, Transform.
      </span>
                  </p>
              </div>

              {/* Image DG */}
              <div className="flex-1 flex flex-col items-center">
                  <div className="w-full max-w-md overflow-hidden rounded-xl shadow-lg">
                      <img
                          src={dgImg}
                          alt="Directeur Exécutif SONNI Group Advisory"
                          className="w-full h-[520px] object-cover"
                      />
                  </div>

                  <p className="mt-4 text-center font-semibold text-gray-800">
                      Directeur Exécutif
                  </p>
                  <p className="text-center text-sm text-gray-600">
                      Mahamadou Chaïbou Maïga, PhD.C
                  </p>
              </div>

          </div>

          {/*<p className="font-medium italic lg:w-1/2 text-center">Directeur Exécutif de SONNI GROUP, Ph.D C en
                  Relations Internationales et diplomatie d’affaires, Conférencier, Écrivain, Chercheur ZLECAF.</p>*/}
          {/*<Vision/>
          <Missions/>
          <Valeurs/>*/}
          <Services/>

          <h2 className="text-xl ml-24 mt-12 font-bold tracking-tight text-primary sm:text-2xl">Dernières Publications & Actualités</h2>
          <span className='ml-24'>
Affichage sous forme de 3 "Cartes"
          </span>

          <h2 className="text-xl ml-24 mt-12 font-bold tracking-tight text-primary sm:text-2xl">Références </h2>

          <ReferencePage />
      </>
  )
}
