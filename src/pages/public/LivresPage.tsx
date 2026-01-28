import React, {useEffect, useState} from 'react';
import blogBanner from "../../assets/banners/blog.jpg";
import Banner from "../../components/layout/Banner";
import {Link} from "react-router-dom";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../../config/firebase";
import Spinner from "../../components/Spinner";

const LivresPage = () => {
    const [seminaires, setSeminaires] = useState<any[]>([])
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


        window.scrollTo(0, 0)

        return () => {

            subs()
        }

    },[]);
    return (
        <>
            <Banner
                image={blogBanner}
                title={"Libraire"}
                description={"Consultez notre Librairie pour vous en procurer des ouvrages."}
            />
            <div className="grid lg:grid-cols-2 gap-6 grid-cols-1 lg:m-24 m-10 items-center ">
                {loading ?
                    <div className="flex flex-1 mt-[20%] justify-center text-center">
                        <Spinner />
                    </div> :
                    seminaires.length > 0 ?
                        seminaires.map(livre => (
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src={livre.img}
                                    key={livre.img}
                                    className="h-96 w-[300px] max-sm:w-full max-sm:h-80 rounded-xl"
                                    alt="team-building-image"/>
                                <p className="mt-3 text-xl text-center text-primary font-medium">{livre.title}</p>
                                <p className="mt-3 text-xl text-center text-primary font-medium">{livre.prix} CFA</p>
                                <Link to="/librairie/achat"
                                      state={{title: livre.title, image: livre.img}}
                                      className="text-white text-center content-center mt-5 h-10 w-[100px] hover:bg-primary bg-secondary align-bottom">
                                    Acheter
                                </Link>
                            </div>
                        ))
                        :
                        <div className="flex flex-1 mt-[20%] justify-center text-center">
                            <h3 className="font-semibold text-2xl text-primary">La liste des ouvrages est vide !</h3>
                        </div>
                }

            </div>
        </>
    );
};

export default LivresPage;
