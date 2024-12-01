import Banner from "../../components/layout/Banner";
import React, {useEffect, useState} from "react";
import blogBanner from "../../assets/banners/blog.jpg";
import webinaire1 from "../../assets/webinaires/webinaire1.png";

import {WebinaireItem} from "../../components/WebinaireItem";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../../config/firebase";
import Spinner from "../../components/Spinner";


const WebinairePage = () => {
    const [webinaires, setWebinaires] = useState<any[]>([])
    const [loading, isLoading] = useState(false)

    useEffect(() => {
        isLoading(true)
        const subs = onSnapshot(collection(db, "webinaires"), (snapshot) => {
            let list: any[] = [];
            snapshot.docs.forEach((doc) => {
                list.push({_id: doc.id, ...doc.data()})
            })
            setWebinaires(list)
            isLoading(false)
        })

        return () => {

            subs()
        }

        window.scrollTo(0, 0)

    },[]);
    return (
        <>
            <Banner image={blogBanner} title={"Webinaires"}
                    description={"Consultez-nos webinaires à venir,"}/>
            <section className="mx-auto mt-12">
                {loading ?
                        <div className="flex flex-1 mt-[20%] justify-center text-center">
                            <Spinner />
                        </div> :
                    webinaires.length > 0 ?
                        webinaires.map((webinaire, index) => (
                    <WebinaireItem webinaire={webinaire}/>
                )) : <div className="flex flex-1 mt-[20%] justify-center text-center">
                            <h3 className="font-semibold text-2xl text-primary">La liste des webinaires est vide !</h3>
                        </div>}
            </section>
            </>
            );
            };

            export default WebinairePage;
