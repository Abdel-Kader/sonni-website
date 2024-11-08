import React from 'react'
import {List} from "flowbite-react";


export default function Valeurs() {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
            <div className="mx-auto lg:mx-0">
                <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl animate-slidein500 opacity-0">NOS VALEURS</h2>
                <p className="mt-6 text-xl leading-loose text-justify animate-slidein700 opacity-0">
                        <List>
                            <List.Item style={{color: '#f6b218', fontWeight: 'bolder'}}> L’EXPERTISE </List.Item>
                            <List.Item style={{color: '#f6b218', fontWeight: 'bolder'}}> L’EXCELLENCE </List.Item>
                            <List.Item style={{color: '#f6b218', fontWeight: 'bolder'}}> LA CROISSANCE </List.Item>
                        </List>
                </p>
            </div>

        </section>
    )
}
