import React, {useEffect, useState} from 'react';
import certificatBanner from "../../assets/banners/certificat.jpg";
import Banner from "../../components/layout/Banner";
import {SeminaireItem} from "../../components/seminaire/SeminaireItem";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../../config/firebase";
import Spinner from "../../components/Spinner";


const SeminairePage = () => {
    const [loading, isLoading] = useState(false)
    const [seminaires, setSeminaires] = useState<any[]>([])


    useEffect(() => {
        isLoading(true);

        const subs = onSnapshot(collection(db, "seminaires"), (snapshot) => {
            let list: any[] = [];
            snapshot.docs.forEach((doc) => {
                list.push({ _id: doc.id, ...doc.data() });
            });
            setSeminaires(list);
            isLoading(false);
        });

        window.scrollTo(0, 0);

        return () => {
            subs();
        };
    }, []);

    return (
        <>
            <Banner image={certificatBanner} title={"Nos séminaires"}
                    description={"Consultez et inscrivez-vous à nos séminaires à venir"} catalogue={"seminaire"}/>
            <div
                className="col-span-3 m-12 text-xs font-bold tracking-tight text-primary sm:text-xl animate-slidein500 opacity-0">
                Séminaires à venir
            </div>

            <section className="mx-auto mt-12">
                {loading ?
                    <div className="flex flex-1 mt-[20%] justify-center text-center">
                        <Spinner/>
                    </div> :
                    seminaires.length > 0 ?
                        seminaires.map((sem, index) => (
                            <SeminaireItem seminaire={sem}/>
                        ))
                        :
                        <div className="flex flex-1 mt-[20%] justify-center text-center">
                            <h3 className="font-semibold text-2xl text-primary">La liste des séminaires est vide !</h3>
                        </div>}

                    </section>
                    </>
                    );
                };

export default SeminairePage;
