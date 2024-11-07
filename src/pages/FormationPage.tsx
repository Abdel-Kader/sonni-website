import React from 'react'
import formationBanner from "../assets/banners/formation.jpg";
import formationFooter from "../assets/banners/formationFooter.jpeg"
import FormationItem from "../components/formation/FormationItem";
import SearchBar from "../components/formation/SearchBar";
import {
  affaire,
  affairesModules,
  bureautique,
  bureautiqueModules,
  comptabilite,
  comptabiliteModules,
  cybersecurity, cybersecurityModules,
  droitAffaire, droitAffairesModules,
  economieModules,
  economique,
  formationDiplomatie,
  formationDiplomatieModules,
  hr, hrModules,
  humanitaire,
  humanitaireModules,
  leadership,
  leadershipModules,
  logistique, logistiqueModules,
  marchePublic, marchePublicModules,
  marketing, marketingModules,
  qhse, qhseModules,
  relationInter,
  relationInterModules,
  suivi, suiviEvaluationModules,
  travail, travailModules
} from "../assets/contents/formationPage";
import {FormationBanner} from "../components/layout/FormationBanner";
import {Link} from "react-router-dom";

export default function FormationPage() {
  return (
      <>
        <FormationBanner image={formationBanner} />
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
          <SearchBar/>
          <div className="flex flex-row justify-between">
            <div className="w-1/2 mr-8">
              <div
                  className="col-span-3 my-12 text-xs font-bold tracking-tight text-primary sm:text-xl animate-slidein500 opacity-0">
                Centre d’Études en Diplomatie et Management – SONNI
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                <FormationItem type={"CEDM"} id="1" title={"Relations Internationales"} description={relationInter}
                               modules={relationInterModules}/>
                <FormationItem type={"CEDM"} id="2" title={"Diplomatie"} description={formationDiplomatie}
                               modules={formationDiplomatieModules}/>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                <FormationItem type={"CEDM"} id="3" title={"Diplomatie d'affaires"} description={affaire} modules={affairesModules}/>
                <FormationItem type={"CEDM"} id="4" title={"Diplomatie économiques"} description={economique}
                               modules={economieModules}/>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                <FormationItem type={"CEDM"} id="5" title={"Humanitaire"} description={humanitaire} modules={humanitaireModules}/>
                <FormationItem type={"CEDM"} id="6" title={"Suivi évaluation"} description={suivi} modules={suiviEvaluationModules}/>
              </div>
            </div>

            <div className="w-1/2">
              <div
                  className="col-span-3 my-12 text-xs font-bold tracking-tight text-primary sm:text-xl animate-slidein500 opacity-0">CABINET
                SONNI
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                <FormationItem type={"CS"} id="7" title={"Leadership, Coaching & performance professionnelle"}
                               description={leadership} modules={leadershipModules}/>
                <FormationItem type={"CS"} id="8" title={"Accueil, Bureautique & Administration"} description={bureautique}
                               modules={bureautiqueModules}/>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                <FormationItem type={"CS"} id="9" title={"Comptabilité, Banque & Finance"} description={comptabilite}
                               modules={comptabiliteModules}/>
                <FormationItem type={"CS"} id="10" title={"Gestion logistique"} description={logistique}
                               modules={logistiqueModules}/>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                <FormationItem type={"CS"} id="11" title={"Droit de travail"} description={travail} modules={travailModules}/>
                <FormationItem type={"CS"} id="12" title={"Droit es affaires"} description={droitAffaire}
                               modules={droitAffairesModules}/>

              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                <FormationItem type={"CS"} id="13" title={"Marketing"} description={marketing} modules={marketingModules}/>
                <FormationItem type={"CS"} id="14" title={"Marché public"} description={marchePublic}
                               modules={marchePublicModules}/>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                <FormationItem type={"CS"} id="15" title={"Santé Travail, Sécurité, Qhse & Développement Durable"}
                               description={qhse} modules={qhseModules}/>
                <FormationItem type={"CS"} id="16" title={"Paie, Administration RH"} description={hr} modules={hrModules}/>
                <FormationItem type={"CS"} id="17" title={"Cybersecurité & Système D’information"} description={cybersecurity}
                               modules={cybersecurityModules}/>
              </div>

            </div>
          </div>

        </section>
        <div className="mt-5 block justify-center bg-cover shadow-lg h-[170px] overflow-hidden"
             style={{backgroundImage: `url(${formationFooter})`}}>

          <div className="bg-black bg-opacity-50 h-full flex flex-row justify-between items-center">
            <div className="flex flex-col lg:ml-12 max-sm:ml-3 max-sm:my-10 justify-center items-center">
              <p className="text-white text-lg lg:w-2/3 text-center max-sm:mr-10">
                Télécharger notre catalogue du Centre d’Études en Diplomatie et Management – SONNI 2024-2025
              </p>
              <Link to="/contact" state={{type: 'CEDM'}}
                    className="text-white text-center content-center mt-5 h-12 w-[200px] hover:bg-secondary bg-primary align-bottom">
                Télécharger
              </Link>
              {/*<a rel="noreferrer" href={require("../docs/Catalogue-CEDM-SONNI.pdf")} download={"Catalogue-CEDM-SONNI"}
                  target='_blank'
                  className="text-white text-center content-center mt-5 h-12 w-[200px] hover:bg-secondary bg-primary align-bottom">
                Télécharger
              </a>*/}
            </div>
            <div className="flex flex-col mr-12 justify-center items-center">
              <p className="text-white text-lg">
                Télécharger notre catalogue du Cabinet SONNI 2024-2025
              </p>
              <Link to="/contact" state={{type: 'CS'}}
                    className="text-white text-center content-center mt-5 h-12 w-[200px] hover:bg-secondary bg-primary align-bottom">
                Télécharger
              </Link>
              {/*<a rel="noreferrer" href={require("../docs/Catalogue-Cabinet-SONNI.pdf")}
                  download={"Catalogue-Cabinet-SONNI"} target='_blank'
                  className="text-white text-center content-center mt-5 h-12 w-[200px] hover:bg-secondary bg-primary align-bottom">
                Télécharger
              </a>*/}
            </div>
          </div>
        </div>
      </>
  )
}
