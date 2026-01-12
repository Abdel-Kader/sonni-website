import React, {useEffect} from 'react';
import Testimonial from "../../components/home/Testimonial";
import img1 from '../../assets/galery/img1.png'
import img2 from '../../assets/galery/img2.png'
import img3 from '../../assets/galery/img3.png'
import img4 from '../../assets/galery/img4.png'
import img5 from '../../assets/galery/img5.png'
import img6 from '../../assets/galery/img6.png'
import img7 from '../../assets/galery/img7.png'
import img8 from '../../assets/galery/img8.png'
import img9 from '../../assets/galery/img9.png'
import img10 from '../../assets/galery/img10.png'
import img11 from '../../assets/galery/img11.png'
import img12 from '../../assets/galery/img12.png'
import img14 from '../../assets/testimonials/dgsahel.png'
import img15 from '../../assets/testimonials/ambassadeMali.png'
import img16 from '../../assets/testimonials/ambassadeGuine.png'
import Banner from "../../components/layout/Banner";


const homeBanner = new URL(
    "../../assets/banners/forum.mp4",
    import.meta.url
).href;

const images = [
    img1,
    img14,
    img15,
    img16,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
];

const Forum = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <>
            <Banner image={homeBanner} type='video' title={""} description={''}/>
            <section className="mx-auto max-w-7xl px-6 lg:px-8 lg:mt-72 mt-52">
                <div className="mx-auto lg:mx-0 mb-10">
                    <p className="mt-6 text-xl leading-loose">
                        L’Africa Invest & Integration Forum est le plus grand forum africain porté
                        sur la business diplomacy, l’investissement & l’intégration économique du
                        continent.
                        Réunissant gouvernements, ambassadeurs, diplomates, dirigeants,
                        investisseurs et entrepreneurs, il constitue un espace unique de networking
                        stratégique, de deal-making et de réflexion continentale.
                    </p>

                    <h2 className="text-[30px] mt-12 font-bold tracking-tight text-center animate-slidein500  text-secondary">Appel à partenariat</h2>
                    <p className="mt-6 text-xl leading-loose">
                        Rejoignez les partenaires institutionnels et corporate du Africa Invest &
                        Integration Forum et contribuez à construire une plateforme continentale au
                        service de l’investissement et de l’intégration africaine.
                        <br/>
                        <br/>
                        <button className="bg-secondary h-10 px-10 rounded-md text-center">
                            Devenir Partenaire
                        </button>
                    </p>

                    <h2 className="text-[30px] mt-12 font-bold tracking-tight text-center animate-slidein500  text-secondary">Témoignages</h2>
                    <Testimonial/>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-lg shadow-md"
                            >
                                <img
                                    src={src}
                                    alt={`Gallery ${index + 1}`}
                                    className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
};

export default Forum;
