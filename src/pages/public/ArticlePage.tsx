import { Sidebar } from 'flowbite-react';
import React, {useState, useEffect} from 'react';
import blogBanner from "../../assets/banners/blog.jpg";
import Banner from "../../components/layout/Banner";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../../config/firebase";
import Spinner from "../../components/Spinner";

const ArticlePage = () => {
    const [article, setArticle] = useState("")
    const [openArt, setOpenArt] = useState<any>()
    const [loading, isLoading] = useState(false)
    const [articles, setArticles] = useState<any[]>([])

    useEffect(() => {
        isLoading(true)
        const subs = onSnapshot(collection(db, "articles"), (snapshot) => {
            let list: any[] = [];
            snapshot.docs.forEach((doc) => {
                list.push({_id: doc.id, ...doc.data()})
            })
            const groupedData = list.reduce((acc, current) => {
                const key = current.category;
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(current);
                return acc;
            }, {});
            console.log(list)
            setArticles(list)
            isLoading(false)
        })

        return () => {

            subs()
        }

        window.scrollTo(0, 0)
    },[]);

    return (
        <>
            <Banner image={blogBanner} title={"Articles"}
                    description={"Consultez les articles de SONNI Magazine"}/>
           <div className="flex flex-row lg:m-10 max-sm:mt-7 max-sm:flex-col">
               {loading ? <div className="flex flex-1 mt-[20%] justify-center items-center text-center">
                       <Spinner/>
                   </div>
                   : <Sidebar aria-label="Default sidebar example" className="lg:ml-12 max-sm:w-full border-2">
                       <p className="text-lg text-primary font-bold mb-7 text-center">ARCHIVES</p>
                       <Sidebar.Items>
                           {articles.length > 0 &&
                               articles.map(res => (
                                   <Sidebar.ItemGroup onClick={() => {
                                       setArticle("")
                                       setOpenArt(res)
                                   }}>
                                       <Sidebar.Item className={"text-black hover:bg-primary rounded-0 cursor-pointer"}>
                                           <button>
                                               {
                                                   new Date(res.timestamps.nanoseconds * 1000).toLocaleString('fr', {month: 'long'}).charAt(0).toUpperCase() + new Date(res.timestamps.nanoseconds * 1000).toLocaleString('fr', {month: 'long'}).slice(1)
                                                   + ' ' + new Date(res.timestamps.seconds * 1000).getFullYear()
                                               }
                                           </button>
                                       </Sidebar.Item>
                                   </Sidebar.ItemGroup>
                               ))
                           }
                           <Sidebar.ItemGroup onClick={() => {
                               setOpenArt("")
                               setArticle("https://sonnimagazine.blogspot.com/2022/07/umaro-sissoco-embalo-un-leadership-fort.html")
                           }}>
                               <Sidebar.Item className={"text-black hover:bg-primary rounded-0 cursor-pointer"}>
                                   <button>
                                       Juillet 2022
                                   </button>
                               </Sidebar.Item>
                           </Sidebar.ItemGroup>
                           <Sidebar.ItemGroup onClick={() => {
                               setOpenArt("")
                               setArticle("https://sonnimagazine.blogspot.com/2020/01/niger-attaque-terroriste-bilan-63.html")
                           }}>
                               <Sidebar.Item className={"text-black hover:bg-primary cursor-pointer"}>
                                   <button>
                                       Janvier 2020
                                   </button>
                               </Sidebar.Item>
                           </Sidebar.ItemGroup>


                       </Sidebar.Items>
                   </Sidebar>}
               <div className="flex flex-1 lg:ml-10">
                   {article && <iframe
                       title={article}
                       width="100%"
                       height="750"
                       loading="lazy"
                       allowFullScreen
                       referrerPolicy="no-referrer-when-downgrade"
                       src={article}>
                   </iframe>}
                   {
                       openArt &&
                       <div className="flex flex-col bg-[#dddddd] justify-center items-center">
                           <h3 className="text-3xl text-center text-primary font-semibold mb-5">{openArt.title}</h3>
                           <img className="h-96 w-96 mb-5" src={openArt?.img} alt='img'/>
                           <p className="text-xl m-5">{openArt.content}</p>
                       </div>
                   }

               </div>
           </div>
        </>
    );
};

export default ArticlePage;


