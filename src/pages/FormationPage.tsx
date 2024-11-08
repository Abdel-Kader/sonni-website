import React, {useEffect, useState} from 'react'
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


const dataCEDM = [
  {
    category: 'CEDM',
    title: "Relations Internationales",
    description: relationInter,
    modules: relationInterModules
  },
  {
    category: 'CEDM',
    title: "Diplomatie",
    description: formationDiplomatie,
    modules: formationDiplomatieModules
  },
  {
    category: 'CEDM',
    title: "Diplomatie d'affaires",
    description: affaire,
    modules: affairesModules
  },
  {
    category: 'CEDM',
    title: "Diplomatie économiques",
    description: economique,
    modules: economieModules
  },
  {
    category: 'CEDM',
    title: "Humanitaire",
    description: humanitaire,
    modules: humanitaireModules
  },
  {
    category: 'CEDM',
    title: "Suivi évaluation",
    description: suivi,
    modules: suiviEvaluationModules
  },
  {
    category: 'CS',
    title: "Leadership, Coaching & performance professionnelle",
    description: leadership,
    modules: leadershipModules
  },
  {
    category: 'CS',
    title: "Accueil, Bureautique & Administration",
    description: bureautique,
    modules: bureautiqueModules
  },
  {
    category: 'CS',
    title: "Comptabilité, Banque & Finance",
    description: comptabilite,
    modules: comptabiliteModules
  },
  {
    category: 'CS',
    title: "Gestion logistique",
    description: logistique,
    modules: logistiqueModules
  },
  {
    category: 'CS',
    title: "Droit de travail",
    description: travail,
    modules: travailModules
  },
  {
    category: 'CS',
    title: "Droit es affaires",
    description: droitAffaire,
    modules: droitAffairesModules
  },
  {
    category: 'CS',
    title: "Marketing",
    description: marketing,
    modules: marketingModules
  },
  {
    category: 'CS',
    title: "Marché public",
    description: marchePublic,
    modules: marchePublicModules
  },
  {
    category: 'CS',
    title: "Santé Travail, Sécurité, Qhse & Développement Durable",
    description: qhse,
    modules: qhseModules
  },
  {
    category: 'CS',
    title: "Paie, Administration RH",
    description: hr,
    modules: hrModules
  },
  {
    category: 'CS',
    title: "Cybersecurité & Système D’information",
    description: cybersecurity,
    modules: cybersecurityModules
  },

]



export default function FormationPage() {
  const [searchItem, setSearchItem] = useState('')
  const [filteredFormations, setFilteredFormations] = useState(dataCEDM)


  const handleInputChange = (e: any) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
    const filteredItems = dataCEDM.filter((formation) =>
        formation.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredFormations(filteredItems);
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
      <>
        <FormationBanner image={formationBanner} />
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
          <div className="relative mt-2 rounded-xs shadow-sm flex ">

            <input
                id="search"
                name="search"
                type="text"
                value={searchItem}
                onChange={handleInputChange}
                placeholder="Rechercher une formation, Ex: Diplomatie"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {/*<button className="hover:bg-primary text-primary mx-6 py-2 px-4 text-xs rounded border border-primary">
              Rechercher
            </button>*/}
          </div>
          <div className="flex flex-row justify-between max-sm:grid max-sm:grid-cols-1">
            <div className="w-1/2 max-sm:w-full mr-8">
              <div
                  className="col-span-3 my-12 text-xs font-bold tracking-tight text-primary sm:text-xl animate-slidein500 opacity-0">
                Centre d’Études en Diplomatie et Management – SONNI
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                {filteredFormations.filter(formation => formation.category === "CEDM").map((res, index) => (
                    <FormationItem type={"CEDM"} id={(index + 1).toString()} title={res.title}
                                   description={res.description}
                                   modules={res.modules}/>
                ))}
                 </div>
            </div>

            <div className="w-1/2 max-sm:w-full">
              <div
                  className="col-span-3 my-12 text-xs font-bold tracking-tight text-primary sm:text-xl animate-slidein500 opacity-0">CABINET
                SONNI
              </div>
              <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                {filteredFormations.filter(formation => formation.category === "CS").map((res, index) => (
                    <FormationItem type={"CS"} id={(index + 1).toString()} title={res.title}
                                   description={res.description}
                                   modules={res.modules}/>
                ))}
              </div>

            </div>
          </div>

        </section>
        <div className="mt-5 block justify-center bg-cover shadow-lg lg:h-[170px] overflow-hidden"
             style={{backgroundImage: `url(${formationFooter})`}}>

          <div className="bg-black bg-opacity-50 h-full flex flex-row justify-between items-center max-sm:grid">
            <div className="flex flex-col lg:ml-12 max-sm:ml-3 max-sm:my-10 justify-center items-center">
              <p className="text-white text-lg lg:w-2/3 text-center">
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
            <div className="flex flex-col lg:mr-12 justify-center items-center">
              <p className="text-white text-lg text-center">
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
