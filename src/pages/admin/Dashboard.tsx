import { addDoc, collection, serverTimestamp, doc, onSnapshot, setDoc } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import Swal from 'sweetalert2'
import {Modal} from "../../components/admin/Modal";
import {db, auth} from "../../config/firebase";
import {DetailModal} from "../../components/admin/DetailModal";
import  Spinner  from "../../components/Spinner";
import ArticleTableItem from "../../components/admin/ArticleTableItem";
import {createUserWithEmailAndPassword} from "firebase/auth";
import firebase from "firebase/compat";
import UserTableItem from "../../components/admin/UserTableItem";

type formType = {
    id?: string,
    theme: string,
    date: string,
    lieu: string,
    img: string | undefined
}

function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [seminaires, setSeminaires] = useState<any[]>([])
    const [seminaire, setSeminaire] = useState<formType>()
    const [form, setForm] = useState<any>({id: '',firstName: '', lastName: '', email: '', phoneNumber: '', password: ''})
    const [edit, isEditing] = useState(false)
    const [loading, isLoading] = useState(false)


    useEffect(() => {

        isLoading(true)
        const subs = onSnapshot(collection(db, "users"), (snapshot) => {
            let list: any[] = [];
            snapshot.docs.forEach((doc) => {
                list.push({_id: doc.id, ...doc.data()})
            })
            setSeminaires(list)
            isLoading(false)
        })

        return () => {

            subs()
        }

    }, []);

    async function handleSubmit(e: any) {
        e.preventDefault();

        if(!edit) {

            if (form.firstName && form.lastName && form.email && form.password && form.phoneNumber) {
                try {
                    const res = await createUserWithEmailAndPassword(auth, form.email, form.password)

                    await setDoc(doc(db,"users", res.user.uid), {
                        ...form,
                        timestamps: serverTimestamp()
                    })

                    setShowModal(!showModal);

                    Swal.fire({
                        icon: "success",
                        title: "Utilisateur ajouté avec succès",
                        showConfirmButton: false,
                        timer: 800
                    });
                    window.location.reload();
                } catch (err) {
                    Swal.fire({
                        icon: "error",
                        title: "Cette adresse mail existe déjà",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }



            } else alert('Veuillez remplir tous les champs')
        } else {
            if(form.id) {
                try {
                    await setDoc(doc(collection(db, 'user'), form._id), {...form})
                    setShowModal(!showModal);
                    Swal.fire({
                        icon: "success",
                        title: "Utilisateur ajouté avec succès",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }


    return (
        <>
            <Modal
                show={showModal}
                onClose={() => {
                    setShowModal(!showModal);
                }}
            >
                <form name="contact"
                      id="contact"
                      onSubmit={handleSubmit}>
                    <h3 className="font-bold mt-3 mb-3 text-primary">Formulaire d'ajout d'utilisateur</h3>
                    <div className="grid lg:grid-cols-2 gap-4">

                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Nom *</p>
                            <input
                                placeholder="Nom"
                                required
                                name="firstName"
                                value={form?.firstName}
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, firstName: e.target.value})}
                            />
                        </div>
                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Prénom *</p>
                            <input
                                placeholder="Prénom"
                                required
                                name="lastName"
                                value={form?.lastName}
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, lastName: e.target.value})}
                            />
                        </div>
                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Email *</p>
                            <input
                                placeholder="email"
                                type="email"
                                required
                                name="email"
                                value={form?.email}
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, email: e.target.value})}
                            />
                        </div>

                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Téléphone *</p>
                            <input
                                placeholder="Téléphone"
                                required
                                type="number"
                                name="phoneNumber"
                                value={form?.phoneNumber}
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, phoneNumber: e.target.value})}
                            />
                        </div>
                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Mot de passe *</p>
                            <input
                                placeholder="Mot de passe"
                                required
                                type="password"
                                name="password"
                                value={form?.password}
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, password: e.target.value})}
                            />
                        </div>

                    </div>
                    <button className="mt-5 px-10 bg-primary h-10 rounded-md">
                        Valider
                    </button>
                </form>
            </Modal>

            {showDetail && seminaire &&
                <DetailModal
                    type="librairie"
                    show={showDetail}
                    onClose={() => {
                        setShowDetail(!showDetail);
                    }}
                    seminaire={seminaire}
                />
            }

            <section className="flex flex-col mx-auto mt-12">

                <div className="flex justify-between mr-8 mb-3">
                    <h3 className="font-bold text-2xl">Gestion des utilisateurs</h3>
                    <div
                        className="flex flex-col hover:bg-secondary p-4 border-t-gray-300 border justify-center h-10 bg-primary align-bottom rounded-lg">
                        <button onClick={() => setShowModal(true)}
                                className="text-secondary text-xs hover:text-white text-center">Ajouter un utilisateur
                        </button>
                    </div>
                </div>

                {loading ?
                    <div className="flex flex-1 mt-[20%] justify-center text-center">
                        <Spinner />
                    </div> :
                    seminaires.length > 0 ?
                        <UserTableItem
                            seminaires={seminaires}
                            collection="librairie"
                            detail={(seminaire: any) => {
                                setSeminaire(seminaire)
                                setShowDetail(true)
                            }}
                        />
                        : <div className="flex flex-1 mt-[20%] justify-center text-center">
                            <h3 className="font-semibold text-2xl text-primary">La liste des utilisateurs est vide ! Veuillez en ajouter</h3>
                        </div>
                }

            </section>
        </>

    );
}

export default Dashboard;

