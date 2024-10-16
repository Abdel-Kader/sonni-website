import React from 'react'
import formationBanner from "../assets/banners/formation.jpg";
import Banner from "../components/layout/Banner";
import FormationItem from "../components/formation/FormationItem";
import SearchBar from "../components/formation/SearchBar";
import {
  affaire, bureautique, comptabilite, cybersecurity, droitAffaire,
  economique,
  formationDiplomatie, hr,
  humanitaire,
  leadership, logistique, marchePublic, marketing, qhse,
  relationInter, travail
} from "../assets/contents/formationPage";

export default function FormationPage() {
  return (
      <>
        <Banner image={formationBanner} title={"Formations"}
                description={"Nous offrons une palette de formation afin avec des formateurs compétents"}/>
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
          <SearchBar/>
          <div className="grid lg:grid-cols-2 gap-6 grid-cols-2">
            <div className="grid lg:grid-cols-3 gap-6 grid-cols-2">
              <div className="col-span-3 mt-12 text-xs font-bold tracking-tight text-primary sm:text-xl animate-slidein500 opacity-0">CEDM SONNI</div>
                <FormationItem title={"Relations Internationales"} description={relationInter}/>
                <FormationItem title={"Diplomatie"} description={formationDiplomatie}/>
                <FormationItem title={"Diplomatie d'affaires"} description={affaire}/>
                <FormationItem title={"Diplomatie économiques"} description={economique}/>
                <FormationItem title={"Humanitaire"} description={humanitaire}/>
                <FormationItem title={"Suivi évaluation"} description={"Description de la formation"}/>
              </div>
            <div className="grid lg:grid-cols-3 gap-6 grid-cols-2">
              <div
                  className="col-span-3 mt-12 text-xs font-bold tracking-tight text-primary sm:text-xl animate-slidein500 opacity-0">CABINET SONNI
              </div>
              <FormationItem title={"Leadership, Coaching & performance professionnelle"} description={leadership}/>
              <FormationItem title={"Acceuil, Bureautique & Administration"} description={bureautique}/>
              <FormationItem title={"Comptabilité, Banque & Finance"} description={comptabilite}/>
              <FormationItem title={"Gestion logistique"} description={logistique}/>
              <FormationItem title={"Droit de travail"} description={travail}/>
              <FormationItem title={"Droit es affaires"} description={droitAffaire}/>
              <FormationItem title={"Marketing"} description={marketing}/>
              <FormationItem title={"Marché public"} description={marchePublic}/>
              <FormationItem title={"Santé Travail, Sécurité, Qhse & Développement Durable"} description={qhse}/>
              <FormationItem title={"Paie, Administration RH"} description={hr}/>
              <FormationItem title={"Cybersecurité & Système D’information"} description={cybersecurity}/>
            </div>
          </div>
        </section>
      </>
  )
}
