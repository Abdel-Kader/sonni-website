import Banner from "../components/layout/Banner";
import React from "react";
import blogBanner from "../assets/banners/blog.jpg";
import webinaire1 from "../assets/webinaires/webinaire1.png";

import {WebinaireItem} from "../components/WebinaireItem";


const WebinairePage = () => {
    return (
        <>
            <Banner image={blogBanner} title={"Webinaires"}
                    description={"Consultez-nos webinaires à venir,"}/>
            <section className="mx-auto mt-12">
                <WebinaireItem
                    title={"Theme: Le leadership de soi, le connaitre et influencer "}
                    image={webinaire1} date={"le 23 Novembre 2024"} heure={"À partir de 10H00"}
                    animateur={"Roselvie Makosso Coach certifiée Maxwell"} />
            </section>
            </>
            );
            };

            export default WebinairePage;
