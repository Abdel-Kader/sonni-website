import { Sidebar } from 'flowbite-react';
import React, {useState, useEffect} from 'react';
import blogBanner from "../assets/banners/blog.jpg";
import Banner from "../components/layout/Banner";

const ArticlePage = () => {
    const [article, setArticle] = useState("")
    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    return (
        <>
            <Banner image={blogBanner} title={"Articles"}
                    description={"Consultez les articles de SONNI Magazine"}/>
           <div className="flex flex-row lg:m-10 max-sm:mt-7 max-sm:flex-col">
               <Sidebar aria-label="Default sidebar example" className="lg:ml-12 max-sm:w-full border-2">
                   <p className="text-lg text-primary font-bold mb-7 text-center">ARCHIVES</p>
                   <Sidebar.Items>
                       <Sidebar.ItemGroup onClick={()=>(setArticle("https://sonnimagazine.blogspot.com/2022/07/umaro-sissoco-embalo-un-leadership-fort.html"))}>
                           <Sidebar.Item className={"text-black hover:bg-primary rounded-0 cursor-pointer"}>
                               <button>
                                   Juillet 2022
                               </button>
                           </Sidebar.Item>
                       </Sidebar.ItemGroup>
                       <Sidebar.ItemGroup onClick={() => (setArticle("https://sonnimagazine.blogspot.com/2020/01/niger-attaque-terroriste-bilan-63.html"))}>
                           <Sidebar.Item className={"text-black hover:bg-primary cursor-pointer"}>
                               <button>
                                   Janvier 2020
                               </button>
                           </Sidebar.Item>
                       </Sidebar.ItemGroup>


                   </Sidebar.Items>
               </Sidebar>
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
               </div>
           </div>
        </>
    );
};

export default ArticlePage;


