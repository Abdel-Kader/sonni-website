import React from 'react';
import teamBuildingBanner from "../assets/banners/team-building.jpg";
import Banner from "../components/layout/Banner";
import {TeamBuildingItem} from "../components/teamBuilding/teamBuildingItem";
import teamBuildingImg1 from "../assets/teamBuilding/image-1.jpg"
import teamBuildingImg2 from "../assets/teamBuilding/image-2.jpg"
import teamBuildingImg3 from "../assets/teamBuilding/image-3.jpg"
import teamBuildingImg4 from "../assets/teamBuilding/image-4.jpg"
import {
    cohesion,
    cohesionList,
    communiquer, communiquerList,
    experimental,
    teamLearning,
    teamLearningList
} from "../assets/contents/teamBuilding";

const TeamBuildingPage = () => {
    return (
        <>
            <Banner image={teamBuildingBanner} title={"Team building"}
                    description={"SONNI Team Building est là pour vous offrir les meilleurs services de Team building pour rendre unique vos moments avec vos équipes."}/>
            <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
                <TeamBuildingItem title="TEAM LEARNING DE SONNI" description={teamLearning} image={teamBuildingImg1} subList={teamLearningList}/>
                <TeamBuildingItem title="UNE APPRENTISSAGE EXPERIMENTALE" description={experimental} image={teamBuildingImg2}/>
                <TeamBuildingItem title="RENFORCEMENT DE LA COHÉSION DE L’ÉQUIPE" description={cohesion} image={teamBuildingImg3} subList={cohesionList}/>
                <TeamBuildingItem title="COMMUNIQUER ET MOTIVER" description={communiquer} subList={communiquerList} image={teamBuildingImg4}/>
            </section>
        </>
    );
};

export default TeamBuildingPage;
