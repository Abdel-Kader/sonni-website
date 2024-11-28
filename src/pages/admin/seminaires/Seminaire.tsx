import { addDoc, collection, serverTimestamp, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import Swal from 'sweetalert2'
import {Modal} from "../../../components/admin/Modal";
import {db} from "../../../config/firebase";
import TableItem from "../../../components/admin/TableItem";
import {DetailModal} from "../../../components/admin/DetailModal";

type formType = {
    id?: string,
    theme: string,
    date: string,
    lieu: string,
    img: string | undefined,
    presentation: string[],
    cible?: string[],
    objectifs?: string[]
    program?: string[]
    methods?: string[]
}

function Seminaire() {
    const [showModal, setShowModal] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [seminaires, setSeminaires] = useState<any[]>([])
    const [seminaire, setSeminaire] = useState<formType>()
    const [form, setForm] = useState<formType>({id: '',theme: '', date: '', lieu: '', img: '', presentation: [], cible:[], objectifs: [], program: [], methods: []})
    const [edit, isEditing] = useState(false)


    useEffect(() => {

        const subs = onSnapshot(collection(db, "seminaires"), (snapshot) => {
            let list: any[] = [];
            snapshot.docs.forEach((doc) => {
                list.push({id: doc.id, ...doc.data()})
            })
            setSeminaires(list)
        })

        return () => {
            subs()
        }

    }, []);

    async function handleSubmit(e: any) {
        e.preventDefault();

        if(!edit) {
            if (form.theme && form.lieu && form.date) {
                await addDoc(collection(db, "seminaires"), {...form, timestamps: serverTimestamp()})
                setShowModal(!showModal);
                Swal.fire({
                    icon: "success",
                    title: "Seminaire modifié avec succès",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else alert('Veuillez remplir tous les champs')
        } else {
            if(form.id) {
                console.log(form.id)
               try {
                   await setDoc(doc(collection(db, 'seminaires'), form.id), {...form})
                   setShowModal(!showModal);
                   Swal.fire({
                       icon: "success",
                       title: "Seminaire ajouté avec succès",
                       showConfirmButton: false,
                       timer: 1500
                   });
               } catch (e) {
                   console.log(e)
               }
            }
        }
    }

    const onDeleteItem = async (id: string) => {
        try {
            await deleteDoc(doc(db, "seminaires", id))
        } catch (e) {
            console.log(e)
        }
    }

    const onChangeCible = (e: any) => {
        const arrayFromTextarea = e.target.value.split(/\r?\n/);
        setForm({
                ...form,
            cible: arrayFromTextarea
        })
    }

    const onChangePresentation = (e: any) => {
        const arrayFromTextarea = e.target.value.split(/\r?\n/);
        setForm({
                ...form,
            presentation: arrayFromTextarea
        })
    }
    const onChangeObjectifs = (e: any) => {
        const arrayFromTextarea = e.target.value.split(/\r?\n/);
        setForm({
                ...form,
            objectifs: arrayFromTextarea
        })
    }
    const onChangeProgram = (e: any) => {
        const arrayFromTextarea = e.target.value.split(/\r?\n/);
        setForm({
                ...form,
            program: arrayFromTextarea
        })
    }
    const onChangeMethods = (e: any) => {
        const arrayFromTextarea = e.target.value.split(/\r?\n/);
        setForm({
                ...form,
            methods: arrayFromTextarea
        })
    }

    function convert2base64(e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.files != null) {
            const file = e.target.files[0];
            const reader = new FileReader()

            reader.onloadend = () => {
                setForm({
                    ...form, img: reader?.result?.toString()
                })
            }

            reader.readAsDataURL(file);
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
                    <h3 className="font-bold mt-3 mb-3 text-primary">{edit? "Modifier le séminaire" : "Formulaire d'ajout de séminaire"}</h3>
                    <div className="grid lg:grid-cols-2 gap-4">

                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Thème *</p>
                            <input
                                placeholder="Theme"
                                required
                                name="theme"
                                value={form?.theme}
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, theme: e.target.value})}
                            />
                        </div>
                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Date *</p>
                            <input
                                placeholder="Date"
                                name="date"
                                value={form?.date}
                                required
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, date: e.target.value})}

                            />
                        </div>
                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Lieu *</p>
                            <input
                                placeholder="Lieu"
                                name="lieu"
                                value={form?.lieu}
                                required
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, lieu: e.target.value})}

                            />
                        </div>

                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Présentation *</p>
                                <textarea
                                    placeholder="Présentation (séparer les élements par un retour à la ligne"
                                    name="presentation"
                                    required
                                    value={form?.presentation}
                                    className="focus:border-t-gray-900 text-gray min-w-full h-20 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => onChangePresentation(e)}

                                >
                            </textarea>
                            </div>
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Objectifs</p>
                                <textarea
                                    placeholder="Objectifs (séparer les élements par un retour à la ligne"
                                    name="objectif"
                                    value={form?.objectifs}
                                    className="focus:border-t-gray-900 text-gray min-w-full h-20 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={e => onChangeObjectifs(e)}

                                >
                            </textarea>
                            </div>

                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Cible</p>
                                <textarea
                                    placeholder="Cible (séparer les élements par un retour à la ligne"
                                    name="cible"
                                    value={form?.cible}
                                    className="focus:border-t-gray-900 text-gray min-w-full h-20 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={(e) => onChangeCible(e)}
                                >
                            </textarea>
                            </div>
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Program</p>
                                <textarea
                                    placeholder="Program (séparer les élements par un retour à la ligne"
                                    name="program"
                                    value={form?.program}
                                    className="focus:border-t-gray-900 text-gray min-w-full h-20 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={(e) => onChangeProgram(e)}
                                >
                                </textarea>
                            </div>
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Méthode</p>
                                <textarea
                                    placeholder="Program (séparer les élements par un retour à la ligne"
                                    name="method"
                                    value={form?.methods}
                                    className="focus:border-t-gray-900 text-gray min-w-full h-20 rounded border-[1.5px] border-gray-400 p-2"
                                    onChange={(e) => onChangeMethods(e)}
                                >
                            </textarea>
                            </div>
                            <div>
                                <p className="mb-3 text-left font-medium !text-gray-900">Image *</p>
                                <input
                                    placeholder="img"
                                    name="img"
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    required
                                    onChange={e => convert2base64(e)}

                                    alt='img'/>
                            </div>
                            {form.img && <img className="h-40 w-40" src={form.img} alt='img'/>}

                        </div>

                        <button className="mt-3 px-10 bg-primary h-10 rounded-md">
                            Valider
                        </button>
                </form>
            </Modal>

            {showDetail && seminaire && <DetailModal
                show={showDetail}
                onClose={() => {
                    setShowDetail(!showDetail);
                }}
                seminaire={seminaire}
            />}

            <section className="mx-auto mt-12">

                <div className="flex justify-between mr-8 mb-3">
                    <h3 className="font-bold text-2xl">Gestion des séminaires</h3>
                    <div
                        className="flex flex-col hover:bg-secondary p-4 border-t-gray-300 border justify-center h-7 bg-primary align-bottom rounded-lg">
                        <button onClick={() => setShowModal(true)}
                                className="text-secondary text-xs hover:text-white text-center">Ajouter un séminaire
                        </button>
                    </div>
                </div>

                 <TableItem
                     seminaires={seminaires}
                     onDelete={(id: string) => onDeleteItem(id)}
                     onEdit={(seminaire: any) => {
                         setForm(seminaire)
                         setShowModal(true)
                         isEditing(true)
                     }}
                     detail={(seminaire: any) => {
                         setSeminaire(seminaire)
                         setShowDetail(true)
                     }}
                 />

            </section>
        </>

    );
}

export default Seminaire;


{/* seminaires.map(seminaire => {

                        {
                            return <Item title={seminaire.theme}
                                         date={seminaire.date}
                                         img={seminaire.img}
                                         onDelete={() => onDeleteItem(seminaire.id)}
                                         onEdit={() => {
                                             setForm(seminaire)
                                             setShowModal(true)
                                             isEditing(true)
                                         }}
                                         lieu={seminaire.lieu}/>
                        }

                    })*/}
