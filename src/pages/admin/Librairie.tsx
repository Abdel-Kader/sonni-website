import { addDoc, collection, serverTimestamp, doc, onSnapshot, setDoc } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import Swal from 'sweetalert2'
import {Modal} from "../../components/admin/Modal";
import {db} from "../../config/firebase";
import {DetailModal} from "../../components/admin/DetailModal";
import  Spinner  from "../../components/Spinner";
import ArticleTableItem from "../../components/admin/ArticleTableItem";

type formType = {
    id?: string,
    theme: string,
    date: string,
    lieu: string,
    img: string | undefined
}

function Librairie() {
    const [showModal, setShowModal] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [seminaires, setSeminaires] = useState<any[]>([])
    const [seminaire, setSeminaire] = useState<formType>()
    const [form, setForm] = useState<any>({id: '',titre: '', img: '', prix: ''})
    const [edit, isEditing] = useState(false)
    const [loading, isLoading] = useState(false)


    useEffect(() => {

        isLoading(true)
        const subs = onSnapshot(collection(db, "librairie"), (snapshot) => {
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

            if (form.title && form.img && form.prix) {

                await addDoc(collection(db, "librairie"), {
                    ...form,
                    timestamps: serverTimestamp()
                })

                setShowModal(!showModal);

                Swal.fire({
                    icon: "success",
                    title: "Ouvrage ajouté avec succès",
                    showConfirmButton: false,
                    timer: 800
                });
                window.location.reload();

            } else alert('Veuillez remplir tous les champs')
        } else {
            if(form.id) {
                try {
                    await setDoc(doc(collection(db, 'librairie'), form._id), {...form})
                    setShowModal(!showModal);
                    Swal.fire({
                        icon: "success",
                        title: "Ouvrage ajouté avec succès",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } catch (e) {
                    console.log(e)
                }
            }
        }
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
                    <h3 className="font-bold mt-3 mb-3 text-primary">{edit ? "Modifier l'ouvrage" : "Formulaire d'ajout d'ouvrage"}</h3>
                    <div className="grid lg:grid-cols-2 gap-4">

                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Titre *</p>
                            <input
                                placeholder="Titre"
                                required
                                name="titre"
                                value={form?.title}
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, title: e.target.value})}
                            />
                        </div>
                        <div>
                            <p className="mb-3 text-left font-medium !text-gray-900">Prix *</p>
                            <input
                                placeholder="Prix"
                                required
                                type="number"
                                name="prix"
                                value={form?.prix}
                                className="focus:border-t-gray-900 text-gray min-w-full h-10 rounded border-[1.5px] border-gray-400 p-2"
                                onChange={e => setForm({...form, prix: e.target.value})}
                            />
                        </div>


                        <div>
                            <p className="mt-5 mb-3 text-left font-medium !text-gray-900">Image illustrative *</p>
                            <input
                                placeholder="img"
                                name="affiche"
                                type="file"
                                accept="image/png, image/jpeg"
                                required
                                onChange={e => convert2base64(e)}
                                alt='img'/>
                        </div>
                        {form.img && <img className="h-40 w-40 mt-4" src={form.img} alt='img'/>}
                    </div>
                    <button className="mt-3 px-10 bg-primary h-10 rounded-md">
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
                    <h3 className="font-bold text-2xl">librairie</h3>
                    <div
                        className="flex flex-col hover:bg-secondary p-4 border-t-gray-300 border justify-center h-10 bg-primary align-bottom rounded-lg">
                        <button onClick={() => setShowModal(true)}
                                className="text-secondary text-xs hover:text-white text-center">Ajouter un ouvrage
                        </button>
                    </div>
                </div>

                {loading ?
                    <div className="flex flex-1 mt-[20%] justify-center text-center">
                        <Spinner />
                    </div> :
                    seminaires.length > 0 ?
                        <ArticleTableItem
                            seminaires={seminaires}
                            collection="librairie"
                            detail={(seminaire: any) => {
                                setSeminaire(seminaire)
                                setShowDetail(true)
                            }}
                        />
                        : <div className="flex flex-1 mt-[20%] justify-center text-center">
                            <h3 className="font-semibold text-2xl text-primary">La liste des ouvrages est vide ! Veuillez en ajouter</h3>
                        </div>
                }

            </section>
        </>

    );
}

export default Librairie;

