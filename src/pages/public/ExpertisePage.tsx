import React, { useEffect } from "react";
import intelligenceStrategy from "../../assets/expertise/intstrategy.png";
import busDiplo from "../../assets/expertise/busDiplo.png";
import accademic from "../../assets/expertise/accademic.png";
import communication from "../../assets/expertise/communication.png";
import event from "../../assets/expertise/event.png";

export default function ExpertisePage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        // <>
        //     <Banner image={certificatBanner} title={"Nos certificats et MBA"}
        //             description={"SONNI GROUP, organisme de formation professionnelle continue reconnu du droit sénégalais. Nous mettons à votre disposition des certifications et MBA conçus par notre comité pédagogique composé d’experts praticiens, répondants aux critères d’excellences."}/>


        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24">

            {/* Titre */}
            <div className="mb-14">
                <h2 className="text-[35px] font-bold tracking-tight text-center text-secondary">
                    Notre expertise
                </h2>

            </div>

            {/* Contenu */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start">

                {/* Image */}
                <div className="max-w-lg">
                    <img
                        src={intelligenceStrategy}
                        alt="Intelligence stratégique"
                        className="h-[350px] w-full rounded-tr-3xl shadow-lg"
                    />
                </div>

                {/* Texte */}
                <div>
                    <h3 className="text-2xl font-semibold text-secondary mb-1">
                        SONNI INTELLIGENCE & STRATEGY
                    </h3>

                    <p className="text-gray-700  text-justify">
                        Ce pôle développe l’intelligence décisionnelle de SONNI.
                        Il produit des notes d’analyse, des briefings stratégiques,
                        des études sectorielles et une veille économique et géopolitique.
                    </p>

                    <p className="text-gray-700 mb-2  text-justify">
                        L’Indice SONNI d’Attractivité Africaine est un outil unique permettant
                        de mesurer la stabilité, les risques et les opportunités des pays
                        africains.
                    </p>

                    <h4 className="text-xl font-semibold text-secondary">
                        Nos services
                    </h4>

                    <p className="font-medium leading-loose">
                        • Notes pays & analyses sectorielles <br/>
                        • Veille stratégique & cartographie des risques <br/>
                        • Intelligence économique & politique <br/>
                        • Études d’impact & recommandations institutionnelles <br/>
                        • SONNI Insights (abonnements) <br/>
                        • Outils SONNI : indice, tableaux de bord, grilles d’évaluation <br/>

                    </p>

                </div>

                {/* Texte */}
                <div>
                    <h3 className="text-2xl font-semibold max-w-lg  text-secondary mb-2">
                        BUSINESS DIPLOMACY & INVESTMENT ADVISORY
                    </h3>

                    <p className="text-gray-700 max-w-lg  text-justify">
                        Ce pôle constitue le cœur de l’accompagnement stratégique de SONNI
                        Group Advisory en matière de diplomatie économique, d’investissement et
                        de relations d’affaires internationales.

                        Nous accompagnons les États, institutions, ambassades, entreprises et
                        investisseurs dans la structuration, la sécurisation et la promotion de leurs
                        projets économiques et d’investissement en Afrique.
                        Notre approche combine expertise stratégique, compréhension
                        institutionnelle et capacité de mise en relation à haut niveau.
                    </p>

                    <h4 className="text-xl font-semibold text-secondary mt-4">
                        Nos services
                    </h4>

                    <p className="font-medium leading-loose">
                        • Diplomatie d’affaires et relations économiques internationales <br/>
                        • Conseil en attractivité économique et territoriale <br/>
                        • Intermédiation et facilitation d’investissements <br/>
                        • Structuration de projets et partenariats stratégiques <br/>
                        • Mise en relation investisseurs, institutions et porteurs de projets <br/>
                        • Missions économiques et rencontres B2B ciblées <br/>
                    </p>
                </div>
                {/* Image */}
                <div className="max-w-lg mt-6">
                    <img
                        src={busDiplo}
                        alt="Business Diplomacy"
                        className="h-[350px] w-full rounded-tr-3xl shadow-lg"
                    />
                </div>

                {/* Image */}
                <div className="max-w-lg  mt-4">
                    <img
                        src={accademic}
                        alt="Academy institute"
                        className="h-[350px] w-full rounded-tl-3xl shadow-lg"
                    />
                </div>

                {/* Texte */}
                <div>
                    <h3 className="text-2xl font-semibold text-secondary mb-1">
                        SONNI ACADEMY & INFLUENCE INSTITUTE
                    </h3>

                    <p className="text-gray-700 text-justify">
                        La SONNI Academy forme les leaders africains aux compétences
                        stratégiques, communicationnelles et diplomatiques.
                        Elle propose des programmes certifiants, un MBA, des masterclass, du
                        coaching d’image et de leadership.
                    </p>


                    <h4 className="text-xl font-semibold text-secondary">
                        Nos services
                    </h4>

                    <p className="font-medium leading-loose">
                        • MBA SONNI <br/>
                        • Formations exécutives (communication, stratégie, leadership) <br/>
                        • Coaching de dirigeants <br/>
                        • Formations sur mesure pour institutions<br/>

                    </p>

                </div>

                {/* Texte */}
                <div>
                    <h3 className="text-2xl font-semibold text-secondary mb-2  mt-6">
                        SONNI COMMUNICATION, BRANDING & PUBLIC RELATIONS
                    </h3>

                    <p className="text-gray-700 max-w-lg  text-justify">
                        Ce pôle est dédié à la construction, au renforcement et à la protection de
                        l’image et de la réputation des organisations et des leaders africains.
                        Nous accompagnons institutions, entreprises et dirigeants dans leurs
                        stratégies de communication institutionnelle, de branding corporate et de
                        relations publiques, afin d’assurer une visibilité cohérente, crédible et
                        influente aux niveaux national et international.
                    </p>

                    <h4 className="text-xl font-semibold text-secondary mt-4">
                        Nos services
                    </h4>

                    <p className="font-medium leading-loose">
                        • Communication institutionnelle et corporate <br/>
                        • Branding stratégique et identité visuelle <br/>
                        • Relations publiques et gestion de l’image <br/>
                        • Stratégies d’influence et de visibilité <br/>
                        • Communication de crise <br/>
                        • Media training et prise de parole publique <br/>
                    </p>
                </div>
                {/* Image */}
                <div className="max-w-lg mt-6">
                    <img
                        src={communication}
                        alt="communication"
                        className="h-[350px] w-full rounded-tr-3xl shadow-lg"
                    />
                </div>


                {/* Image */}
                <div className="max-w-lg  mt-4">
                    <img
                        src={event}
                        alt="Event"
                        className="h-[350px] w-full rounded-tl-3xl shadow-lg"
                    />
                </div>

                {/* Texte */}
                <div>
                    <h3 className="text-2xl font-semibold text-secondary mb-1">
                        EVENTS & STRATEGIC NETWORKING
                    </h3>

                    <p className="text-gray-700 text-justify text-justify">
                        Ce pôle conçoit et organise les événements stratégiques et plateformes de
                        networking de haut niveau de SONNI Group Advisory.

                        Il regroupe l’ensemble des activités événementielles du cabinet, notamment
                        l’Africa Invest & Integration Forum, événement phare dédié à
                        l’investissement et à l’intégration économique africaine.
                        Ces événements sont conçus comme des espaces d’influence, de dialogue
                        stratégique et de création d’opportunités concrètes.
                    </p>


                    <h4 className="text-xl font-semibold text-secondary">
                        Nos services
                    </h4>

                    <p className="font-medium leading-loose">
                        • Organisation d’événements institutionnels et économiques <br/>
                        • Africa Invest & Integration Forum<br/>
                        • Dîners d’affaires et rencontres de haut niveau <br/>
                        • Missions économiques et voyages d’investissement<br/>
                        • Tables rondes diplomatiques et CEO Roundtables<br/>
                        • Gestion de conférences et protocoles VIP<br/>

                    </p>

                </div>
            </div>
            {/*</>*/}
        </section>
    );
}
