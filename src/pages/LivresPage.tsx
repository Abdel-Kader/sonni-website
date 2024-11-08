import React, {useEffect, useLayoutEffect} from 'react';
import blogBanner from "../assets/banners/blog.jpg";
import Banner from "../components/layout/Banner";
import livre1 from '../assets/livres/livre1.jpeg'
import livre2 from '../assets/livres/livre2.jpeg'
import {Link} from "react-router-dom";

const LivresPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);
    return (
        <>
            <Banner
                image={blogBanner}
                title={"Libraire"}
                description={"Consultez notre Librairie pour vous en procurer des ouvrages."}
            />
            <div className="grid lg:grid-cols-2 gap-6 grid-cols-1 lg:m-24 m-10 items-center ">
                <div className="flex flex-col justify-center items-center">
                    <img
                        src={livre1}
                        key={livre1}
                        className="h-96 w-[300px] max-sm:w-full max-sm:h-80 rounded-xl"
                        alt="team-building-image"/>
                    <p className="mt-3 text-xl text-center text-primary font-medium">Fatima Lobbo, la patience pour le foyer</p>
                    <p className="mt-3 text-xl text-center text-primary font-medium">Prix: 6500Fr</p>
                    <Link to="/librairie/achat" state={{title: "Fatima Lobbo, la patience pour le foyer", image: livre1 }}
                          className="text-white text-center content-center mt-5 h-10 w-[100px] hover:bg-primary bg-secondary align-bottom">
                        Acheter
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center max-sm:mt-12">
                    <img
                        src={livre2}
                        key={livre2}
                        className="h-96 w-[300px] max-sm:w-full max-sm:h-80 rounded-xl"
                        alt="team-building-image"/>
                    <p className="mt-3 text-xl text-center text-primary font-medium">Guirmey Latakabia, au chemin des épreuves </p>
                    <p className="mt-3 text-xl text-center text-primary font-medium">Prix: 5000Fr</p>

                    <Link to="/librairie/achat" state={{title: "Guirmey Latakabia, au chemin des épreuves", image: livre2 }}
                          className="text-white text-center content-center mt-5 h-10 w-[100px] hover:bg-primary bg-secondary align-bottom">
                        Acheter
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LivresPage;
