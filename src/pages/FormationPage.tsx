import React from 'react'
import formationBanner from "../assets/banners/formation.jpg";
import Banner from "../components/layout/Banner";
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

export default function FormationPage() {
  return (
      <>
        <Banner image={formationBanner} title={"Formations"}
                description={"Nous offrons une palette de formation afin avec des formateurs compétents"}/>
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
          <SearchBar/>
          <div className="flex flex-row justify-between">
            <div className="w-1/2 mr-8">
              <div
                  className="col-span-3 mt-12 text-xs font-bold tracking-tight text-primary sm:text-xl animate-slidein500 opacity-0">
                CEDM SONNI
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-2">
                <FormationItem id="1" title={"Relations Internationales"} description={relationInter} modules={relationInterModules} />
                <FormationItem id="2" title={"Diplomatie"} description={formationDiplomatie} modules={formationDiplomatieModules}/>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-2">
                <FormationItem id="3" title={"Diplomatie d'affaires"} description={affaire} modules={affairesModules}/>
                <FormationItem id="4" title={"Diplomatie économiques"} description={economique} modules={economieModules}/>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-2">
                <FormationItem id="5" title={"Humanitaire"} description={humanitaire} modules={humanitaireModules}/>
                <FormationItem id="6" title={"Suivi évaluation"} description={suivi} modules={suiviEvaluationModules}/>
              </div>
            </div>

            <div className="w-1/2">
              <div
                  className="col-span-3 mt-12 text-xs font-bold tracking-tight text-primary sm:text-xl animate-slidein500 opacity-0">CABINET
                SONNI
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-2">
                <FormationItem id="7" title={"Leadership, Coaching & performance professionnelle"} description={leadership} modules={leadershipModules}/>
                <FormationItem id="8" title={"Acceuil, Bureautique & Administration"} description={bureautique} modules={bureautiqueModules}/>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-2">
                <FormationItem id="9" title={"Comptabilité, Banque & Finance"} description={comptabilite} modules={comptabiliteModules}/>
                <FormationItem id="10" title={"Gestion logistique"} description={logistique} modules={logistiqueModules}/>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-2">
                <FormationItem id="11" title={"Droit de travail"} description={travail} modules={travailModules}/>
                <FormationItem id="12" title={"Droit es affaires"} description={droitAffaire} modules={droitAffairesModules}/>

              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-2">
                <FormationItem id="13" title={"Marketing"} description={marketing} modules={marketingModules}/>
                <FormationItem id="14" title={"Marché public"} description={marchePublic} modules={marchePublicModules}/>
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-2">
                <FormationItem id="15" title={"Santé Travail, Sécurité, Qhse & Développement Durable"} description={qhse} modules={qhseModules}/>
                <FormationItem id="16" title={"Paie, Administration RH"} description={hr} modules={hrModules}/>
                <FormationItem id="17" title={"Cybersecurité & Système D’information"} description={cybersecurity} modules={cybersecurityModules}/>
              </div>

            </div>
          </div>

        </section>
      </>
  )
}
