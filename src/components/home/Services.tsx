import React from 'react';
import {ServiceItem} from "./ServiceItem";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Services = () => {

    const {t} = useTranslation();

    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
            <div className="mx-auto lg:mx-0 mb-5">
                <h2 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl">{t('title.services')}</h2>

            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
                <Link to="/expertise">
                    <ServiceItem
                        bgColor={'#312783'}
                        color={'#fff'}
                        title={"SONNI INTELLIGENCE & STRATEGY"}
                    />
                </Link>
                <Link to="/expertise">
                    <ServiceItem
                        bgColor={'#312783'}
                        color={'#F39200'}
                        title={"SONNI BUSINESS DIPLOMACY & INVESTMENT ADVISORY"}
                    />
                </Link>
                <Link to="/expertise">
                    <ServiceItem
                        bgColor={'#ffffff'}
                        color={'#312783'}
                        title={"SONNI COMMUNICATION, BRANDING & PUBLICS RELATIONS"}
                    />
                </Link>
                <Link to="/expertise">
                    <ServiceItem
                        bgColor={'#ffffff'}
                        color={'#312783'}
                        title={"SONNI EVENTS & STRATEGIC NETWORKING"}
                    />
                </Link>
                <Link to="/expertise" className="lg:col-span-2 flex justify-center">
                    <ServiceItem
                        bgColor={'#F39200'}
                        color={'#fff'}
                        title={"SONNI ACADEMY & INFLUENCE INSTITUTE"}
                    />
                </Link>
            </div>
        </section>
                );
                };

                export default Services;
