import React from 'react';
import teamBuildingBanner from "../assets/banners/team-building.jpg";
import Banner from "../components/layout/Banner";

const TeamBuildingPage = () => {
    return (
        <>
            <Banner image={teamBuildingBanner} title={"Team building"}
                    description={""}/>
        </>
    );
};

export default TeamBuildingPage;
