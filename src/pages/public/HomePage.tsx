import React, {useEffect} from 'react'
import dgImg from "../../assets/teams/dg1.jpg";
import Banner from "../../components/layout/Banner";
import Services from "../../components/home/Services";
import About from "../../components/home/About";
import Reference from "../../components/home/Reference";
import {useTranslation} from "react-i18next";

const homeBanner = new URL(
    "../../assets/banners/bg-video.mp4",
    import.meta.url
).href;

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    const {t} = useTranslation();

  return (
      <>
          <Banner image={homeBanner} type='video' title={" SONNI GROUP ADVISORY"} description={''}/>
          <About/>
          <h2 className="text-2xl ml-36 mt-6 font-bold tracking-tight text-primary sm:text-2xl"> {t('title.ceo')}</h2>
          <div className="mx-6 lg:mx-12 lg:px-24 lg:flex mt-4">

              {/* Texte */}
              <div className="flex-1">
                  <p className="text-lg lg:text-xl text-[#54595f] lg:leading-loose space-y-4">
                      {t('home.ceo')}
                      <br />
                      <span className="font-semibold text-[#1f2937]">
                        {t('home.ceo_sub')}
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
                  <p className="text-center text-sm mt-4 text-gray-600">
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

          <h2 className="text-xl mx-6 lg:ml-24 mt-12 font-bold tracking-tight text-primary sm:text-2xl">Dernières Publications & Actualités</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mx-6 lg:ml-24 mt-12">
              <div className="shadow-md border rounded h-[200px]">
                  <p className="text-center mt-3">Dernier Rapport/Analyse (Zoom sur l'Indice Sonni).</p>

              </div>
              <div className="shadow-md border rounded h-[200px]">
                  <p className="text-center mt-3">Vie du Groupe (Le PDG reçoit une délégation...).</p>

              </div>
              <div className="shadow-md border rounded h-[200px]">
                  <p className="text-center mt-3">Événement à venir.</p>

              </div>
          </div>

          <h2 className="text-xl mx-6 lg:ml-24 mt-12 font-bold tracking-tight text-primary sm:text-2xl">{t('title.reference')} </h2>
          <Reference />
      </>
  )
}
