import React, {useEffect, useState} from 'react';
import certificatBanner from "../assets/banners/certificat.jpg";
import Banner from "../components/layout/Banner";
import Maps from "../assets/img_1.png"
import CEDM from "../assets/cedm.png"
import CS from '../assets/cs.png'
import TB from '../assets/teamBuilding/image-1.jpg'
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'


const ContactPage = () => {

    const [form, setForm] = useState({firstName: '', lastName: '',phone: '', email: '', object: 'Demande l\'information', message: '', profession: '', institution: '', pays: ''})

    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(form.firstName && form.lastName && form.email && form.message) {

            emailjs.sendForm('service_1egafxp', 'template_7zwrjr8', '#contact').then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    Swal.fire({
                        icon: "success",
                        title: "Votre message est envoyé avec succès",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setForm({
                        email: "",
                        firstName: "",
                        institution: "",
                        lastName: "",
                        message: "",
                        object: "",
                        pays: "",
                        phone: "",
                        profession: ""
                    })
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );

            if(location.state?.type === 'CEDM' || location.state?.type === 'CS'|| location.state?.type === 'TB') {
                if(form.institution && form.profession) {
                    fetch("../docs/Catalogue-Cabinet-SONNI.pdf")
                        .then((res) => res.blob())
                        .then((blob) => {

                            const url = URL.createObjectURL(blob);

                            const a = document.createElement("a");
                            a.href = url;
                            a.download = "technical-digital-salary-survey-november-2023.pdf";
                            a.click();
                        })
                        .catch((error) => console.error(error));
                }
            }
        } else alert('Veuillez saisir tous les champs')
        }


    return (
        <>
            <Banner image={certificatBanner} title={"Contactez-nous"}
                    description={"Un conseiller client toujours à votre écoute"}/>

            <section className="px-8 py-8 lg:py-16">
                <div className="container mx-auto text-center">
                    <h5 className="mb-4 !text-base lg:!text-2xl text-primary">
                        Contactez-nous !
                    </h5>

                    <p className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                        Qu'il s'agisse d'une question sur nos services, d'une demande d'assistance technique ou de
                        suggestions d'amélioration, notre équipe est impatiente de vous entendre.
                    </p>

                    <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
                        <img
                            src={location.state?.type === 'CEDM' ? CEDM : location.state?.type === 'CS' ? CS :  location.state?.type === 'TB' ? TB :  Maps}
                            alt="map"
                            className="w-full h-full lg:max-h-[610px]"
                        />
                        <form
                            name="contact"
                            id="contact"
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 lg:max-w-sm">
                            <p className="text-2xl  font-medium mb-4 text-secondary">
                                {
                                    location.state && location.state.type === 'service' && 'De quel service avez vous besoin ?'
                                }
                                {
                                    location.state && location.state.type === 'devis' && 'Demande de dévis'
                                }
                                {
                                    ((location.state && location.state.type === 'CEDM') || (location.state && location.state.type === 'CS')) && 'Téléchargement Catalogue'
                                }{
                                    ((location.state && location.state.type === 'TB')) && 'Téléchargement Contenu Team building'
                                }
                                {
                                    ((location.state && location.state.type === 'seminaire')) && 'Réserver votre place'
                                }
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
                                <p className="mb-3 text-left font-medium !text-gray-900">Numéro de téléphone (WhatsApp) *</p>
                                <input
                                    type="number"
                                    placeholder="votre numéro de téléphone (WhatsApp)"
                                    name="phone"
                                    required
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, phone: e.target.value})}

                                />
                            </div>
                            {location.state && location.state.type === 'service' &&
                                <div>
                                    <p className="mb-3 text-left font-medium !text-gray-900">Service *</p>
                                    <input
                                        placeholder="De quel service avez-vous besoin ?"
                                        name="object"
                                        required
                                        className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                        onChange={e => setForm({...form, object: e.target.value})}

                                    />
                                </div>
                            }
                            {location.state && (location.state.type === 'seminaire' || location.state.type === 'webinaire') &&
                                <div>
                                    <p className="mb-3 text-left font-medium !text-gray-900">{location.state.type === 'seminaire' ? 'Séminaire' : 'Webinaire'}</p>
                                    <input
                                        value={location.state.title}
                                        name="object"
                                        disabled
                                        required
                                        className="focus:border-t-gray-900 text-sm text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2 mb-3"
                                        onChange={e => setForm({...form, object: e.target.value})}

                                    />
                                    <p className="mb-3 text-left font-medium !text-gray-900">Pays *</p>
                                    <input
                                        name="pays"
                                        placeholder="Pays"
                                        required
                                        className="focus:border-t-gray-900 text-sm text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                        onChange={e => setForm({...form, pays: e.target.value})}

                                    />
                                </div>
                            }
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
                                <p className="mb-3 text-left font-medium !text-gray-900">Nom de Entreprise ou
                                    organisation *</p>
                                <input
                                    placeholder="Nom de Entreprise ou organisation."
                                    name="institution"
                                    required
                                    className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => setForm({...form, institution: e.target.value})}

                                />
                            </div>


                            <div>
                                {location.state && (location.state.type === 'CEDM' || location.state.type === 'CS'|| location.state.type === 'TB') &&
                                    <p className="mb-2 text-left font-medium !text-gray-900">Raision du téléchargement
                                        *</p>}
                                {!location.state &&
                                    <p className="mb-2 text-left font-medium !text-gray-900">Message *</p>}
                                {location.state && (location.state.type === 'service' || location.state.type === 'seminaire'|| location.state.type === 'webinaire') &&
                                    <p className="mb-2 text-left font-medium !text-gray-900">Message *</p>}
                                {location.state && location.state.type !== 'devis' &&
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        onChange={e => setForm({...form, message: e.target.value})}
                                        className="focus:border-t-gray-900 text-gray min-w-full rounded border-[1.5px] border-gray-400"
                                    >

                                </textarea>}

                                {!location.state &&
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        onChange={e => setForm({...form, message: e.target.value})}
                                        className="focus:border-t-gray-900 text-gray min-w-full rounded border-[1.5px] border-gray-400"
                                    >

                                </textarea>}
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

export default ContactPage;
