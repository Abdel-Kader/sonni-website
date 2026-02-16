import React, {useEffect} from 'react'
import dgImg from "../../assets/teams/dg1.jpg";
import Banner from "../../components/layout/Banner";
import Services from "../../components/home/Services";
import About from "../../components/home/About";
import Reference from "../../components/home/Reference";
import {useTranslation, Trans} from "react-i18next";

const homeBanner = new URL(
    "../../assets/banners/video.mp4",
    import.meta.url
).href;

export default function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    const {t} = useTranslation();

  return (
      <>
          <Banner image={homeBanner} type='video' title={""} description={''}/>
          <About/>
          <h2 className="text-2xl ml-36 mt-6 font-bold tracking-tight text-secondary sm:text-2xl"> {t('title.ceo')}</h2>
          <div className="mx-6 lg:mx-12 lg:px-24 lg:flex mt-4">

              {/* Texte */}
              <div className="flex-1">
                  <p className="text-lg lg:text-xl text-[#54595f] lg:leading-loose space-y-4">
                      {t('home.ceo')}
                      <br />
                      <span className="font-semibold text-[#1f2937]">
                        <Trans i18nKey="home.ceo_sub" />
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

          <h2 className="text-xl mx-6 lg:ml-24 mt-12 font-bold tracking-tight text-secondary sm:text-2xl">Dernières Publications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mx-6 lg:mx-24 mt-12">
              <a
                  href={require("../../assets/publications/analyse_strategique.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded h-[250px] border border-primary flex flex-col justify-center items-center hover:shadow-lg transition overflow-hidden"
              >
                  <div className="w-full h-[250px] overflow-hidden">
                      <iframe
                          src={require("../../assets/publications/analyse_strategique.pdf") + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
                          className="w-full h-full pointer-events-none border-none"
                          title="Attractivité économique de l'Afrique de l'Ouest"
                          style={{border: 'none', width: '100%'}}
                          frameBorder="0"
                          scrolling="no"
                      />
                  </div>
                  <p className="text-center py-3 px-2 text-sm font-medium border-b border-l border-r border-black w-full"> Attractivité économique de l'Afrique de l'Ouest</p>
              </a>

              <a
                  href={require("../../assets/publications/dynamic_securitaire.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded h-[250px] border border-primary flex flex-col justify-center items-center hover:shadow-lg transition overflow-hidden"
              >
                  <div className="w-full h-[250px] overflow-hidden">
                      <iframe
                          src={require("../../assets/publications/dynamic_securitaire.pdf") + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
                          className="w-full h-full pointer-events-none border-none"
                          title="Dynamiques sécuritaires et économiques au Sahel"
                          style={{border: 'none', width: '100%'}}
                          frameBorder="0"
                          scrolling="no"
                      />
                  </div>
                  <p className="text-center py-3 px-2 text-sm font-medium border-b border-l border-r border-black w-full"> Dynamiques sécuritaires et économiques au Sahel</p>
              </a>

              <a
                  href={require("../../assets/publications/recomp_geopolitique.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded h-[250px] border border-primary flex flex-col justify-center items-center hover:shadow-lg transition overflow-hidden"
              >
                  <div className="w-full h-[250px] overflow-hidden">
                      <iframe
                          src={require("../../assets/publications/recomp_geopolitique.pdf") + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
                          className="w-full h-full pointer-events-none border-none"
                          title="L'Afrique de l'Ouest face à la recomposition géopolitique mondiale"
                          style={{border: 'none', width: '100%'}}
                          frameBorder="0"
                          scrolling="no"
                      />
                  </div>
                  <p className="text-center py-3 px-2 text-sm font-medium border-b border-l border-r border-black w-full"> L'Afrique de l'Ouest face à la recomposition géopolitique mondiale</p>
              </a>

              <a
                  href={require("../../assets/publications/zlecaf.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded h-[250px] border border-primary flex flex-col justify-center items-center hover:shadow-lg transition overflow-hidden"
              >
                  <div className="w-full h-[250px] overflow-hidden">
                      <iframe
                          src={require("../../assets/publications/zlecaf.pdf") + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
                          className="w-full h-full pointer-events-none border-none"
                          title="La ZLECAf et l'intégration régionale africaine"
                          style={{border: 'none', width: '100%'}}
                          frameBorder="0"
                          scrolling="no"
                      />
                  </div>
                  <p className="text-center py-3 px-2 text-sm font-medium border-b border-l border-r border-black w-full"> La ZLECAf et l'intégration régionale africaine</p>
              </a>

              <a
                  href={require("../../assets/publications/investir_afrik.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded h-[250px] border border-primary flex flex-col justify-center items-center hover:shadow-lg transition overflow-hidden"
              >
                  <div className="w-full h-[250px] overflow-hidden">
                      <iframe
                          src={require("../../assets/publications/investir_afrik.pdf") + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
                          className="w-full h-full pointer-events-none border-none"
                          title="Investir en Afrique de l'Ouest 2025–2028"
                          style={{border: 'none', width: '100%'}}
                          frameBorder="0"
                          scrolling="no"
                      />
                  </div>
                  <p className="text-center py-3 px-2 text-sm font-medium border-b border-l border-r border-black w-full"> Investir en Afrique de l'Ouest 2025–2028</p>
              </a>
          </div>

          <h2 className="text-xl mx-6 lg:ml-24 mt-12 mb-4 font-bold tracking-tight text-secondary sm:text-2xl">Actualités</h2>
          <Reference type='actu' />

          <h2 className="text-xl mx-6 lg:ml-24 mt-12 font-bold tracking-tight text-secondary sm:text-2xl">{t('title.reference')} </h2>
          <Reference type='ref' />
      </>
  )
}
