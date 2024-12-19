import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// @ts-ignore
import finance from "../../assets/certifications/finance.pdf";
// @ts-ignore
import relaInter from "../../assets/certifications/diplomatie.pdf";


export const MBAContact = () => {

    const [form, setForm] = useState({
        fullName: '',
        genre: '',
        phone: '',
        email: '',
        exp: '',
        financement: '',
        profession: '',
        pays: ''
    })

    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(form.fullName && form.email && form.phone && form.profession && form.pays) {
            if(location.state?.type === 'subscription') {
                if(form.financement) {
                    emailjs.sendForm('service_1egafxp', 'template_51fcpsa', '#contact').then(
                        (response) => {
                            console.log('SUCCESS!', response.status, response.text);
                            Swal.fire({
                                icon: "success",
                                title: "Votre message est envoyé avec succès",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            setForm({
                                fullName: '',
                                genre: '',
                                phone: '',
                                email: '',
                                exp: '',
                                financement: '',
                                profession: '',
                                pays: ''
                            })
                        },
                        (error) => {
                            console.log('FAILED...', error);
                        },
                    );
                } else alert('Veuillez saisir tous les champs')
            }


            if(location.state?.type === 'download') {
                const link = document.createElement('a');
                link.download = location.state?.title;

                link.href = location.state?.file === 'finance'? finance : relaInter;

                link.click();


            }

        } else alert('Veuillez saisir tous les champs')
    }



    return (
        <>

            <section className="px-8  py-8 lg:py-16">
                <div className="flex flex-col container mx-auto pt-28">

                    <form
                        name="contact"
                        id="contact"
                        onSubmit={handleSubmit}
                        className="flex flex-col">
                        <p className="text-2xl  font-medium mb-4 text-secondary">
                            Réserver votre place

                        </p>
                        <div className="grid lg:grid-cols-1 gap-4 shadow-lg w-full  p-2">

                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Nom et Prénom *</p>
                                <input
                                    placeholder="Nom"
                                    required
                                    name="fullName"
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, fullName: e.target.value})}
                                />
                            </div>
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Genre *</p>
                                <select
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, genre: e.target.value})}
                                >
                                    <option value="Homme">Homme</option>
                                    <option value="Femme">Femme</option>
                                </select>
                            </div>
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Email *</p>
                                <input
                                    placeholder="Email"
                                    required
                                    type="email"
                                    name="email"
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, email: e.target.value})}
                                />
                            </div>
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Pays *</p>
                                <input
                                    placeholder="Pays"
                                    required
                                    name="pays"
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, pays: e.target.value})}
                                />
                            </div>
                            <input
                                hidden
                                name="message"
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                value={"Vous avez une demande d'adhésion pour " + location.state.title}
                            />
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Numéro de téléphone WhatsApp
                                    (avec indicatif) *</p>
                                <input
                                    placeholder="+2217xxxxxxxx"
                                    required
                                    type="number"
                                    name="phone"
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
                                <p className="mb-3 text-left font-medium !text-gray-900">Année d'expérience *</p>
                                <input
                                    placeholder="00"
                                    required
                                    type="number"
                                    name="exp"
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, exp: e.target.value})}
                                />
                            </div>
                            {location.state.type === 'subscription' &&
                                <div>
                                    <p className="mb-3 text-left font-medium !text-gray-900">Financement *</p>
                                    <select
                                        className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                        onChange={e => setForm({...form, financement: e.target.value})}
                                    >
                                        Sur le formulaire de financement,
                                        Comme ce site que je t’ai envoyé tu mets ces options de paiement:
                                        Un versement de 4200 Euros (réduction 700 euros)
                                        Deux versements de 4500 Euros
                                        (Réduction 400 euros)
                                        Trois versements 4900 euros
                                        <option value="Un versement de 4200 Euros (réduction 700 euros)">Un versement de
                                            4200 Euros (réduction 700 euros)</option>
                                        <option value="Deux versements de 4500 Euros (Réduction 400 euros)">Deux
                                            versements de 4500 Euros (Réduction 400 euros)
                                        </option>
                                        <option value="Trois versements 4900 euros">Trois versements 4900 euros</option>
                                    </select>
                                </div>
                            }
                            <div className="flex justify-center">
                                <button className="w-48 bg-primary h-10 rounded-md">
                                    {location.state.type === 'subscription' ? 'Envoyer' : 'Télécharger'}
                                </button>
                            </div>
                        </div>

                    </form>
                </div>

            </section>
        </>
    )
}

