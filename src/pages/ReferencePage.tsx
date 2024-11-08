import React, {useLayoutEffect} from 'react';
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
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (

        <>
            <Banner image={blogBanner} title={"Nos reférences"}
                    description={""}/>

            <div className="h-64 mt-7 mb-7 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slide={false}
                          leftControl={
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50"
                                   height="50" viewBox="0 0 512 512" >
                                  <path fill="#f6b218"
                                        d="M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z"></path>
                                  <path fill="#FFF"
                                        d="M395.6,225.8c-65.1,0-130.3,0-195.4,0c11.6-11.6,23.2-23.2,34.8-34.8c26.8-26.8-14.9-68.2-41.8-41.3c-28.3,28.3-56.6,56.6-84.9,84.9c-11.4,11.4-11.1,30.3,0.2,41.5c28.3,28.3,56.6,56.6,84.9,84.9c26.8,26.8,68.2-14.9,41.3-41.8c-11.5-11.5-23.1-23.1-34.6-34.6c65,0,130,0,195,0C433.1,284.6,433.4,225.8,395.6,225.8z"></path>
                              </svg>
                          }
                          rightControl={
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50"
                                   viewBox="0 0 512 512">
                                  <path fill="#f6b218"
                                        d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"></path>
                                  <path fill="#FFF"
                                        d="M408.8,245.5l-141.2-86.7c-3.9-2.4-8.9-2.5-12.9-0.3c-4,2.2-6.5,6.5-6.5,11.1v172.7c0,4.6,2.5,8.8,6.5,11.1c1.9,1.1,4.1,1.6,6.2,1.6c2.3,0,4.6-0.6,6.6-1.9l141.2-86c3.8-2.3,6.1-6.4,6.1-10.8C414.9,251.9,412.6,247.8,408.8,245.5z"></path>
                                  <path fill="#FFF"
                                        d="M343.5,229.5H109.2c-6.7,0-12,5.4-12,12v28.9c0,6.7,5.4,12,12,12h234.3c6.7,0,12-5.4,12-12v-28.9C355.6,234.9,350.2,229.5,343.5,229.5z"></path>
                              </svg>
                          }>

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
