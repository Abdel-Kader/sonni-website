import React from 'react';
import {Link} from "react-router-dom";
import {CalendarIcon, MapPinIcon} from "@heroicons/react/16/solid";

type bannerProps = {
    image: string,
    title: string,
    type?: string,
    description?: string
    catalogue?: string
    seminaire?: string
    webinaire?: string
    subdescription?: string
}

const Banner = ({image, title, type, description, catalogue, seminaire, subdescription, webinaire}: bannerProps) => {
    return (
        <div className="block justify-center bg-cover shadow-lg h-[600px] max-sm:h-full overflow-hidden">
            {type === 'video' ?
                <video
                src={image}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute w-full max-sm:h-[400px]"
            /> :
                <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
        />}


            <div className="bg-black bg-opacity-40 h-full flex justify-center items-center mt-20">
                <div className="mx-auto justify-center flex flex-col">
                    <h2 className="text-xl mb-10 font-bold text-secondary text-center tracking-tight sm:text-3xl animate-slidein300 opacity-0 max-sm:my-5">{title}</h2>

                    {subdescription &&
                        <div className="w-full flex flex-row items-center justify-center mb-7">
                            <CalendarIcon className="animate-slidein500" height={25} style={{marginRight: 5, color: 'white'}}/>
                        <p className="text-2xl text-white leading-8 text-center animate-slidein500 opacity-80">
                             {subdescription}
                        </p>

                        </div>}
                    {description &&
                        <div className="flex flex-row items-center justify-center mb-7 w-1/2 ml-[25%] max-sm:w-full max-sm:ml-0 max-sm:mb-12 ">
                            {subdescription && <MapPinIcon className="animate-slidein500" height={25} style={{marginRight: 5, color: 'white'}}/> }
                        <p className="text-xl text-white leading-8 text-center animate-slidein500 opacity-80">
                            {description}
                        </p>
                    </div>}


                    <div className="flex justify-center">
                        {catalogue && catalogue === 'CEDM' &&
                            <Link to="/contact" state={{type: 'CEDM'}}
                                  className="text-white text-center content-center mt-5 h-12 w-[200px] hover:bg-secondary bg-primary align-bottom">
                                Télécharger
                            </Link>

                        }
                        {catalogue && catalogue === 'CS' &&
                            <Link to="/contact" state={{type: 'CS'}}
                                  className="text-white text-center content-center mt-5 h-12 w-[200px] hover:bg-secondary bg-primary align-bottom">
                                Télécharger
                            </Link>

                        }
                        {catalogue && catalogue === 'seminaire' &&
                            <Link to="/contact" state={{type: 'seminaire'}}
                                  className="text-white text-center content-center mt-5 h-12 w-[200px] hover:bg-secondary bg-primary align-bottom">
                                S'inscrire
                            </Link>

                        }
                        {seminaire &&
                            <Link to="/contact" state={{type: 'seminaire', title: seminaire}}
                                  className="text-white text-center content-center mt-5 h-12 w-[200px] hover:bg-secondary bg-primary align-bottom">
                                S'inscrire
                            </Link>

                        }
                        {webinaire &&
                            <Link to="/contact" state={{type: 'webinaire', title: webinaire}}
                                  className="text-white text-center content-center mt-5 h-12 w-[200px] hover:bg-secondary bg-primary align-bottom">
                                S'inscrire
                            </Link>

                        }
                    </div>


                </div>

            </div>
        </div>

    );
};

export default Banner;
