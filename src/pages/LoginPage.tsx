import React, {useState} from 'react';
import {auth} from "../config/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


export const LoginPage = () => {
    const [form, setForm] = useState({email: '', password: ''})

    console.log(auth.currentUser?.email)
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (form.email && form.password) {
            // await createUserWithEmailAndPassword(auth, form.email, form.password)
             await signInWithEmailAndPassword(auth, form.email, form.password).then(res => {
                 console.log(res)
             }).catch(err => console.log(err))
        } else alert('Veuillez saisir tous les champs')
    };

    return (
        <div className="flex items-center flex-col py-40 border-black">
            <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">Formulaire de connexion</h2>

            <form
                onSubmit={handleSubmit}
                className="shadow-xl flex flex-col bg-white w-1/3 p-12 gap-4 ">
                <div className="my-4">
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
                    <p className="mb-3 text-left font-medium !text-gray-900">Mot de passe</p>
                    <input
                        placeholder="Mot de passe"
                        name="password"
                        type="password"
                        className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                        onChange={e => setForm({...form, password: e.target.value})}

                    />
                </div>

                <button className="w-full bg-primary mt-10 h-10 rounded-md">
                    Se connecter
                </button>
            </form>
        </div>
    );
};


