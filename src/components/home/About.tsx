import React from 'react'
import {about} from '../../assets/contents/homePage'
export default function About() {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
            <div className="mx-auto lg:mx-0">
                <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl animate-slidein500 opacity-0">QUI SOMMES NOUS ?</h2>
                <p className="mt-6 text-xl text-[#54595f] lg:leading-loose text-justify animate-slidein700 opacity-0">
                    {about}
                </p>
            </div>

        </section>
    )
}
