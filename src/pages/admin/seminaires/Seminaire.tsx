import { addDoc, collection, serverTimestamp, getDocs } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import Item from "../../../components/admin/Item";
import {Modal} from "../../../components/admin/Modal";
import {db} from "../../../config/firebase";

type formType = {
    theme: string,
    date: string,
    lieu: string,
    img: string | undefined,
    presentation: string[],
    cible: string[],
    objectifs: string[]
    program?: string[]
}

function Seminaire() {
    const [showModal, setShowModal] = useState(false);
    const [seminaires, setSeminaires] = useState<any[]>([])
    const [form, setForm] = useState<formType>({theme: '', date: '', lieu: '', img: '', presentation: [], cible:[], objectifs: [], program: []})

    useEffect(() => {
        const fetchSemianires = async () => {
            let list: any[] = []
            const semianires = await getDocs(collection(db, "seminaires"));
            semianires.forEach((doc) => {
                list.push({id: doc.id, ...doc.data()})
            })

            setSeminaires(list)
        };

        fetchSemianires()
    }, []);




    async function handleSubmit(e: any) {
        e.preventDefault();

        if (form.theme && form.lieu && form.date) {
            await addDoc(collection(db, "seminaires"), {...form, timestamps: serverTimestamp()})
        } else alert('Veuillez remplir tous les champs')
    }

    const onChange = (e: any) => {
        const arrayFromTextarea = e.target.value.split(/\r?\n/);
        console.log(arrayFromTextarea)
        setForm({
                ...form,
            cible: arrayFromTextarea
        })
        console.log(e.target.name)


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
                    <h3 className="font-bold mt-3 mb-3 text-primary">Formulaire d'ajout de séminaire</h3>
                    <div className="grid lg:grid-cols-1 gap-4">

                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Thème *</p>
                            <input
                                placeholder="Theme"
                                required
                                name="theme"
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, theme: e.target.value})}
                            />
                        </div>
                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Date *</p>
                            <input
                                placeholder="Date"
                                name="date"
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
                                required
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, lieu: e.target.value})}

                            />
                        </div>
                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Présentation *</p>
                            <input
                                placeholder="Présentation"
                                name="presentation"
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
                                className="focus:border-t-gray-900 text-gray min-w-full h-28 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, lieu: e.target.value})}

                            >
                            </textarea>
                        </div>
                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Cible *</p>
                            <textarea
                                placeholder="Cibme (séparer les élements par un retour à la ligne"
                                name="cible"
                                required
                                className="focus:border-t-gray-900 text-gray min-w-full h-28 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={(e)=> onChange(e)}

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
                        {form.img && <img className="h-48 w-48" src={form.img} alt='img'/>}

                    </div>

                    <button className="mt-3 px-10 bg-primary h-10 rounded-md">
                        Valider
                    </button>
                </form>
            </Modal>

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
                <div className="grid grid-cols-5 gap-5">
                    {seminaires.map(seminaire => {
                        return <Item title={seminaire.theme}
                                     date={seminaire.date}
                                     img={seminaire.img}
                                     lieu={seminaire.lieu}/>
                    })}


                </div>

            </section>
        </>

    );
}

export default Seminaire;
