import React, {useState} from 'react';
import certificatBanner from "../assets/banners/certificat.jpg";
import Banner from "../components/layout/Banner";
import Maps from "../assets/img.png"

const ContactPage = () => {

    const [form, setForm] = useState({firstName: '', lastName: '', email: '', object: '', message: ''})


    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(form.firstName && form.lastName && form.email && form.message) {

        } else alert('Veuillez saisir tous les champs')
    };

    return (
        <>
            <Banner image={certificatBanner} title={"Nous contacter"}
                    description={"Un service commercial toujours à votre écoute"}/>

            <section className="px-8 py-8 lg:py-16">
                <div className="container mx-auto text-center">
                    <h5 className="mb-4 !text-base lg:!text-2xl text-primary">
                        Contacter nous
                    </h5>

                    <p className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                        Qu'il s'agisse d'une question sur nos services, d'une demande d'assistance technique ou de
                        suggestions d'amélioration, notre équipe est impatiente de vous entendre.
                    </p>

                    <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
                        <img
                            src={Maps}
                            alt="map"
                            className="w-full h-full lg:max-h-[510px]"
                        />
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 lg:max-w-sm">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="mb-3 text-left font-medium !text-gray-900">Nom</p>
                                    <input
                                        placeholder="Nom"
                                        name="firstName"
                                        className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                        onChange={e => setForm({...form, firstName: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <p className="mb-3 text-left font-medium !text-gray-900">Prénom</p>
                                    <input
                                        placeholder="Prénom"
                                        name="lastName"
                                        className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                        onChange={e => setForm({...form, lastName: e.target.value})}

                                    />
                                </div>
                            </div>
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Email</p>
                                <input
                                    type="email"
                                    placeholder="votre adresse mail"
                                    name="email"
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, email: e.target.value})}

                                />
                            </div>
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Objet</p>
                                <input
                                    placeholder="Objet"
                                    name="object"
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, object: e.target.value})}

                                />
                            </div>

                            <div>
                                <p className="mb-2 text-left font-medium !text-gray-900">Votre message</p>
                                <textarea
                                    name="message"
                                    rows={4}
                                    onChange={e => setForm({...form, message: e.target.value})}

                                    className="focus:border-t-gray-900 text-gray min-w-full rounded border-[1.5px] border-gray-400"
                                >

                                </textarea>

                            </div>
                            <button className="w-full bg-primary h-10 rounded-md">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>

    );
};

export default ContactPage;
