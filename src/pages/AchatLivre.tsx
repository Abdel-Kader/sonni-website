import React, {useEffect, useState} from 'react';
import certificatBanner from "../assets/banners/blog.jpg";
import Banner from "../components/layout/Banner";
import {useLocation} from "react-router-dom";

const AchatLivre = () => {
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    const [form, setForm] = useState({number: '', firstName: '', lastName: '',phone: '', email: '', profession: ''})


    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(form.firstName && form.lastName && form.email && form.phone && form.profession && form.number) {

        } else alert('Veuillez saisir tous les champs')
    }


    return (
        <>
            <Banner image={certificatBanner} title={"Achat de livre"}/>

            <section className="px-8 py-8 lg:py-16">
                <div className="container mx-auto text-center">
                    <h5 className="mb-4 !text-base lg:!text-2xl text-primary">
                        Achat de livre !
                    </h5>


                    <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
                        <img
                            src={location.state.image}
                            alt="livre"
                            className="w-full h-full lg:max-h-[610px]"
                        />
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 lg:max-w-sm">
                            <p className="text-2xl  font-medium mb-4 text-secondary">
                                Achetez {location.state.title}
                            </p>
                            <div className="grid lg:grid-cols-2 gap-4">

                                <div>
                                    <p className="mb-3 text-left font-medium !text-gray-900">Nom *</p>
                                    <input
                                        placeholder="Nom"
                                        required
                                        name="firstName"
                                        className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                        onChange={e => setForm({...form, firstName: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <p className="mb-3 text-left font-medium !text-gray-900">Prénom *</p>
                                    <input
                                        placeholder="Prénom"
                                        name="lastName"
                                        required
                                        className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                        onChange={e => setForm({...form, lastName: e.target.value})}

                                    />
                                </div>
                            </div>
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Email *</p>
                                <input
                                    type="email"
                                    placeholder="votre adresse mail"
                                    name="email"
                                    required
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, email: e.target.value})}

                                />
                            </div>
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Numéro de téléphone (WhatsApp)
                                    *</p>
                                <input
                                    type="number"
                                    placeholder="votre numéro de téléphone (WhatsApp)"
                                    name="phone"
                                    required
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, phone: e.target.value})}

                                />
                            </div>

                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Profession *</p>
                                <input
                                    placeholder="Profession"
                                    required
                                    name="profession"
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, profession: e.target.value})}

                                />
                            </div>

                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Nombre d'exemplaire *</p>
                                <input
                                    type="number"
                                    placeholder="nombre d'examplaire"
                                    name="number"
                                    required
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, number: e.target.value})}

                                />
                            </div>

                            <button className="w-full bg-primary h-10 rounded-md">
                                Valider
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>

    );
};

export default AchatLivre;
