import React from 'react';

type bannerProps = {
    image: string,
    title: string,
    description?: string
    catalogue?: string
}

const Banner = ({image, title, description, catalogue}: bannerProps) => {
    return (
        <div className=" block justify-center bg-cover shadow-lg h-[700px] overflow-hidden"
             style={{backgroundImage: `url(${image})`}}>

            <div className="bg-black bg-opacity-40 h-full flex justify-center items-center mt-20">
                <div className="mx-auto lg:mx-0 justify-center flex flex-col  ">
                    <h2 className="text-xl mb-10 font-bold text-secondaty text-center tracking-tight sm:text-3xl animate-slidein300 opacity-0">{title}</h2>
                    {description && <div className="w-full ">
                        <p className="text-xl text-white leading-8 text-center animate-slidein500 opacity-80">
                            {description}
                        </p>
                    </div>}

                    <div className="flex justify-center">
                        {catalogue && catalogue === 'CEDM' &&
                            <a rel="noreferrer"  href={require("../../docs/Catalogue-CEDM-SONNI.pdf")} download={"Catalogue-CEDM-SONNI"}
                               target='_blank'
                               className="text-white text-center content-center mt-5 h-12 w-[200px] hover:bg-secondaty bg-primary align-bottom">
                                Télécharger
                            </a>

                        }
                        {catalogue && catalogue === 'CS' &&
                            <a rel="noreferrer"  href={require("../..//docs/Catalogue-Cabinet-SONNI.pdf")}
                               download={"Catalogue-Cabinet-SONNI"}
                               target='_blank'
                               className="text-white text-center content-center mt-5 h-12 w-[200px] hover:bg-secondaty bg-primary align-bottom">
                                Télécharger
                            </a>

                        }
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Banner;
