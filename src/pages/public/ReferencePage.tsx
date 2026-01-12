import React, {useEffect} from 'react';
import {useTranslation, Trans} from "react-i18next";

const ReferencePage = () => {

    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-32">
            <div className="mx-auto lg:mx-0 mb-10">
                <h2 className="text-[35px] font-bold tracking-tight text-center text-secondary">{t('about.title')} </h2>
                <p className="mt-6 text-xl leading-loose">
                    {t('about.subtitle')}
                </p>

                <p className="mt-6 text-xl font-medium leading-loose">
                    <Trans i18nKey="about.services" />
                </p>


                <p className="mt-8 text-xl leading-loose">
                    {t('about.footer')}
                </p>

            </div>
        </section>
    )
};

export default ReferencePage;
