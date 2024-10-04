import React from 'react';

type bannerProps = {
    image: string,
    title: string,
    description: string
}

const Banner = ({image, title, description}: bannerProps) => {
    return (
        <div  className="relative isolate overflow-hidden py-24 sm:py-32 h-[700px]">
                <img
                    alt=""
                    src={image}
                    style={{background: 'rgba(0, 0, 0, 0.5)'}}
                    className="absolute inset-0 -z-10 h-full w-full object-cover md:object-center"
                />


            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="mx-auto lg:mx-0 bottom-0 absolute">
                    <h2 className="text-4xl mb-24 font-bold tracking-tight text-primary sm:text-5xl animate-slidein300 opacity-0">{title}</h2>
                    <div style={{backgroundColor: '#000000', color: '#fff', opacity: 0.8, paddingTop: 20}} className="lg:w-[70%] lg:h-[100px] w-full ">
                        <p className="text-xl leading-8 text-center animate-slidein500 opacity-80">
                            {description}
                        </p>
                    </div>

                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">

                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Banner;
