import React from 'react';
import {ServiceItem} from "./ServiceItem";
import {useTranslation} from "react-i18next";

const Services = () => {

    const {t} = useTranslation();

    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
            <div className="mx-auto lg:mx-0 mb-5">
                <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">{t('title.services')}</h2>

            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
                <ServiceItem
                    bgColor={'#312783'}
                    color={'#fff'}
                    title={"SONNI INTELLIGENCE & STRATEGY"}
                />
                <ServiceItem
                    bgColor={'#312783'}
                    color={'#F39200'}
                    title={"BUSINESS DIPLOMACY & INVESTMENT ADVISORY"}
                />
                <ServiceItem
                    bgColor={'#ffffff'}
                    color={'#312783'}
                    title={"COMMUNICATION, BRANDING & PUBLICS RELATIONS"}
                />
                <ServiceItem
                    bgColor={'#ffffff'}
                    color={'#312783'}
                    title={"EVENTS & STRATEGIC NETWORKING"}
                />
                <ServiceItem
                    bgColor={'#F39200'}
                    color={'#fff'}
                    title={"SONNI ACADEMY & INFLUENCE INSTITUTE"}
                />
            </div>
        </section>
                );
                };

                export default Services;
