import React from 'react'
import formationBanner from "../assets/banners/formation.jpg";
import Banner from "../components/layout/Banner";
import FormationItem from "../components/formation/FormationItem";
import SearchBar from "../components/formation/SearchBar";

export default function FormationPage() {
  return (
      <>
        <Banner image={formationBanner} title={"Formations"}
                description={"Nous offrons une palette de formation afin avec des formateurs compétents"}/>
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
          <SearchBar/>
          <div className="mx-auto lg:mx-0 mb-5 mt-7">
            <h3 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">Nos formations</h3>

          </div>
          <div className="grid lg:grid-cols-5 gap-6 grid-cols-2">
            <FormationItem title={"Les séminaires de SONNI"} description={"Description de la formation"}/>
            <FormationItem title={"Relations Internationales"} description={"Description de la formation"}/>
            <FormationItem title={"Diplomatie"} description={"Description de la formation"}/>
            <FormationItem title={"Leadership"} description={"Description de la formation"}/>
            <FormationItem title={"Communication"} description={"Description de la formation"}/>
            <FormationItem title={"Prise de parole en public"} description={"Description de la formation"}/>
            <FormationItem title={"Comptabilité"} description={"Description de la formation"}/>
            <FormationItem title={"Bureaucratique"} description={"Description de la formation"}/>
            <FormationItem title={"Humanitaire"} description={"Description de la formation"}/>
            <FormationItem title={"Finance"} description={"Description de la formation"}/>
            <FormationItem title={"Droit des Affaires"} description={"Description de la formation"}/>
          </div>
        </section>
      </>
  )
}
