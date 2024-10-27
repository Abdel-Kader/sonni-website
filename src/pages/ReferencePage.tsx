import React from 'react';
import { Carousel } from "flowbite-react";
import ref1 from "../assets/refs/ref1.jpg";
import ref2 from "../assets/refs/ref2.jpg";
import ref3 from "../assets/refs/ref3.jpg";
import ref4 from "../assets/refs/ref4.jpg";
import ref5 from "../assets/refs/ref5.jpg";
import ref6 from "../assets/refs/ref6.jpg";
import ref7 from "../assets/refs/ref7.jpg";
import ref8 from "../assets/refs/ref8.jpg";
import ref9 from "../assets/refs/ref9.jpg";
import ref10 from "../assets/refs/ref10.jpg";
import ref11 from "../assets/refs/ref11.jpg";
import ref12 from "../assets/refs/ref12.jpg";
import blogBanner from "../assets/banners/blog.jpg";
import Banner from "../components/layout/Banner";


const ReferencePage = () => {
    return (

        <>
            <Banner image={blogBanner} title={"Nos reférences"}
                    description={""}/>

            <div className="h-64 mt-7 mb-7 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slideInterval={2000}>

                    <div className="flex flex-row justify-between px-20">
                        <img src={ref1}
                             className="w-40 h-32 rounded-2xl "
                             alt="reference"/>
                        <img src={ref2}
                             className="w-40 h-32 mb-7 rounded-2xl "
                             alt="reference"/>
                        <img src={ref3}
                             className="w-40 h-32 mb-7 rounded-2xl "
                             alt="reference"/>
                        <img src={ref4}
                             className=" w-40 h-32 rounded-2xl "
                             alt="reference"/>
                        <img src={ref5}
                             className="w-40 h-32 mb-7 rounded-2xl "
                             alt="reference"/>
                        <img src={ref6}
                             className="w-40 h-32 mb-7 rounded-2xl"
                             alt="reference"/>

                    </div>
                    <div className="flex flex-row justify-between px-20">

                        <img src={ref7}
                             className="w-40 h-32 mb-7 rounded-2xl "
                             alt="reference"/>
                        <img src={ref8}
                             className="w-40 h-32 mb-7 rounded-2xl "
                             alt="reference"/>
                        <img src={ref9}
                             className="w-40 h-32 mb-7 rounded-2xl "
                             alt="reference"/>
                        <img src={ref10}
                             className="w-40 h-32 mb-7 rounded-2xl "
                             alt="reference"/>
                        <img src={ref11}
                             className="w-40 h-32 mb-7 rounded-2xl "
                             alt="reference"/>
                        <img src={ref12}
                             className="w-40 h-32 mb-7 rounded-2xl "
                             alt="reference"/>

                    </div>


                </Carousel>
            </div>

        </>

    );
};

export default ReferencePage;
