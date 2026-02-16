import React from 'react'
import {useTranslation} from "react-i18next";
export default function About() {
    const {t} = useTranslation();
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 ">
            <div className="mx-auto lg:mx-0">
               <h2 className="text-2xl mt-6 font-bold tracking-tight text-secondary sm:text-2xl">Le Cabinet</h2>
                <p className="mt-6 text-xl text-[#54595f] lg:leading-loose animate-slidein700 opacity-0">
                    {t('home.about')}
                </p>
            </div>

        </section>
    )
}
