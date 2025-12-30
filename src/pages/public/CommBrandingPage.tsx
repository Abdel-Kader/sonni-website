import React, {useEffect} from 'react';

const CommBrandingPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-32">
            <div className="mx-auto lg:mx-0 mb-10">
                <h2 className="text-[35px] font-bold tracking-tight text-center text-secondary">COMMUNICATION & CORPORATE BRANDING </h2>
                <p className="mt-6 text-xl leading-loose text-center">
                    Nous développons l’image institutionnelle des organisations.

                    De la communication publique au branding corporate, nous assurons la visibilité, la cohérence, l’influence
                    et la notoriété des institutions et entreprises africaines.

                </p>

                <h4 className='text-xl'>Nos services :</h4>

                <p className="mt-6 text-xl font-medium leading-loose">
                    • Communication institutionnelle <br/>
                    • Branding & identité visuelle <br/>
                    • Campagnes intégrées <br/>
                    • Communication de crise <br/>
                    • Media training <br/>
                </p>

            </div>
        </section>
    )
};

export default CommBrandingPage;
