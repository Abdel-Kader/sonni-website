import { Sidebar } from 'flowbite-react';
import React, {useState, useEffect} from 'react';
import blogBanner from "../assets/banners/blog.jpg";
import Banner from "../components/layout/Banner";

const ArticlePage = () => {
    const [article, setArticle] = useState("")


    return (
        <>
            <Banner image={blogBanner} title={"Articles"}
                    description={"Consultez les articles de SONNI Magazine"}/>
           <div className="flex flex-row m-10">
               <Sidebar aria-label="Default sidebar example" className="ml-12 border-2">
                   <p className="text-lg text-primary font-bold mb-7 text-center">ARCHIVES</p>
                   <Sidebar.Items>
                       <Sidebar.ItemGroup>
                           <Sidebar.Item className={"text-black hover:bg-primary rounded-0 cursor-pointer"}>
                               <button className={"text-black"} onClick={()=>(setArticle("https://sonnimagazine.blogspot.com/2022/07/umaro-sissoco-embalo-un-leadership-fort.html"))}>
                                   Juillet 2022
                               </button>
                           </Sidebar.Item>
                       </Sidebar.ItemGroup>
                       <Sidebar.ItemGroup>
                           <Sidebar.Item className={"text-black hover:bg-primary cursor-pointer"}>
                               <button
                                   onClick={() => (setArticle("https://sonnimagazine.blogspot.com/2020/01/niger-attaque-terroriste-bilan-63.html"))}>
                                   Janvier 2020
                               </button>
                           </Sidebar.Item>
                       </Sidebar.ItemGroup>


                   </Sidebar.Items>
               </Sidebar>
               <div className="flex flex-1 ml-10">
                   {article && <iframe
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


